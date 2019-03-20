let CDP = require('chrome-remote-interface'); if (CDP && CDP.__esModule) CDP = CDP.default;

/**
 * The context for testing in headless Chrome. Connects to the remote instance and enables the page for testing.
 * https://chromedevtools.github.io/devtools-protocol
 */
               class RemoteChrome {
  async _init() {
    const client = await CDP({
      host: '127.0.0.1', // how to configure?
      port: '9222',
    })
    const { Network, Page, Runtime } = client
    await Network.enable()
    await Page.enable()
    this.client = client
    this._Page = Page
    this._Runtime = Runtime
    this.Network = Network
    // console.log('[%s]: %s', c('RemoteChrome', 'red'), b('Page enabled', 'green'))
  }
  static get _timeout() {
    return 10000
  }
  /**
   * The enabled page.
   */
  get Page() {
    return this._Page
  }
  /**
   * The runtime.
   */
  get Runtime() {
    return this._Runtime
  }
  async _destroy() {
    if (this.client) {
      await this.client.close()
    }
  }
  /**
   * Evaluates the expression and returns the result. Throws an error if it was present.
   * @param {string} expression
   * @param {boolean} [json=true] Use JSON serialisation for data. If set to false, just the result is returned.
   */
  async evaluate(expression, json = true) {
    const e = json ? `JSON.stringify(${expression}, null, 2)` : expression
    const res = await this.Runtime.evaluate({ expression: e })
    const { exceptionDetails } = res
    if (exceptionDetails) {
      throw new Error(exceptionDetails.exception.description)
    }
    if (!json) {
      return res.result
    }
    const { value, type } = res.result
    if (type == 'undefined') return undefined
    const val = JSON.parse(value)
    return val
  }
  /**
   * Goes to the web page.
   */
  async navigate(url) {
    return this.Page.navigate({ url })
  }
  /**
   * Takes a screenshot and returns a buffer.
   * @param {string} [selector] An optional selector to get the bounding box to capture.
   */
  async takeScreenshot(selector) {
    let rect = {}
    if (selector) rect = await this.evaluate(`document.body.querySelector('${selector}').getBoundingClientRect()`)
    const { data } = await this.Page.captureScreenshot({
      clip: { ...rect, scale: 1 },
    })
    const screenshot = new Buffer(data, 'base64')
    return screenshot
  }
}

module.exports = RemoteChrome
import { ok } from 'zoroaster/assert'
import ChromeContext from '../../src'

/** @type {Object.<string, (c: ChromeContext)>} */
const T = {
  persistentContext: ChromeContext,
  async 'navigates to a web page'({ Page, evaluate, navigate }) {
    await navigate('about:blank')
    await Page.loadEventFired()
    const { value } = await evaluate('window.navigator.userAgent', false)
    ok(/HeadlessChrome/.test(value))
  },
}

export default T
# @contexts/chrome

[![npm version](https://badge.fury.io/js/%40contexts%2Fchrome.svg)](https://npmjs.org/package/@contexts/chrome)

`@contexts/chrome` is The Remote Chrome Context For Testing Like Webdriver.

```sh
yarn add -E @contexts/chrome
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [class `ChromeContext`](#class-chromecontext)
  * [`async navigate(url: string)`](#async-navigateurl-string-void)
  * [`async evaluate(expression: string, json?: boolean)`](#async-evaluateexpression-stringjson-boolean-void)
  * [`Page()`](#page-void)
  * [`Network()`](#network-void)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import ChromeContext from '@contexts/chrome'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## class `ChromeContext`

The class can be used either as a context, or as a persistent context in [_Zoroaster_](https://github.com/contexttesting/zoroaster) testing framework to eliminate the need to manually write set-up and tear-down routines in tests. The context will connect to a headless chrome and expose API for testing.

```js
import { ok } from 'zoroaster/assert'
import ChromeContext from '@contexts/chrome'

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
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true" width="15"></a></p>

### `async navigate(`<br/>&nbsp;&nbsp;`url: string,`<br/>`): void`

Navigates to a webpage.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/3.svg?sanitize=true" width="15"></a></p>

### `async evaluate(`<br/>&nbsp;&nbsp;`expression: string,`<br/>&nbsp;&nbsp;`json?: boolean,`<br/>`): void`

Evaluates an expression and returns the result. By default, the outcome will be serialised on the client and deserialised on the receiving end by the context using JSON to enable passing objects. To disable that, the `json` argument should be set to `false`.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/4.svg?sanitize=true" width="15"></a></p>

### `Page(): void`

The enabled page.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/5.svg?sanitize=true" width="15"></a></p>

### `Network(): void`

The enabled network.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/6.svg?sanitize=true"></a></p>

## Copyright

<table><tr><th><a href="https://artd.eco"><img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" /></a></th><th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://artd.eco/depack">Depack</a>2019</th><th><a href="https://www.technation.sucks" title="Tech Nation Visa"><img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif" alt="Tech Nation Visa" /></a></th><th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th></tr></table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>
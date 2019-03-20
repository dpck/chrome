## API

The package is available by importing its default function:

```js
import ChromeContext from '@contexts/chrome'
```

%~%

## class `ChromeContext`

The class can be used either as a context, or as a persistent context in [_Zoroaster_](https://github.com/contexttesting/zoroaster) testing framework to eliminate the need to manually write set-up and tear-down routines in tests. The context will connect to a headless chrome and expose API for testing.

%EXAMPLE: test/spec/default.js, ../../src => @contexts/chrome%

%~ width="15"%

```### async navigate
[
  ["url", "string"]
]
```

Navigates to a webpage.

%~ width="15"%

```### async evaluate
[
  ["expression", "string"],
  ["json?", "boolean"]
]
```

Evaluates an expression and returns the result. By default, the outcome will be serialised on the client and deserialised on the receiving end by the context using JSON to enable passing objects. To disable that, the `json` argument should be set to `false`.

%~ width="15"%

```### Page
```

The enabled page.

%~ width="15"%

```### Network
```

The enabled network.

%~%
# stb\_image\_js

[stb_image.h](https://github.com/nothings/stb) wrapper for a Web Browser. Or any JavaScript environment that supports [WebAssembly](https://webassembly.org/) and [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Quick Start

1. Copy [stb_image.js](./stb_image.js) and [stb_image.wasm](./stb_image.wasm) to the root of your website.
1. Modify `STB_IMAGE_WASM_PATH` in [stb_image.js](./stb_image.js) if you want different path to [stb_image.wasm](./stb_image.wasm).
1. `<script src='./stb_image.js'></script>`
1.

```javascript
const canvas = document.getElementById("canvas-id");
const ctx = canvas.getContext("2d");
stbi_load_from_url("image.png").then((image) => ctx.putImageData(image, 0, 0));
```

*I'll eventually turn this into a proper npm package. Just copy the files for now. It's simple and straightforward. You have everything you need in here.*

## Rebuilding `stb_image.wasm`

You will need clang 13.0.0+:

```console
$ node build.js
```

## Rebuilding the JS files

```console
$ npm install
$ ./node_modules/.bin/tsc
```

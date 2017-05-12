# alimask

> **alimask** 是一个使用 canvas 生成类似阿里巴巴内部网站水印图片的 JavaScript 库。Online demo [here](http://git.hust.cc/alimask/).

![](alimask.png)![](alimask.png)![](alimask.png)

[![Build Status](https://travis-ci.org/hustcc/alimask.svg?branch=master)](https://travis-ci.org/hustcc/alimask) [![npm](https://img.shields.io/npm/v/alimask.svg)](https://www.npmjs.com/package/alimask) [![npm](https://img.shields.io/npm/dt/alimask.svg)](https://www.npmjs.com/package/alimask) [![npm](https://img.shields.io/npm/l/alimask.svg)](https://www.npmjs.com/package/alimask)


# 1. Install

> **npm install alimask**

Then import it.

```js
<script type="text/javascript" src="dist/alimask.min.js"></script>
// or
var alimask = require('alimask');
// or
import alimask from 'alimask';
```

Then use **alimask(text, options)** API.

```js
alimask('王小为(小为) 888888');

alimask('王小为(小为) 888888', { color: '#f6dcd7' });
```


# 2. API

The unique API is: **alimask(text, options)**.
 
 - **text** (String): required, the text in the watermark image. 
 - **options** (Object): optional, the options of watermark, with keys below:
   - **width** (Number): default is `250`.
   - **height** (Number): default is `80`
   - **color** (String): the text color, default is `#ebebeb`.
   - **alpha** (Float): the text alpha(0 ~ 1), default is `0.8`.
   - **font** (String): the text font style, default is `10px Arial`.

The api return **the base64 string of watermark image** which can be used in css background / img tag.


# 3. Build & Test

> npm install

> npm run build

> npm test


# 4. LICENSE

MIT @[hustcc](https://github.com/hustcc)

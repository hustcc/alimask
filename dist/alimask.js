/**
 * Copyright (c) 2017 hustcc
 * License: MIT
 * Version: v1.0.3
 * GitHub: https://github.com/hustcc/alimask
**/

/* jshint expr: true */
!function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory(root); // nodejs support
    module.exports['default'] = module.exports; // es6 support
  }
  else
    root.alimask = factory(root);
}(typeof window !== 'undefined' ? window : this, function () {
  var canvas, ctx;

  // merge the default value
  function mergeOptions(options) {
    return Object.assign({
      width: 250,
      height: 80,
      color: '#ebebeb',
      alpha: 0.8,
      font: '10px Arial'
    }, options);
  }

  /**
   *  alimask( text, options ) -> string
   *  - text (String): this text on water mask.
   *  - options(Object): water mask options. 
   *    With keys: 
      { 
        width: 250,
        height: 80,
        color: '#ebebeb',
        alpha: 0.8,
        font: '10px Arial'
      }
   *
   *  return base64 of background water mask image.
  **/
  return function(text, options) {
    if (!canvas || !ctx) {
      // if not exist, then initial
      if (typeof document !== 'undefined') {
        canvas = document.createElement('canvas');
      } else {
        /*
          https://github.com/Automattic/node-canvas
          npm install canvas --save
          node-canvas 的安装过程实在是太繁琐了，所以不放入 package.json 的 dependencies。
         */
        var Canvas = module.require('canvas');
        canvas = new Canvas();
      }
      ctx = canvas && canvas.getContext && canvas.getContext('2d');
      if (!canvas || !ctx) return ''; // if not exist also, then return blank.
    }
    options = mergeOptions(options);
    var width = options.width, 
      height = options.height;

    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, width, height); // clear the canvas
    ctx.globalAlpha = 0; // backgroud is alpha

    // ctx.fillStyle = 'white'; // no need because of alipha = 0;
    ctx.fillRect(0, 0, width, height);

    ctx.globalAlpha= options.alpha; // text alpha
    ctx.fillStyle = options.color;
    ctx.font = options.font;

    ctx.textAlign = 'left';
    ctx.textBaseline = 'bottom';

    ctx.translate(width * 0.1, height * 0.9); // margin: 10
    ctx.rotate(-Math.PI / 12); // 15 degree
    ctx.fillText(text, 0, 0);

    return canvas.toDataURL();
  };
});
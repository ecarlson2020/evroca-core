"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Carousel = require("./Carousel");

Object.keys(_Carousel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Carousel[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Carousel[key];
    }
  });
});
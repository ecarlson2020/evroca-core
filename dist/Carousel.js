"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Carousel;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Carousel.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var style = {
  carousel: {
    whiteSpace: "nowrap",
    overflowX: "auto",
    scrollBehavior: "smooth"
  },
  item: {
    whiteSpace: "normal",
    display: "inline-block",
    width: "400px",
    whitespace: "normal",
    padding: "10px"
  },
  chevron: {
    position: "absolute",
    top: "calc(50% - 35px / 2)",
    width: "35px",
    height: "35px",
    textAlign: "center",
    borderRadius: "100%",
    background: "rgba(0,0,0,0.3)",
    color: "#fff"
  }
};

function Carousel(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      myRef = _useState2[0],
      setMyRef = _useState2[1];

  var handleClick = function handleClick(isLeft) {
    var thisMuch = window.innerWidth / 4;

    if (isLeft) {
      myRef.scrollLeft -= thisMuch;
    } else {
      myRef.scrollLeft += thisMuch;
    }
  };

  var drawChevron = function drawChevron(isLeft) {
    var conditionalStyle = isLeft ? {
      left: "15px"
    } : {
      right: "15px"
    };
    return /*#__PURE__*/_react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: _objectSpread(_objectSpread({}, style.chevron), conditionalStyle),
      onClick: function onClick() {
        return handleClick(isLeft);
      }
    }, /*#__PURE__*/_react["default"].createElement("polyline", {
      points: isLeft ? "15 18 9 12 15 6" : "9 18 15 12 9 6"
    }));
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "relative"
    }
  }, drawChevron(true), drawChevron(false), /*#__PURE__*/_react["default"].createElement("div", {
    id: "evroca-carousel",
    style: style.carousel,
    ref: setMyRef
  }, Array.isArray(children) ? children.map(function (el, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      style: style.item
    }, el);
  }) : "Requires elements to be passed")));
} // PropTypes


Carousel.propTypes = {
  children: _propTypes["default"].node.isRequired
};
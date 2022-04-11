"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Carousel;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Carousel.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Carousel(_ref) {
  var children = _ref.children,
      numberOfSlidesOnScreen = _ref.numberOfSlidesOnScreen;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      innerRef = _useState2[0],
      setInnerRef = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      outerRef = _useState4[0],
      setOuterRef = _useState4[1];

  var _useState5 = (0, _react.useState)(1),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      numSlidesOnScreen = _useState6[0],
      setNumSlidesOnScreen = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      currentSlide = _useState8[0],
      setCurrentSlide = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      screenWidth = _useState10[0],
      setScreenWidth = _useState10[1];

  (0, _react.useEffect)(function () {
    if (!screenWidth && outerRef) {
      setScreenWidth(outerRef.offsetWidth);
      window.addEventListener("resize", function () {
        setScreenWidth(outerRef.offsetWidth);
      });
    }
  }, [outerRef]);

  var onScroll = function onScroll() {
    setCurrentSlide(Math.round(outerRef.scrollLeft / innerRef.offsetWidth));
    setNumSlidesOnScreen(Math.round(screenWidth / innerRef.offsetWidth));
  };

  var chevronOnClick = function chevronOnClick(isLeft) {
    outerRef.scrollLeft = isLeft ? (currentSlide - 1) * innerRef.offsetWidth : (currentSlide + 1) * innerRef.offsetWidth;
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
      className: "evroca-chevron",
      style: _objectSpread({}, conditionalStyle),
      onClick: function onClick() {
        return chevronOnClick(isLeft);
      }
    }, /*#__PURE__*/_react["default"].createElement("polyline", {
      points: isLeft ? "15 18 9 12 15 6" : "9 18 15 12 9 6"
    }));
  };

  var circleOnClick = function circleOnClick(index) {
    outerRef.scrollLeft = innerRef.offsetWidth * index;
  };

  var getCarouselItemWidth = function getCarouselItemWidth() {
    if (numberOfSlidesOnScreen !== 4) {
      return 1 / numberOfSlidesOnScreen * 100;
    }

    if (screenWidth < 600) {
      return 100;
    }

    if (screenWidth < 900) {
      return 50;
    }

    return 25;
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "relative"
    }
  }, drawChevron(true), drawChevron(false), /*#__PURE__*/_react["default"].createElement("div", {
    id: "evroca-carousel",
    ref: setOuterRef,
    onScroll: onScroll,
    onLoad: onScroll
  }, Array.isArray(children) ? children.map(function (el, i) {
    return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
      key: i,
      className: "evroca-carousel-item"
    }, i === 0 ? {
      ref: setInnerRef
    } : {}, {
      style: {
        width: "".concat(getCarouselItemWidth(), "%")
      }
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "evroca-carousel-inner"
    }, el));
  }) : "Requires elements to be passed")), /*#__PURE__*/_react["default"].createElement("div", {
    id: "evroca-carousel-circles"
  }, Array.isArray(children) && children.map(function (el, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "evroca-carousel-circle".concat(i >= currentSlide && i < currentSlide + numSlidesOnScreen ? " active" : ""),
      "aria-hidden": "true",
      type: "button",
      key: i,
      onClick: function onClick() {
        return circleOnClick(i);
      }
    });
  })));
} // PropTypes


Carousel.propTypes = {
  children: _propTypes["default"].node.isRequired,
  numberOfSlidesOnScreen: _propTypes["default"].number
};
Carousel.defaultProps = {
  numberOfSlidesOnScreen: 4
};
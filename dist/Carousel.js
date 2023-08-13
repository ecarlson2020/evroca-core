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
var _Carousel = _interopRequireDefault(require("./Carousel.style"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    chevronLeftHovered = _useState12[0],
    setChevronLeftHovered = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    chevronRightHovered = _useState14[0],
    setChevronRightHovered = _useState14[1];
  var onScroll = function onScroll() {
    if (innerRef) {
      setCurrentSlide(Math.round(outerRef.scrollLeft / innerRef.offsetWidth));
      setNumSlidesOnScreen(Math.round(screenWidth / innerRef.offsetWidth));
    }
  };
  var changeScreenWidth = function changeScreenWidth() {
    if (innerRef && outerRef) {
      setScreenWidth(outerRef.offsetWidth);
      setNumSlidesOnScreen(Math.round(outerRef.offsetWidth / innerRef.offsetWidth));
    }
  };
  var chevronOnClick = function chevronOnClick(isLeft) {
    outerRef.scrollLeft = isLeft ? (currentSlide - 1) * innerRef.offsetWidth : (currentSlide + 1) * innerRef.offsetWidth;
  };
  var drawChevron = function drawChevron(isLeft) {
    var conditionalStyle = isLeft ? {
      left: "5px"
    } : {
      right: "5px",
      transform: "rotate(180deg)"
    };
    return /*#__PURE__*/_react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 50 50",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: "1",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: _objectSpread(_objectSpread(_objectSpread({}, conditionalStyle), _Carousel["default"].evrocaChevron), (isLeft && chevronLeftHovered || !isLeft && chevronRightHovered) && {
        color: "#333"
      }),
      onClick: function onClick() {
        return chevronOnClick(isLeft);
      },
      onMouseEnter: isLeft ? function () {
        return setChevronLeftHovered(true);
      } : function () {
        return setChevronRightHovered(true);
      },
      onMouseLeave: isLeft ? function () {
        return setChevronLeftHovered(false);
      } : function () {
        return setChevronRightHovered(false);
      }
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M34.98 3.99a1 1 0 00-.687.303l-20 20a1 1 0 000 1.414l20 20a1 1 0 101.414-1.414L16.414 25 35.707 5.707a1 1 0 00-.727-1.717z"
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
  var showCarouselTogglers = (children === null || children === void 0 ? void 0 : children.length) > numSlidesOnScreen;
  (0, _react.useEffect)(function () {
    if (!screenWidth && outerRef) {
      changeScreenWidth();
      window.addEventListener("resize", changeScreenWidth);
    }
    return function () {
      return window.removeEventListener("resize", changeScreenWidth);
    };
  }, [outerRef]);
  (0, _react.useEffect)(function () {
    onScroll();
  }, [screenWidth]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "evroca-carousel"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "relative"
    }
  }, showCarouselTogglers && drawChevron(true), showCarouselTogglers && drawChevron(false), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({}, _Carousel["default"].evrocaCarouselOuter), {}, {
      padding: showCarouselTogglers ? "0 40px" : ""
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: _Carousel["default"].evrocaCarouselInner,
    ref: setOuterRef,
    onScroll: onScroll,
    onLoad: onScroll
  }, (children === null || children === void 0 ? void 0 : children.length) > 1 ? children.map(function (el, i) {
    return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
      key: i
    }, i === 0 ? {
      ref: setInnerRef
    } : {}, {
      style: _objectSpread(_objectSpread({}, _Carousel["default"].evrocaCarouselItem), {}, {
        width: "".concat(getCarouselItemWidth(), "%")
      })
    }), el);
  }) : /*#__PURE__*/_react["default"].createElement("div", {
    ref: setInnerRef
  }, children)))), showCarouselTogglers && /*#__PURE__*/_react["default"].createElement("div", {
    style: _Carousel["default"].evrocaCarouselCircles
  }, children.map(function (el, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: _objectSpread(_objectSpread(_objectSpread({}, _Carousel["default"].evrocaCarouselCircle), i + 1 === children.length && {
        marginRight: 0
      }), i >= currentSlide && i < currentSlide + numSlidesOnScreen && _Carousel["default"].active),
      "aria-hidden": "true",
      type: "button",
      key: i,
      onClick: function onClick() {
        return circleOnClick(i);
      }
    });
  })));
}

// PropTypes
Carousel.propTypes = {
  children: _propTypes["default"].node.isRequired,
  numberOfSlidesOnScreen: _propTypes["default"].number
};
Carousel.defaultProps = {
  numberOfSlidesOnScreen: 4
};
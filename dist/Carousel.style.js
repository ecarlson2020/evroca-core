"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var styles = {
  evrocaCarouselInner: {
    whiteSpace: "nowrap",
    overflowX: "auto",
    overflowY: "hidden",
    scrollBehavior: "smooth"
  },
  evrocaCarouselItem: {
    display: "inline-block",
    whiteSpace: "normal",
    verticalAlign: "top"
  },
  evrocaChevron: {
    position: "absolute",
    top: "calc(50% - 35px / 2)",
    width: "30px",
    height: "30px",
    textAlign: "center",
    borderRadius: "100%",
    background: "rgba(0,0,0,0.3)",
    color: "#fff",
    zIndex: "1",
    transition: "0.2s ease background",
    cursor: "pointer"
  },
  evrocaCarouselCircles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px"
  },
  evrocaCarouselCircle: {
    boxSizing: "content-box",
    border: "2px solid #bbb",
    background: "#fff",
    borderRadius: "100%",
    width: "5px",
    height: "5px",
    marginRight: "8px",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer"
  },
  active: {
    background: "#999",
    border: "2px solid #999",
    transform: "scale(1.3)"
  }
};
var _default = styles;
exports["default"] = _default;
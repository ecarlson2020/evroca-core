const styles = {
  evrocaCarouselOuter: {
    overflow: "hidden",
  },
  evrocaCarouselInner: {
    whiteSpace: "nowrap",
    overflowX: "auto",
    overflowY: "hidden",
    scrollBehavior: "smooth",
    marginBottom: "-15px",
    perspective: "500px",
  },
  evrocaCarouselItem: {
    display: "inline-block",
    whiteSpace: "normal",
    verticalAlign: "top",
    transition: "0.3s ease transform",
    cursor: "pointer",
  },
  evrocaChevron: {
    position: "absolute",
    top: "calc(50% - 35px / 2)",
    width: "30px",
    height: "30px",
    textAlign: "center",
    borderRadius: "100%",
    transition: "0.2s ease color",
    color: "#bbb",
    cursor: "pointer",
  },
  evrocaCarouselCircles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
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
    cursor: "pointer",
  },
  active: {
    background: "#999",
    border: "2px solid #999",
    transform: "scale(1.3)",
  },
};
export default styles;

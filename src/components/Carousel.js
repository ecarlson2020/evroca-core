import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Carousel.css";

const style = {
  car: {
    display: "flex",
    whiteSpace: "nowrap",
    overflowX: "auto",
    scrollBehavior: "smooth",
  },
  item: {
    width: "calc(25% - 20px)",
    whitespace: "normal",
    padding: "10px",
  },
  chevron: {
    position: "absolute",
    top: "calc(50% - 35px / 2)",
    width: "35px",
    height: "35px",
    textAlign: "center",
    borderRadius: "100%",
    background: "rgba(0,0,0,0.3)",
    color: "#fff",
  },
};

export default function Carousel({ children }) {
  const [myRef, setMyRef] = useState(null);

  const handleClick = (isLeft) => {
    const thisMuch = window.innerWidth / 4;
    if (isLeft) {
      myRef.scrollLeft -= thisMuch;
    } else {
      myRef.scrollLeft += thisMuch;
    }
  };

  const drawChevron = (isLeft) => {
    const conditionalStyle = isLeft ? { left: "15px" } : { right: "15px" };
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ ...style.chevron, ...conditionalStyle }}
        onClick={() => handleClick(isLeft)}
      >
        <polyline points={isLeft ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
      </svg>
    );
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        {drawChevron(true)}
        {drawChevron(false)}
        <div id="evroca-carousel" style={style.car} ref={setMyRef}>
          {Array.isArray(children)
            ? children.map((el, i) => (
                <div key={i} style={style.item}>
                  {el}
                </div>
              ))
            : "Requires elements to be passed"}
        </div>
      </div>
    </div>
  );
}

// PropTypes
Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};

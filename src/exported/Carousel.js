import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Carousel.css";

export default function Carousel({ children }) {
  const [innerRef, setInnerRef] = useState(null);
  const [outerRef, setOuterRef] = useState(null);

  const handleClick = (isLeft) => {
    // adjust this based on padding
    const thisMuch = innerRef.offsetWidth;
    if (isLeft) {
      outerRef.scrollLeft -= thisMuch;
    } else {
      outerRef.scrollLeft += thisMuch;
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
        className="evroca-chevron"
        style={{ ...conditionalStyle }}
        onClick={() => handleClick(isLeft)}
      >
        <polyline points={isLeft ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
      </svg>
    );
  };

  const circleOnClick = (index) => {
    document.getElementById("evroca-carousel").scrollLeft =
      innerRef.offsetWidth * index;
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        {drawChevron(true)}
        {drawChevron(false)}
        <div id="evroca-carousel" ref={setOuterRef}>
          {Array.isArray(children)
            ? children.map((el, i) => (
                <div
                  key={i}
                  className="evroca-carousel-item"
                  {...(i === 0 ? { ref: setInnerRef } : {})}
                >
                  <div className="evroca-carousel-inner">{el}</div>
                </div>
              ))
            : "Requires elements to be passed"}
        </div>
      </div>
      <div id="evroca-carousel-circles">
        {children.map((el, i) => (
          <button type="button" key={i} onClick={() => circleOnClick(i)}>
            {i}
          </button>
        ))}
      </div>
    </div>
  );
}

// PropTypes
Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};

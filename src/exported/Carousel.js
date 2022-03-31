import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Carousel.css";

export default function Carousel({ children }) {
  const [myRef, setMyRef] = useState(null);

  const handleClick = (isLeft) => {
    // adjust this based on padding
    const thisMuch = myRef.offsetWidth + 20;
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
        className="evroca-chevron"
        style={{ ...conditionalStyle }}
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
        <div id="evroca-carousel" ref={setMyRef}>
          {Array.isArray(children)
            ? children.map((el, i) => (
                <div key={i} className="evroca-carousel-item">
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

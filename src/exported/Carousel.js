import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Carousel.css";

export default function Carousel({ children, numberOfSlidesOnScreen }) {
  const [innerRef, setInnerRef] = useState(null);
  const [outerRef, setOuterRef] = useState(null);
  const [numSlidesOnScreen, setNumSlidesOnScreen] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenWidth, setScreenWidth] = useState(null);

  const changeScreenWidth = () => {
    setScreenWidth(outerRef.offsetWidth);
  };

  useEffect(() => {
    if (!screenWidth && outerRef) {
      changeScreenWidth();
      window.addEventListener("resize", changeScreenWidth);
    }

    return () => window.removeEventListener("resize", changeScreenWidth);
  }, [outerRef]);

  const onScroll = () => {
    if (innerRef) {
      setCurrentSlide(Math.round(outerRef.scrollLeft / innerRef.offsetWidth));
      setNumSlidesOnScreen(Math.round(screenWidth / innerRef.offsetWidth));
    }
  };

  const chevronOnClick = (isLeft) => {
    outerRef.scrollLeft = isLeft
      ? (currentSlide - 1) * innerRef.offsetWidth
      : (currentSlide + 1) * innerRef.offsetWidth;
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
        onClick={() => chevronOnClick(isLeft)}
      >
        <polyline points={isLeft ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
      </svg>
    );
  };

  const circleOnClick = (index) => {
    outerRef.scrollLeft = innerRef.offsetWidth * index;
  };

  const getCarouselItemWidth = () => {
    if (numberOfSlidesOnScreen !== 4) {
      return (1 / numberOfSlidesOnScreen) * 100;
    }
    if (screenWidth < 600) {
      return 100;
    }
    if (screenWidth < 900) {
      return 50;
    }
    return 25;
  };

  return (
    <div id="evroca-carousel">
      <div style={{ position: "relative" }}>
        {children?.length > 1 && drawChevron(true)}
        {children?.length > 1 && drawChevron(false)}
        <div
          id="evroca-carousel-inner"
          ref={setOuterRef}
          onScroll={onScroll}
          onLoad={onScroll}
        >
          {Array.isArray(children)
            ? children.map((el, i) => (
                <div
                  key={i}
                  className="evroca-carousel-item"
                  {...(i === 0 ? { ref: setInnerRef } : {})}
                  style={{ width: `${getCarouselItemWidth()}%` }}
                >
                  <div className="evroca-carousel-inner">{el}</div>
                </div>
              ))
            : children}
        </div>
      </div>
      {Array.isArray(children) && (
        <div id="evroca-carousel-circles">
          {children.map((el, i) => (
            <div
              className={`evroca-carousel-circle${
                i >= currentSlide && i < currentSlide + numSlidesOnScreen
                  ? " active"
                  : ""
              }`}
              aria-hidden="true"
              type="button"
              key={i}
              onClick={() => circleOnClick(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// PropTypes
Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  numberOfSlidesOnScreen: PropTypes.number,
};
Carousel.defaultProps = {
  numberOfSlidesOnScreen: 4,
};

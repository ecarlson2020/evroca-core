import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Carousel.style";

export default function Carousel({ children, numberOfSlidesOnScreen }) {
  const [innerRef, setInnerRef] = useState(null);
  const [outerRef, setOuterRef] = useState(null);
  const [numSlidesOnScreen, setNumSlidesOnScreen] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenWidth, setScreenWidth] = useState(null);
  const [chevronLeftHovered, setChevronLeftHovered] = useState(false);
  const [chevronRightHovered, setChevronRightHovered] = useState(false);

  const onScroll = () => {
    if (innerRef) {
      const innerWidth = innerRef.getBoundingClientRect().width;
      setCurrentSlide(Math.round(outerRef.scrollLeft / innerWidth));
      setNumSlidesOnScreen(Math.round(screenWidth / innerWidth));
    }
  };

  const changeScreenWidth = () => {
    const outerWidth = outerRef.getBoundingClientRect().width;
    if (innerRef && outerRef) {
      setScreenWidth(outerWidth);
      setNumSlidesOnScreen(
        Math.round(outerWidth / innerRef.getBoundingClientRect().width),
      );
    }
  };

  const chevronOnClick = (isLeft) => {
    const innerWidth = innerRef.getBoundingClientRect().width;
    outerRef.scrollLeft = isLeft
      ? (currentSlide - 1) * innerWidth
      : (currentSlide + 1) * innerWidth;
  };

  const drawChevron = (isLeft) => {
    const conditionalStyle = isLeft
      ? { left: "5px" }
      : { right: "5px", transform: "rotate(180deg)" };
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          ...conditionalStyle,
          ...styles.evrocaChevron,
          ...(((isLeft && chevronLeftHovered) ||
            (!isLeft && chevronRightHovered)) && {
            color: "#333",
          }),
        }}
        onClick={() => chevronOnClick(isLeft)}
        onMouseEnter={
          isLeft
            ? () => setChevronLeftHovered(true)
            : () => setChevronRightHovered(true)
        }
        onMouseLeave={
          isLeft
            ? () => setChevronLeftHovered(false)
            : () => setChevronRightHovered(false)
        }
      >
        <path d="M34.98 3.99a1 1 0 00-.687.303l-20 20a1 1 0 000 1.414l20 20a1 1 0 101.414-1.414L16.414 25 35.707 5.707a1 1 0 00-.727-1.717z" />
      </svg>
    );
  };

  const circleOnClick = (index) => {
    outerRef.scrollLeft = innerRef.getBoundingClientRect().width * index;
  };

  const itemOnClick = (index) => {
    if (index > currentSlide) {
      circleOnClick(currentSlide + 1);
    } else {
      circleOnClick(currentSlide - 1);
    }
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
    return 33.33333333333333;
  };

  const getSlideTransform = (i) => {
    const scale = 0.95;
    const rotate = 3;
    if (numSlidesOnScreen === 3) {
      if (i === currentSlide) {
        return `scale(${scale}) rotateY(${-rotate}deg)`;
      }
      if (i === currentSlide + 2) {
        return `scale(${scale}) rotateY(${rotate}deg)`;
      }
    }
    return "inherit";
  };

  const showCarouselTogglers = children?.length > numSlidesOnScreen;

  useEffect(() => {
    if (!screenWidth && outerRef) {
      changeScreenWidth();
      window.addEventListener("resize", changeScreenWidth);
    }

    return () => window.removeEventListener("resize", changeScreenWidth);
  }, [outerRef]);

  useEffect(() => {
    onScroll();
  }, [screenWidth]);

  return (
    <div id="evroca-carousel">
      <div style={{ position: "relative" }}>
        {showCarouselTogglers && drawChevron(true)}
        {showCarouselTogglers && drawChevron(false)}
        <div
          style={{
            ...styles.evrocaCarouselOuter,
            padding: showCarouselTogglers ? "0 40px" : "",
          }}
        >
          <div
            style={styles.evrocaCarouselInner}
            ref={setOuterRef}
            onScroll={onScroll}
            onLoad={onScroll}
          >
            {children?.length > 1 ? (
              children.map((el, i) => (
                <div
                  key={i}
                  {...(i === 0 ? { ref: setInnerRef } : {})}
                  style={{
                    ...styles.evrocaCarouselItem,
                    width: `${getCarouselItemWidth()}%`,
                    transform: getSlideTransform(i),
                  }}
                  onClick={() => itemOnClick(i)}
                  aria-hidden="true"
                >
                  {el}
                </div>
              ))
            ) : (
              <div ref={setInnerRef}>{children}</div>
            )}
          </div>
        </div>
      </div>
      {showCarouselTogglers && (
        <div style={styles.evrocaCarouselCircles}>
          {children.map((el, i) => (
            <div
              style={{
                ...styles.evrocaCarouselCircle,
                ...(i + 1 === children.length && { marginRight: 0 }),
                ...(i >= currentSlide &&
                  i < currentSlide + numSlidesOnScreen &&
                  styles.active),
              }}
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

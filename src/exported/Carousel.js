import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const styles = {
  evrocaCarouselInner: {
    whiteSpace: "nowrap",
    overflowX: "auto",
    overflowY: "hidden",
    scrollBehavior: "smooth",
  },
  evrocaCarouselItem: {
    display: "inline-block",
    whiteSpace: "normal",
    verticalAlign: "top",
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
  //  evrocaCarouselCircle:last-child: {
  //    marginRight:0,
  //  },
  //  evrocaChevron:hover: {
  //    background:"rgba(0,0,0,0.7)",
  //  },
  //  active, .evrocaCarouselCircle:hover: {
  //    background:"#999",
  //    border:"2px solid #999",
  //    transform:"scale(1.3)",
  //  },
};

export default function Carousel({ children, numberOfSlidesOnScreen }) {
  const [innerRef, setInnerRef] = useState(null);
  const [outerRef, setOuterRef] = useState(null);
  const [numSlidesOnScreen, setNumSlidesOnScreen] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenWidth, setScreenWidth] = useState(null);
  const [slidesHeight, setSlidesHeight] = useState(0);
  const [chevronLeftHovered, setChevronLeftHovered] = useState(false);
  const [chevronRightHovered, setChevronRightHovered] = useState(false);

  const onScroll = () => {
    if (innerRef) {
      setCurrentSlide(Math.round(outerRef.scrollLeft / innerRef.offsetWidth));
      setNumSlidesOnScreen(Math.round(screenWidth / innerRef.offsetWidth));
      setSlidesHeight(innerRef.scrollHeight);
    }
  };

  const changeScreenWidth = () => {
    if (innerRef && outerRef) {
      setScreenWidth(outerRef.offsetWidth);
      setSlidesHeight(innerRef.scrollHeight);
      setNumSlidesOnScreen(
        Math.round(outerRef.offsetWidth / innerRef.offsetWidth)
      );
    }
  };

  useEffect(() => {
    if (!screenWidth && outerRef) {
      changeScreenWidth();
      window.addEventListener("resize", changeScreenWidth);
    }

    return () => window.removeEventListener("resize", changeScreenWidth);
  }, [outerRef]);

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
        style={{
          ...conditionalStyle,
          ...styles.evrocaChevron,
          ...(((isLeft && chevronLeftHovered) ||
            (!isLeft && chevronRightHovered)) && {
            background: "rgb(0 0 0 / 70%)",
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

  const showCarouselTogglers = children?.length > numSlidesOnScreen;

  return (
    <div id="evroca-carousel" style={styles.evrocaCarousel}>
      <div style={{ height: slidesHeight, overflow: "hidden" }}>
        <div style={{ position: "relative" }}>
          {showCarouselTogglers && drawChevron(true)}
          {showCarouselTogglers && drawChevron(false)}
          <div
            style={styles.evrocaCarouselInner}
            ref={setOuterRef}
            onScroll={onScroll}
            onLoad={onScroll}
          >
            {children?.length > 1
              ? children.map((el, i) => (
                  <div
                    key={i}
                    {...(i === 0 ? { ref: setInnerRef } : {})}
                    style={{
                      ...styles.evrocaCarouselItem,
                      width: `${getCarouselItemWidth()}%`,
                    }}
                  >
                    <div style={styles.evrocaCarouselInner}>{el}</div>
                  </div>
                ))
              : children}
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

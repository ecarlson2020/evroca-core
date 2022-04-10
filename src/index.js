import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./exported";
import "./style.css";

function App() {
  return (
    <Carousel>
      {[1, 2, 3, 4, 5].map((el) => (
        <img
          key={el}
          src="https://ballandkeg.com/images/ball_and_keg_logo.jpg"
          alt="test"
        />
      ))}
    </Carousel>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

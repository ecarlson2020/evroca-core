import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./exported";
import "./style.css";

function App() {
  return (
    <Carousel>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <img
          key={el}
          src="https://ballandkeg.com/images/ball_and_keg_logo.jpg"
          alt="test"
          style={{ border: "1px solid red" }}
        />
      ))}
    </Carousel>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

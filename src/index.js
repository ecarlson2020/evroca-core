import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./exported";
import "./style.css";

function App() {
  return (
    <Carousel>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <div key={el} style={{ border: "10px solid red" }}>
          <img src="https://picsum.photos/200/300" alt="test" />
        </div>
      ))}
    </Carousel>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

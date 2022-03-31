import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components";

function App() {
  return (
    <Carousel>
      <div style={{ background: "red" }}>hey</div>
      <div style={{ background: "red" }}>hey</div>
      <div style={{ background: "red" }}>hey</div>
    </Carousel>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

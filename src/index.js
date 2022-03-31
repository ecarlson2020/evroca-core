import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./exported";

function App() {
  return (
    <Carousel>
      <div style={{ background: "red" }}>
        <h3>1</h3>
      </div>
      <div style={{ background: "red" }}>
        <h3>2</h3>
      </div>
      <div style={{ background: "red" }}>
        <h3>3</h3>
      </div>
      <div style={{ background: "red" }}>
        <h3>4</h3>
      </div>
      <div style={{ background: "red" }}>
        <h3>5</h3>
      </div>
    </Carousel>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

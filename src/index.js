import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components/Carousel";

function App() {
  return (
    <Carousel>
      <div>hey</div>
      <div>hey2</div>
    </Carousel>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

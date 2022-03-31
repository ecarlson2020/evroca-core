import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./exported";
import MyTest from "./components/MyTest";

function App() {
  return (
    <Carousel>
      <MyTest />
      <MyTest />
      <MyTest />
      <MyTest />
      <MyTest />
      <MyTest />
    </Carousel>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

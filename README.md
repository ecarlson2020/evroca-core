# React Carousel
## Installation
```npm i @evroca/core```
## Usage
### index.js:
```
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "@evroca/core";

function App() {
  return (
    <Carousel>
      <div>Item 1</div>
      <div>Item 2</div>
      <img
        src="https://cdn.cnn.com/cnnnext/dam/assets/130604125005-rick-astley-video.jpg"
        alt="Item 3"
        style={{ width: "100%" }}
      />
      <div>Item 5</div>
      <div>Item 6</div>
      <div>Item 7</div>
      <div>Item 8</div>
      <div>Item 9</div>
      <div>Item 10</div>
    </Carousel>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
```

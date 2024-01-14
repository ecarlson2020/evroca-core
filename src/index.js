import React from "react";
import { createRoot } from "react-dom/client";
import Carousel from "./exported";
import "./style.css";

const container = document.querySelector("#root");
const root = createRoot(container);

function App() {
  return (
    <div style={{ width: "50%" }}>
      <Carousel disableRotate>
        {Array(10)
          .fill(Math.random())
          .map((el) => (
            <div key={el} style={{ border: "10px solid red" }}>
              <img src="https://picsum.photos/200/300" alt="test" />
            </div>
          ))}
      </Carousel>
    </div>
  );
}

root.render(<App />);

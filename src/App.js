import React, { useState } from "react";
import "./index.css";

function App() {
  // const [iscomputer, setcomputer] = useState(false);
  // const [banner, setbanner] = useState(true);
  const [boxes, setboxes] = useState([]);
  const [item, setitem] = useState();

  function drawXO(e) {
    const i = e.target.getAttribute("data-arg");
    let v;
    if (item === "X") {
      v = "O";
      setitem("O");
    } else {
      v = "X";
      setitem("X");
    }
    setboxes((prev) => {
      return {
        ...prev,
        [i]: v,
      };
    });
    if (checkwinner()) console.log(true);
    else console.log(false);
  }
  function checkwinner() {
    if (
      (boxes[0] === "X" && boxes[1] === "X" && boxes[2] === "X") ||
      (boxes[0] === "O" && boxes[1] === "O" && boxes[2] === "O")
    )
      return true;
    else if (
      (boxes[3] === "X" && boxes[4] === "X" && boxes[5] === "X") ||
      (boxes[3] === "O" && boxes[4] === "O" && boxes[5] === "O")
    )
      return true;
    else if (
      (boxes[6] === "X" && boxes[7] === "X" && boxes[8] === "X") ||
      (boxes[6] === "O" && boxes[7] === "O" && boxes[8] === "O")
    )
      return true;
    else if (
      (boxes[0] === "X" && boxes[3] === "X" && boxes[6] === "X") ||
      (boxes[0] === "O" && boxes[3] === "O" && boxes[6] === "O")
    )
      return true;
    else if (
      (boxes[0] === "X" && boxes[4] === "X" && boxes[8] === "X") ||
      (boxes[0] === "O" && boxes[4] === "O" && boxes[8] === "O")
    )
      return true;
    else if (
      (boxes[1] === "X" && boxes[4] === "X" && boxes[7] === "X") ||
      (boxes[1] === "O" && boxes[4] === "O" && boxes[7] === "O")
    )
      return true;
    else if (
      (boxes[2] === "X" && boxes[5] === "X" && boxes[8] === "X") ||
      (boxes[2] === "O" && boxes[5] === "O" && boxes[8] === "O")
    )
      return true;
    else if (
      (boxes[2] === "X" && boxes[4] === "X" && boxes[6] === "X") ||
      (boxes[2] === "O" && boxes[4] === "O" && boxes[6] === "O")
    )
      return true;
    else return false;
  }
  return (
    <div className="hero-wrapper">
      <div className="container">
        <span style={{ transform: item ? "scale(1)" : "scale(0)" }}></span>
        <div className="box-row">
          <div
            className="box"
            onClick={drawXO}
            data-arg="0"
            style={{ color: boxes[0] === "O" ? "#ff4c29" : "#1e2022" }}
          >
            <p style={{ display: boxes[0] ? "block" : "none" }}>{boxes[0]}</p>
          </div>
          <div
            className="box"
            onClick={drawXO}
            data-arg="1"
            style={{ color: boxes[1] === "O" ? "#ff4c29" : "#1e2022" }}
          >
            <p style={{ display: boxes[1] ? "block" : "none" }}>{boxes[1]}</p>
          </div>
          <div
            className="box"
            onClick={drawXO}
            data-arg="2"
            style={{ color: boxes[2] === "O" ? "#ff4c29" : "#1e2022" }}
          >
            {" "}
            <p style={{ display: boxes[2] ? "block" : "none" }}>{boxes[2]}</p>
          </div>
        </div>
        <div className="box-row">
          {" "}
          <div
            className="box"
            onClick={drawXO}
            data-arg="3"
            style={{ color: boxes[3] === "O" ? "#ff4c29" : "#1e2022" }}
          >
            {" "}
            <p style={{ display: boxes[3] ? "block" : "none" }}>{boxes[3]}</p>
          </div>
          <div
            className="box"
            onClick={drawXO}
            data-arg="4"
            style={{ color: boxes[4] === "O" ? "#ff4c29" : "#1e2022" }}
          >
            {" "}
            <p style={{ display: boxes[4] ? "block" : "none" }}>{boxes[4]}</p>
          </div>
          <div
            className="box"
            onClick={drawXO}
            data-arg="5"
            style={{ color: boxes[5] === "O" ? "#ff4c29" : "#1e2022" }}
          >
            {" "}
            <p style={{ display: boxes[5] ? "block" : "none" }}>{boxes[5]}</p>
          </div>
        </div>{" "}
        <div className="box-row">
          {" "}
          <div
            className="box"
            onClick={drawXO}
            data-arg="6"
            style={{ color: boxes[6] === "O" ? "#ff4c29" : "#1e2022" }}
          >
            {" "}
            <p style={{ display: boxes[6] ? "block" : "none" }}>{boxes[6]}</p>
          </div>
          <div
            className="box"
            onClick={drawXO}
            data-arg="7"
            style={{ color: boxes[7] === "O" ? "#ff4c29" : "#1e2022" }}
          >
            {" "}
            <p style={{ display: boxes[7] ? "block" : "none" }}>{boxes[7]}</p>
          </div>
          <div
            className="box"
            onClick={drawXO}
            data-arg="8"
            style={{ color: boxes[8] === "O" ? "#ff4c29" : "#1e2022" }}
          >
            {" "}
            <p style={{ display: boxes[8] ? "block" : "none" }}>{boxes[8]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./index.css";
import { IoMdPerson } from "react-icons/io";
import { BsLaptop } from "react-icons/bs";

function App() {
  const bar = document.getElementById("bar");
  const [iscomputer, setcomputer] = useState(false);
  const [banner, setbanner] = useState(true);
  const [boxes, setboxes] = useState([]);
  const [item, setitem] = useState();
  useEffect(() => {}, []);
  useEffect(() => {
    checkwinner();
  }, [boxes]);

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
  }

  function checkwinner() {
    if (
      (boxes[0] === "X" && boxes[1] === "X" && boxes[2] === "X") ||
      (boxes[0] === "O" && boxes[1] === "O" && boxes[2] === "O")
    ) {
      bar.style.transform = "scale(1)";
      bar.style.top = "24%";
      bar.style.transformOrigin = "left";
    } else if (
      (boxes[3] === "X" && boxes[4] === "X" && boxes[5] === "X") ||
      (boxes[3] === "O" && boxes[4] === "O" && boxes[5] === "O")
    ) {
      bar.style.transform = "scale(1)";
      bar.style.transformOrigin = "left";
      bar.style.top = "50%";
    } else if (
      (boxes[6] === "X" && boxes[7] === "X" && boxes[8] === "X") ||
      (boxes[6] === "O" && boxes[7] === "O" && boxes[8] === "O")
    ) {
      bar.style.transform = "scale(1)";
      bar.style.transformOrigin = "left";
      bar.style.top = "75%";
    } else if (
      (boxes[0] === "X" && boxes[3] === "X" && boxes[6] === "X") ||
      (boxes[0] === "O" && boxes[3] === "O" && boxes[6] === "O")
    ) {
      bar.style.transform = "scale(1)";
      bar.style.top = "13%";
      bar.style.left = "17%";
      bar.style.transform = "rotate(90deg)";
    } else if (
      (boxes[0] === "X" && boxes[4] === "X" && boxes[8] === "X") ||
      (boxes[0] === "O" && boxes[4] === "O" && boxes[8] === "O")
    ) {
      bar.style.transform = "scale(1)";
      bar.style.top = "50%";
      bar.style.transform = "rotate(45deg)";
    } else if (
      (boxes[1] === "X" && boxes[4] === "X" && boxes[7] === "X") ||
      (boxes[1] === "O" && boxes[4] === "O" && boxes[7] === "O")
    ) {
      bar.style.transform = "scale(1)";
      bar.style.top = "13%";
      bar.style.left = "50%";
      bar.style.transform = "rotate(90deg)";
    } else if (
      (boxes[2] === "X" && boxes[5] === "X" && boxes[8] === "X") ||
      (boxes[2] === "O" && boxes[5] === "O" && boxes[8] === "O")
    ) {
      bar.style.transform = "scale(1)";
      bar.style.top = "13%";
      bar.style.left = "83%";
      bar.style.transform = "rotate(90deg)";
    } else if (
      (boxes[2] === "X" && boxes[4] === "X" && boxes[6] === "X") ||
      (boxes[2] === "O" && boxes[4] === "O" && boxes[6] === "O")
    ) {
      bar.style.transform = "scale(1)";
      bar.style.top = "50%";
      bar.style.transform = "rotate(-45deg)";
    } else return false;
  }

  return (
    <div className="hero-wrapper">
      <div
        className="modal-layer"
        style={{
          display: "flex",
          width: "100%",
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          top: "0",
          left: "0",
          minHeight: "100vh",
          zIndex: "99",
          backgroundColor: "#c9d6df",
        }}
      >
        <div>
          <h1>tic-tac-toe</h1>
        </div>
        <div>
          <div>
            {" "}
            <h3 onClick={() => setcomputer(false)}>
              vs <IoMdPerson className="icon" />
            </h3>
          </div>
          <div>
            <h3 onClick={() => setcomputer(true)}>
              vs <BsLaptop className="icon" />
            </h3>
          </div>
        </div>
      </div>
      <div className="container">
        <span id="bar"></span>
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

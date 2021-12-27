import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery";
import "bootstrap/dist/js/bootstrap";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="box">
        <h3>Score</h3>
        <br />
        <div>
          <h1>{count}</h1>
          <br />
          <div className="btnGroup">
            <button
              className="btn btn-success"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <span className="glyphicon glyphicon-plus"></span>
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              <span className="glyphicon glyphicon-minus"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

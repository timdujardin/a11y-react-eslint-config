import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href="ddd">click here</a>
        <a href="ddd">here</a>
        <div tabIndex={1}>No tabindex</div>
        <div
          onClick={() => {
            console.log("click div");
          }}
        >
          Click me
        </div>
        <form action="">
          <div>
            <label>Example</label>
            <input type="text" name="example" id="example" />
          </div>
          <div>
            <label>{test}</label>
            <input type="email" name="email" id="email" />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Foo from "./components/Foo";

const App = () => {
  const test = "Test";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Homepage" />
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
        <div tabIndex={1}>No tabindex</div>
        <div
          onClick={() => {
            console.log("click div");
          }}
        >
          Click me
        </div>
      </header>
      <h2>jsx-a11y/anchor-ambiguous-text</h2>
      <a href="ddd">Click here</a>
      <a href="ddd">Here</a>
      <h2>jsx-a11y/aria-props</h2>
      <input aria-labeledby="address_label" />
      <input aria-labelledby="address_label" />
      <h2>jsx-a11y/aria-role</h2>
      <p>
        For the <code>ignoreNonDOM</code> option, this determines if developer
        created components are checked.
      </p>
      <Foo role="blabla"></Foo>
      <h2>jsx-a11y/alt-text</h2>
      <img src={logo} />
      <form action="">
        <div>
          <label>Example</label>
          <input type="text" name="example" id="example" />
        </div>
        <div>
          <label htmlFor="email">{test}</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="email" id="label">
            {test}
          </label>
          <input type="email" name="email" id="email" aria-labelledby="label" />
        </div>
      </form>
    </div>
  );
};

export default App;

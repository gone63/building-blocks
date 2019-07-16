import React from "react";
import "./App.css";
import Queue from "./components/MyQueue/script/index.js";

function App() {
  return (
    <div className="App">
      <header>
        <p id="start-text">Start Building</p>
      </header>
      <Queue></Queue>
    </div>
  );
}

export default App;

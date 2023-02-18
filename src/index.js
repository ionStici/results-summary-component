import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Result } from "./result";
import { Summary } from "./summary";

const MainComponent = function () {
  return (
    <main className="main">
      <div className="app">
        <Result score="76" perc="65" />
        <Summary />
      </div>
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent />);

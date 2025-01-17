import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./result.css";
import "./summary.css";
import { Result } from "./result";
import { Summary } from "./summary";
import data from "./data.json";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: data };
  }

  getAverageScore() {
    const scores = this.state.data.reduce((acc, num) => num.score + acc, 0);
    const length = this.state.data.length;
    const score = Math.floor(scores / length);
    return score;
  }

  render() {
    return (
      <main className="main">
        <div className="app">
          <Result score={this.getAverageScore()} perc="65" />
          <Summary data={data} />
        </div>
      </main>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent />);

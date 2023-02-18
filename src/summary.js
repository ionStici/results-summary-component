import React from "react";
import PropTypes from "prop-types";
import "./summary.css";
import { SummaryItem } from "./summaryItem";

import iconReaction from "./assets/images/icon-reaction.svg";
import iconMemory from "./assets/images/icon-memory.svg";
import iconVerbal from "./assets/images/icon-verbal.svg";
import iconVisual from "./assets/images/icon-visual.svg";

export const Summary = function () {
  return (
    <div className="summary">
      <h1 className="summary__h1">Summary</h1>

      <SummaryItem
        backgroundColor="linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #FF5555"
        defaultColor="hsl(0, 100%, 67%)"
        title="Reaction"
        score="80"
        icon={iconReaction}
      />

      <SummaryItem
        backgroundColor="linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #FFB21E"
        defaultColor="hsl(39, 100%, 56%)"
        title="Memory"
        score="92"
        icon={iconMemory}
      />

      <SummaryItem
        backgroundColor="linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #00BB8F"
        defaultColor="hsl(166, 100%, 37%)"
        title="Verbal"
        score="61"
        icon={iconVerbal}
      />

      <SummaryItem
        backgroundColor="linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #1125D6"
        defaultColor="hsl(234, 85%, 45%)"
        title="Visual"
        score="73"
        icon={iconVisual}
      />

      <button className="summary__btn">Continue</button>
    </div>
  );
};

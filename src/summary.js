import React from "react";
import { SummaryItem } from "./summaryItem";
import iconReaction from "./assets/images/icon-reaction.svg";
import iconMemory from "./assets/images/icon-memory.svg";
import iconVerbal from "./assets/images/icon-verbal.svg";
import iconVisual from "./assets/images/icon-visual.svg";

export const Summary = function ({ data }) {
  return (
    <div className="summary">
      <h1 className="summary__h1">Summary</h1>

      {items.map((item, i) => {
        return (
          <SummaryItem
            key={i}
            backgroundColor={item.backgroundColor}
            defaultColor={item.defaultColor}
            icon={item.icon}
            title={data[i].category}
            score={data[i].score}
          />
        );
      })}

      <button className="summary__btn">Continue</button>
    </div>
  );
};

const items = [
  {
    backgroundColor:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #FF5555",
    defaultColor: "hsl(0, 100%, 67%)",
    icon: iconReaction,
  },
  {
    backgroundColor:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #FFB21E",
    defaultColor: "hsl(39, 100%, 56%)",
    icon: iconMemory,
  },
  {
    backgroundColor:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #00BB8F",
    defaultColor: "hsl(166, 100%, 37%)",
    icon: iconVerbal,
  },
  {
    backgroundColor:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #1125D6",
    defaultColor: "hsl(234, 85%, 45%)",
    icon: iconVisual,
  },
];

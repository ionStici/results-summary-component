import React from "react";

export const SummaryItem = function (props) {
  return (
    <div className="summary__item" style={{ background: `${props.backgroundColor}` }}>
      <img className="summary__item__icon" src={props.icon} alt="" />
      <p className="summary__item__title" style={{ color: `${props.defaultColor}` }}>
        {props.title}
      </p>
      <p className="summary__item__wrapper">
        <span className="summary__item__score">{props.score}</span>
        <span className="summary__item__max"> / 100</span>
      </p>
    </div>
  );
};

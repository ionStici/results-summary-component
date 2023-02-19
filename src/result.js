import React from "react";
import PropTypes from "prop-types";

export const Result = function (props) {
  return (
    <div className="result__box">
      <p className="result__title">Your Result</p>
      <div>
        <p className="result__score">{props.score}</p>
        <p className="result__of">of 100</p>
      </div>
      <p className="result__great">Great</p>
      <p className="result__p">
        Your performance exceed {props.perc}% of the people conducting the test
        here!
      </p>
    </div>
  );
};

Result.propTypes = {
  score: PropTypes.number.isRequired,
  perc: PropTypes.string.isRequired,
};

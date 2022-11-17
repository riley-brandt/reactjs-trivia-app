import React, { useContext, useState } from "react";
import { QuizContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";

import "./Score.css";

function Score() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="end-screen">
      <h2>Final Score</h2>
      <div className="score-container">
        <h1 className="score-numbers">
          {" "}
          {score} / {Questions.length}{" "}
        </h1>
      </div>
      <div className="btn-container">
        <button className="btnStartOver" onClick={restartQuiz}>
          Start Over
        </button>
      </div>
    </div>
  );
}

export default Score;

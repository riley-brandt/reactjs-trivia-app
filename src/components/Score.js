import React, { useContext, useState } from "react";
import { QuizContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";

function Score() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="end-screen">
      <h1>Final Score</h1>
      <h3>
        {" "}
        {score} / {Questions.length}{" "}
      </h3>
      <button onClick={restartQuiz}>Start Over</button>
    </div>
  );
}

export default Score;

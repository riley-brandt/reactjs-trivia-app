import React, { useState, useContext } from "react";
import { Questions } from "../helpers/Questions";
import { QuizContext } from "../helpers/Contexts";

import "./Quiz.css";

function Quiz() {
  const { gameState, setGameState } = useContext(QuizContext);
  const { score, setScore } = useContext(QuizContext);
  const [currentQ, setCurrentQ] = useState(0);
  const [answerSelected, setAnswerSelected] = useState("");
  const [counter, setCounter] = useState(1);

  const handleFinishQuizBtn = () => {
    if (Questions[currentQ].answer === answerSelected) {
      setScore(score + 1);
    }
    setGameState("score");
  };

  const handleNextQuestionBtn = () => {
    if (Questions[currentQ].answer === answerSelected) {
      setScore(score + 1);
    }
    setCounter(counter + 1);
    setCurrentQ(currentQ + 1);
    setAnswerSelected("");
  };

  return (
    <div className="Quiz">
      <div className="counter-container">
        <span>
          {counter} / {Questions.length}
        </span>
      </div>

      <h3>{Questions[currentQ].question}</h3>

      <div className="options">
        <button
          className="btn-quiz"
          onClick={() => setAnswerSelected("option1")}
          style={{
            backgroundColor:
              answerSelected === "option1" ? "#ff60f7" : "#2f3857",
          }}
        >
          {Questions[currentQ].option1}
        </button>

        <button
          className="btn-quiz"
          onClick={() => setAnswerSelected("option2")}
          style={{
            backgroundColor:
              answerSelected === "option2" ? "#ff60f7" : "#2f3857",
          }}
        >
          {Questions[currentQ].option2}
        </button>

        <button
          className="btn-quiz"
          onClick={() => setAnswerSelected("option3")}
          style={{
            backgroundColor:
              answerSelected === "option3" ? "#ff60f7" : "#2f3857",
          }}
        >
          {Questions[currentQ].option3}
        </button>

        <button
          className="btn-quiz"
          onClick={() => setAnswerSelected("option4")}
          style={{
            backgroundColor:
              answerSelected === "option4" ? "#ff60f7" : "#2f3857",
          }}
        >
          {Questions[currentQ].option4}
        </button>
      </div>
      <div className="btn-quiz-nav">
        {currentQ === Questions.length - 1 ? (
          <button onClick={handleFinishQuizBtn}>Finish Quiz</button>
        ) : (
          <button onClick={handleNextQuestionBtn}>Next Question</button>
        )}
      </div>
    </div>
  );
}

export default Quiz;

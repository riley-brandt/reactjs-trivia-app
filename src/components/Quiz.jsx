import React, { useState, useContext } from "react";
import { Questions } from "../helpers/Questions";
import { QuizContext } from "../helpers/Contexts";

import "./Quiz.css";

// ========== STATES & CONTEXT ===========

function Quiz() {
  const { gameState, setGameState } = useContext(QuizContext);
  const { score, setScore } = useContext(QuizContext);
  const [currentQ, setCurrentQ] = useState(0);
  const [answerSelected, setAnswerSelected] = useState("");
  const [counter, setCounter] = useState(1);

  // ========= NAVIGATION BUTTONS ===========

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
        {/* ============= BUTTON 1 ============== */}
        <button
          className="btn-quiz"
          onClick={() => setAnswerSelected("option1")}
          className={
            answerSelected === "option1" ? "btn-quiz-selected" : "btn-quiz"
          }
        >
          {Questions[currentQ].option1}
        </button>

        {/* ============= BUTTON 2 ============== */}

        <button
          className="btn-quiz"
          onClick={() => setAnswerSelected("option2")}
          className={
            answerSelected === "option2" ? "btn-quiz-selected" : "btn-quiz"
          }
        >
          {Questions[currentQ].option2}
        </button>

        {/* ============= BUTTON 3 ============== */}

        <button
          className="btn-quiz"
          onClick={() => setAnswerSelected("option3")}
          className={
            answerSelected === "option3" ? "btn-quiz-selected" : "btn-quiz"
          }
        >
          {Questions[currentQ].option3}
        </button>

        {/* ============= BUTTON 4 ============== */}

        <button
          className="btn-quiz"
          onClick={() => setAnswerSelected("option4")}
          className={
            answerSelected === "option4" ? "btn-quiz-selected" : "btn-quiz"
          }
        >
          {Questions[currentQ].option4}
        </button>
      </div>

      {/* ============= NAVIGATION BUTTONS ============== */}

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

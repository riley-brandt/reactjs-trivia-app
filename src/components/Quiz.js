import React, { useState, useContext } from "react";
import { Questions } from "../helpers/Questions";
import { QuizContext } from "../helpers/Contexts";

import "./Quiz.css";

function Quiz() {
  const { score, setScore } = useContext(QuizContext);
  const [currentQ, setCurrentQ] = useState(0);
  const [answerSelected, setAnswerSelected] = useState("");
  const { gameState, setGameState } = useContext(QuizContext);

  const nextQuestion = () => {
    if (Questions[currentQ].answer == answerSelected) {
      setScore(score + 1);
    }
    setCurrentQ(currentQ + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQ].answer == answerSelected) {
      setScore(score + 1);
    }
    setGameState("score");
  };

  return (
    <div className="Quiz">
      <h3>{Questions[currentQ].question}</h3>
      <div className="options">
        <button
          className="btn-quiz"
          onClick={() => setAnswerSelected("option1")}
        >
          {Questions[currentQ].option1}
        </button>
        <br />
        <button
          className="btn-quiz"
          onClick={() => setAnswerSelected("option2")}
        >
          {Questions[currentQ].option2}
        </button>
        <br />
        <button
          className="btn-quiz"
          onClick={() => setAnswerSelected("option3")}
        >
          {Questions[currentQ].option3}
        </button>
        <br />
        <button
          className="btn-quiz"
          onClick={() => setAnswerSelected("option4")}
        >
          {Questions[currentQ].option4}
        </button>
        <br />
        <br />
      </div>
      <div className="btn-quiz-nav">
        {currentQ == Questions.length - 1 ? (
          <button onClick={finishQuiz}>Finish Quiz</button>
        ) : (
          <button onClick={nextQuestion}>Next Question</button>
        )}
      </div>
    </div>
  );
}

export default Quiz;

// ============ IDEAS & CUT CODE =========

<div>
  {/* onClick={() => console.log(answerSelected)} */}
  {/* if answerSelected === Questions.answer : score +1 */}
  {/* {if currentQ == Questions.length - 1 ? ()} */}
</div>;

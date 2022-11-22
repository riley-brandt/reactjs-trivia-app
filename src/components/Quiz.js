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

  const finishQuiz = () => {
    if (Questions[currentQ].answer == answerSelected) {
      setScore(score + 1);
    }
    setGameState("score");
  };

  const nextQuestionPlusCounter = () => {
    if (Questions[currentQ].answer == answerSelected) {
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
        {currentQ == Questions.length - 1 ? (
          <button onClick={finishQuiz}>Finish Quiz</button>
        ) : (
          <button onClick={nextQuestionPlusCounter}>Next Question</button>
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

// setCounter(counter + 1)

// Button toggle ideas
// 1. create a state for the active button, ie:
// const [activeButton, setActiveButton] = useState();
// 2. create a className/css style for activeButtons
// 3. assign the clicked button the active-btn class
// 4. how do I remove the active class when another button is pressed?

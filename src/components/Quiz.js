import React, { useState, useContext } from "react";
import { Questions } from "../helpers/Questions";
import { QuizContext } from "../helpers/Contexts";

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
        <button onClick={() => setAnswerSelected("option1")}>
          {Questions[currentQ].option1}
        </button>
        <button onClick={() => setAnswerSelected("option2")}>
          {Questions[currentQ].option2}
        </button>
        <button onClick={() => setAnswerSelected("option3")}>
          {Questions[currentQ].option3}
        </button>
        <button onClick={() => setAnswerSelected("option4")}>
          {Questions[currentQ].option4}
        </button>
      </div>
      {currentQ == Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
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

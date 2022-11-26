import React, { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import "./MainMenu.css";

function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="mm-container">
      <h1 className="title">React Trivia</h1>

      <div className="q-mark-container">
        <span>
          <h1 className="q-mark">?</h1>
        </span>
      </div>
      <div className="Menu">
        <button
          onClick={() => {
            setGameState("quiz");
          }}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default MainMenu;

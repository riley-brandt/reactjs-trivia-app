import React, { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import "./MainMenu.css";

function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <>
      <p>A React JS app by Riley Brandt</p>
      <div className="Menu">
        <button
          onClick={() => {
            setGameState("quiz");
          }}
        >
          Start Quiz
        </button>
      </div>
    </>
  );
}

export default MainMenu;

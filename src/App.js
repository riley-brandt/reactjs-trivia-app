import "./App.css";

import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import Score from "./components/Score";

import React, { useState } from "react";
import { QuizContext } from "./helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <div className="title">
        <h1>Pop Quiz !!!</h1>
      </div>
      <div className="app-bg">
        <div className="app-container">
          <QuizContext.Provider
            value={{ gameState, setGameState, score, setScore }}
          >
            {gameState === "menu" && <MainMenu />}
            {gameState === "quiz" && <Quiz />}
            {gameState === "score" && <Score />}
          </QuizContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;

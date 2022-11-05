# Creating a React Quiz App

### Features and Bugs
* If answerSelected state == "", alert with button pressed
* 

### Ideas

* 3 "pages": start, quiz, score
* A variable to track the score
* A counter to track each question
* Beautiful CSS layout

### Stretch goals
* A multi-page layout that uses Routers
* Bootstrap for CSS
* Dynamic backgrounds for questions

### Reference Tutorials

[Pedro Tech: Coding a Quiz App in React JS](https://www.youtube.com/watch?v=8LNb18ibNGs)

[Chris Blakely: React Quiz App Tutorial](https://www.youtube.com/watch?v=Lya-qYiDqIA)

[Learn ReactJS by Building 5 Projects](https://codedamn.com/learn/reactjs-projects#buy)

### Quiz Questions
[W3Schools: React Quiz](https://www.w3schools.com/react/react_quiz.asp)


## What's required?

### States

1. Main menu
2. Playing the game
3. End screen

## Basic Steps

### 1. Setup up useState App.js

In App.js, import useState() and set it up:

```
import "./App.css";
import React, { useState } from "react";

function App() {
  const [gameState, setGameState] = useState("menu");

```

### 2. Create 3 components

- MainMenu.js
- Quiz.js
- EndScreen.js

### 3. Test if components & state are working

```
  return (
    <div className="App">
      <h1>Quiz App</h1>

      {gameState === "menu" && <MainMenu />}
    </div>
  );
```

#### Next

- add a button with className to the MainMenu.js component

### 4. Create a global variable/state/context

- In src/ create folder called "helpers"
- inside the helpers foler, create Context.js

In Context.js:

```
import { createContext } from "react";

export const QuizContext = createContext();

```

- In App.js, import {QuizContext}
- warp everythign in `<QuizContext.Provider>`
- pass the states: `<QuizContext.Provider value={{ gameState, setGameState }}>`

````
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{ gameState, setGameState }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );```
````

In MainMenu.js, import useContext and the {QuizContext}, ie:

```
import React, { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";

```

In MainMenu.js, pass the context:

      const { gameState, setGameState } = useContext(QuizContext);

MainMenu event listener Function

```
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>

```



# Stopped tutorial at 33mins

<https://www.youtube.com/watch?v=8LNb18ibNGs>

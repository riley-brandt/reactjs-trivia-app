# A React Quiz App
##### by Riley Brandt

### Features and Bugs
* If answerSelected state == "", alert with button pressed
* Quiz Buttons: when clicked, bg colour changes

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

## Button Toggle Example:

[Button toggle](https://react.school/ui/button)

In order to add toggle functionality we need to keep track of the state of which button is toggled. We're going to use react hooks for that. We loop through a types array which we use for the text for the Button, but also as the string to keep track of which button is active. We initialize the useState hook with the first type from the array. Then, we loop over the types and render a ButtonToggle, which is extended from our other Button we had previously created so we could add styles to dim the opacity when it is not active (default). When it is active, it's back to the normal opacity.

We check active, which is the current state, against the type that we loop over. When we click on the Button, we run our arrow function which calls the setActive setter. This sets the next active button to be whatever type we click on. This example is practically identical to our tabs guide except we remove the background on the Buttons to make them look like tabs there.

```
import React, { useState } from 'react';
import styled from 'styled-components';
const Button = styled.button`
  /* Same as above */
`;
const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ['Cash', 'Credit Card', 'Bitcoin'];
function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <ButtonGroup>
      {types.map(type => (
        <ButtonToggle
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}


```

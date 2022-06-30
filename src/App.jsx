import React from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';

function App() {

  const [startQuiz, setStartQuiz] = React.useState(true);

  function changeScreen() {
    setStartQuiz(true);
  }

  return (
    <div className="App">
      {!startQuiz && <StartScreen handleClick={changeScreen} />}
      {startQuiz && <QuizScreen />}
    </div>
  );
}

export default App;

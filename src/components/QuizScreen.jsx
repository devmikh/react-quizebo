import React from 'react';
import Question from "./Question";

export default function QuizScreen() {

  const [checkAnswers, setCheckAnswers] = React.useState(true);

  return (
    <div className="quiz-screen-container">
      <div className="questions-container">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
      <div className="results">
        {checkAnswers && <p className="results--score">You scored 3/5 correct answers</p>}
        <button className="results--button">Check Answers</button>
      </div>
    </div>
  )
}
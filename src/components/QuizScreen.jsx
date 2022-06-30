import React from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import QuizQuestion from "./QuizQuestion";

export default function QuizScreen() {

  const [checkAnswers] = React.useState(true);
  const [quizQuestions, setQuizQuestions] = React.useState([]);

  // Make a GET request to the API. Populate the state with the results
  React.useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
      .then(response => {
        setQuizQuestions(response.data.results.map(entry => {
          return ({
            question: entry.question,
            correctAnswer: entry.correct_answer,
            incorrectAnswers: entry.incorrect_answers
          })
        }))
      });
  }, [])

  const quizQuestionElements = quizQuestions.map(quizQuestion => 
    (<QuizQuestion 
        key={nanoid()}
        question={quizQuestion.question} 
        correctAnswer={quizQuestion.correctAnswer}
        incorrectAnswers={quizQuestion.incorrectAnswers}/>));

  return (
    <div className="quiz-screen-container">
      <div className="questions-container">
        {quizQuestionElements}
      </div>
      <div className="results">
        {checkAnswers && <p className="results--score">You scored 3/5 correct answers</p>}
        <button className="results--button">Check Answers</button>
      </div>
    </div>
  )
}
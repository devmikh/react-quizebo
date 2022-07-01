import React from 'react';
import axios from 'axios';
import he from 'he';
import { nanoid } from 'nanoid';
import QuizQuestion from "./QuizQuestion";

export default function QuizScreen() {

  const [checkAnswers] = React.useState(false);
  const [quizState, setQuizState] = React.useState([]);

  // Make a GET request to the API. Populate the state with quiz questions and answers
  React.useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
      .then(response => {
        // Map through each element in results array to create our state
        const quizQuestions = response.data.results.map(result => {
          // create question object with properties questionText as string and answers as array of objects
          const questionObject = {
            id: nanoid(),
            questionText: he.decode(result.question),
            answers: []
          }
          // create answers array. Map through result's incorrect answers and create an answer object for each of them
          const answersArray = result.incorrect_answers.map(incorrectAnswer => {
            return {
              id: nanoid(),
              answerText: he.decode(incorrectAnswer),
              isCorrect: false,
              isSelected: false
            }
          });

          // Add correct answer to answers array
          answersArray.push({
            id: nanoid(),
            answerText: he.decode(result.correct_answer) + " +",
            isCorrect: true,
            isSelected: false
          });

          // shuffle answersArray and assign it to questionObject's answers property
          questionObject.answers = shuffleArray(answersArray);

          // return question object
          return questionObject;

        });

        // Set our state to newly created array of question objects
        setQuizState(quizQuestions);
      })
  }, []);

   // Helper function to shuffle the answers array
   function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  // Function to switch isSelected property of an answer
  function switchIsSelected(questionId, answerId) {
    setQuizState(prevQuizState => {
      return prevQuizState.map(quizQuestion => {
        if (quizQuestion.id === questionId) {
          const answers = quizQuestion.answers.map(answer => {
            if (answer.id === answerId) {
              return {...answer, isSelected: !answer.isSelected}
            } else {
              return {...answer, isSelected: false};
            }
          })
          return {...quizQuestion, answers: answers};
        } else {
          return quizQuestion;
        }
      })
    })
  }

  // Create question elements 
  const quizQuestionElements = quizState.map(quizQuestion => 
    (<QuizQuestion 
        key={quizQuestion.id}
        id={quizQuestion.id}
        questionText={quizQuestion.questionText} 
        answers={quizQuestion.answers}
        switchIsSelected={switchIsSelected} />));

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
import he from 'he';
import { nanoid } from 'nanoid';
import Answer from "./Answer"

export default function QuizQuestion(props) {

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

  function createAnswerElements(propsObj) {
    const answerObjectArray = propsObj.incorrectAnswers.map(answer => {
      return {
        value: he.decode(answer),
        isCorrect: false
      }
    })
    answerObjectArray.push({
      value: he.decode(propsObj.correctAnswer) + "(+)",
      isCorrect: true
    })
    return shuffleArray(answerObjectArray.map(answerObject => 
      (<Answer key={nanoid()} value={answerObject.value}/>)
    ));
  }

  return (
    <div className="question-container">
      <h3 className="question--title">{he.decode(props.question)}</h3>
      <div className="question--answers-container">
        {createAnswerElements(props)}
      </div>
    </div>
  )
}
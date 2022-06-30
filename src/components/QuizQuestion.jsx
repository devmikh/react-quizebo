import Answer from "./Answer"

export default function QuizQuestion(props) {

  function createAnswerElements(propsObj) {
    const answerObjectArray = propsObj.incorrectAnswers.map(answer => {
      return {
        value: answer,
        isCorrect: false
      }
    })
    answerObjectArray.push({
      value: props.correctAnswer,
      isCorrect: true
    })
    return answerObjectArray.map(answerObject => <Answer value={answerObject.value}/>)
  }

  return (
    <div className="question-container">
      <h3 className="question--title">{props.question}</h3>
      <div className="question--answers-container">
        {createAnswerElements(props)}
      </div>
    </div>
  )
}
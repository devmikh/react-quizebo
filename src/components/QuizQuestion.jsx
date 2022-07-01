import Answer from "./Answer"

export default function QuizQuestion(props) {

  const answerElements = props.answers.map(answer => {
    return <Answer
            key={answer.id}
            text={answer.answerText}
            isCorrect={answer.isCorrect}
            isSelected={answer.isSelected}
            switchIsSelected={() => props.switchIsSelected(props.id, answer.id)}/>
  })

  return (
    <div className="question-container">
      <h3 className="question--title">{props.questionText}</h3>
      <div className="question--answers-container">
        {answerElements}
      </div>
    </div>
  )
}
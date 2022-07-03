export default function StartScreen(props) {
  return (
    <div className="start-screen-container">
      <h1 className="start-screen--title">Quizebo</h1>
      <p className="start-screen--description">Take a quiz and test your knowledge!</p>
      <button className="start-screen--button" onClick={props.handleClick}>Start Quiz</button>
    </div>
  )
}
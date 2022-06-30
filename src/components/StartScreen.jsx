export default function StartScreen(props) {
  return (
    <div className="start-screen-container">
      <h1 className="start-screen--title">Quizebo</h1>
      <p className="start-screen--description">Get random quiz to test your general knowledge</p>
      <button className="start-screen--button" onClick={props.handleClick}>Start Quiz</button>
    </div>
  )
}
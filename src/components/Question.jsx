import Answer from "./Answer"

export default function Question() {
  return (
    <div className="question-container">
      <h3 className="question--title">What geometric shape is generally used for stop signs?</h3>
      <div className="question--answers-container">
        <Answer value="Octagon"/>
        <Answer value="Hexagon"/>
        <Answer value="Circle"/>
        <Answer value="Triangle"/>
      </div>
    </div>
  )
}
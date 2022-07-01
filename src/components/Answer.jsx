import React from "react";

export default function Answer(props) {

  function determineColor() {
    let color;
    if (props.checkAnswers) {
      if (props.isCorrect) {
        color = 'green';
      } else {
        if (props.isSelected) {
          color = 'red';
        } else {
          color = 'white';
        }
      }
    } else {
      if (props.isSelected) {
        color = 'blue';
      } else {
        color = 'white';
      }
    }
    return color;
  }

  const styles = {
    backgroundColor: determineColor()
  };

  return (
    <p className="question--answer" onClick={props.checkAnswers ? undefined : props.switchIsSelected} style={styles}>{props.text}</p>
  )
}
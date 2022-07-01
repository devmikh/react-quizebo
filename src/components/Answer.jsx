import React from "react";

export default function Answer(props) {

  function determineColor() {
    let color;
    if (props.checkAnswers) {
      if (props.isCorrect) {
        color = '#94D7A2';
      } else {
        if (props.isSelected) {
          color = '#F8BCBC';
        } else {
          color = 'white';
        }
      }
    } else {
      if (props.isSelected) {
        color = '#D6DBF5';
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
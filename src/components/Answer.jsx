import React from "react";

export default function Answer(props) {

  const styles = {
    backgroundColor: props.isSelected ? 'lightblue' : 'white'
  };

  return (
    <p className="question--answer" onClick={props.switchIsSelected} style={styles}>{props.text}</p>
  )
}
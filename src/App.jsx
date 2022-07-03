import React from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import CategoryScreen from './components/CategoryScreen';
import QuizScreen from './components/QuizScreen';

function App() {

  const [screen, setScreen] = React.useState("start");
  const [category, setCategory] = React.useState({name: "General", number: "9"});

  function goToCategorySelection() {
    setScreen('category');
  }

  function goToQuiz(category) {
    setCategory(category);
    setScreen('quiz');
  }

  return (
    <div className="App">
      {screen === 'start' && <StartScreen handleClick={goToCategorySelection} />}
      {screen === 'category' && <CategoryScreen handleClick={goToQuiz} />}
      {screen === 'quiz' && <QuizScreen category={category} handleClick={goToCategorySelection}/>}
    </div>
  );
}

export default App;

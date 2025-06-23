import { generateQuiz } from '../services/questions.js';
import { useState } from 'react';

import Home from './Home.js';
import Question from './Question.js';
import Summary from './Summary.js';

function Quiz() {

  const [view, setView] = useState('home');
  const [quiz, setQuiz] = useState(null);
  const [quizIndex, setQuizIndex] = useState(0);

  const startQuiz = () => {
    setQuiz(generateQuiz());
    setQuizIndex(0);
    setView('question');
  }

  const submitResponse = (isSuccess) => {
    if (isSuccess) {
      if ((quizIndex + 1) === quiz.length) {
        setView('summary');
      }
      setQuizIndex(quizIndex + 1);
    } else {
      setView('summary');
    }
  }

  const goHomeYoureDrunk = () => {
    setView('home');
  }

  switch(view) {
    case 'home':
      return <Home
        onStart={() => startQuiz()}
      ></Home>;

    case 'question':
      return <Question 
        key={quizIndex} 
        question={quiz[quizIndex]}
        onSubmit={(r) => submitResponse(r)} 
      ></Question>

    case 'summary':
      return <Summary
        result={quizIndex}
        onComplete={() => startQuiz()}
      ></Summary>
  }
}
export default Quiz;

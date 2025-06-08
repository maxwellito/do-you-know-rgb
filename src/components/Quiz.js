import './Quiz.css';
import Layout from './Layout.js';
import { generateQuiz } from '../services/questions.js';
import { useState } from 'react';
import {useColorStore} from '../store.js';
import ColorChoice from './ColorChoice.js';

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
      setQuizIndex(quizIndex + 1);
      if (quiz+1 === quiz.length) {
        setView('summary');
      }
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
function Waste() {


  ///////
  
  const quiz = useColorStore(state => state.quiz);
  const currentQuestion = useColorStore(state => state.currentQuestion);

  const submitChoice = useColorStore(state => state.submitChoice);
  const startQuiz = useColorStore(state => state.startQuiz);
  const goToNextQuestion = useColorStore(state => state.goToNextQuestion);

  let result = '';
  let submitAnswer = (answer) => {
    debugger;
    result = answer === currentQuestion.answer ? 'success' : 'failed';
    submitChoice(answer);
  };

  let title;
  let content;
  let nextAction = <div className="app-footer"></div>;
  let appstyle = ['app'];
  if (currentQuestion) {
    appstyle.push("app-multiaction");
    title = <div className="app-main">{currentQuestion?.answer}</div>
    if (currentQuestion.result !== undefined) {
      appstyle.push(currentQuestion.result ? "success" : "failed");
      content = currentQuestion.choices
        .map((c, i) => <ColorChoice
          key={i}
          index={i+1}
          color={c}
          state={c === currentQuestion.answer ? 'success' : 'fail'}
        ></ColorChoice>)
      nextAction = <button 
        className={"app-footer action"} 
        onClick={() => goToNextQuestion()}
      >NEXT COLOR</button>
    } else {
      content = currentQuestion.choices
        .map((c, i) => <ColorChoice
        key={i}
        index={i+1}
        color={c}
        state="initial"
        onClick={() => submitAnswer(c)} 
      ></ColorChoice>)
    }
    
  } else {
    appstyle.push("app-monoaction");
    title = <div className="app-main">DO<br/>YOU<br/>KNOW<br/>RGB?</div>
    content = <button 
      className="app-action action" 
      onClick={() => startQuiz()} 
    >Start quiz</button>
  }

  const history = quiz
    .map(x => {
      switch (x.result) {
        case undefined:
          return <div className="empty"></div>
        case true:
          return <div className="success"></div>
        case false:
          return <div className="failed"></div>
      }
    })

  return (
    <div className={ appstyle.join(' ') }>
      <div className="app-header">
        <div className="history">{history}</div>
      </div>
      {title}
      {content}
      {nextAction}
    </div>
  );
}

export default Quiz;

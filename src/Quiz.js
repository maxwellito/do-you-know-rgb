import './Quiz.css';
import {useColorStore} from './store.js';

function Quiz() {
  
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

  let content;
  let appstyle = ['app'];
  if (currentQuestion) {
    appstyle.push("app-multiaction");
    if (currentQuestion.result !== undefined) {
      appstyle.push(currentQuestion.result ? "success" : "failed");
      content = currentQuestion.choices
        .map((c, i) => <div 
          key={c}
          className={"app-action" + (i+1)} 
          data-title={'00'+(i+1)+c}  
          style={{background: c === currentQuestion.answer ? c : 'invalid'}}
        >{c === currentQuestion.answer ? '' : '❌'}</div>)
    } else {
      content = currentQuestion.choices
        .map((c, i) => <button 
          key={c}
          className={"app-action" + (i+1)} 
          data-title={'00'+(i+1)} 
          onClick={() => submitAnswer(c)} 
          style={{background: c}}
        ></button>)
    }
    
  } else {
    appstyle.push("app-monoaction");
    content = <button 
      className="app-action" 
      onClick={() => startQuiz()} 
    >Start quiz</button>
  }

  return (
    <div className={ appstyle.join(' ') }>
      <div className="app-header"></div>
      <div className="app-main">{currentQuestion?.answer || "Get ready"}</div>
      {content}
      <button 
            className={"app-footer"} 
            onClick={() => goToNextQuestion()}
          >NEXT</button>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Quiz;

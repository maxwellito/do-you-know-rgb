import {useState} from 'react';
import ColorChoice from './ColorChoice.js';
import Layout from "./Layout";
import './Question.css';

function Question({question, onSubmit}) {

  const [result, setResult] = useState(null);

  if (result !== null) {
    const classname = result ? 'success' : 'failed';
    return <Layout type={"multi " + classname}>
      <div className="layout-header"></div>
      <div className="layout-main color-head">{question?.answer.substring(1)}</div>
      { question.choices
          .map((c, i) => <ColorChoice
            key={i}
            index={i+1}
            color={c}
            state={c === question.answer ? 'success' : 'fail'}
          ></ColorChoice>) }
      <button 
        className="layout-footer action" 
        onClick={() => onSubmit(result)} 
      >NEXT{result ? ' COLOR' : ''}</button>
    </Layout>
  }
  else {
    return <Layout type="multi">
      <div className="layout-header">PICK THE RIGHT COLOR</div>
      <div className="layout-main color-head">{question?.answer.substring(1)}</div>
      { question.choices
          .map((c, i) => <ColorChoice
          key={i}
          index={i+1}
          color={c}
          state="initial"
          onClick={() => setResult(c === question.answer)} 
        ></ColorChoice>) }
      <div className="layout-footer"></div>
    </Layout>
  }
}

export default Question;

import './App.css';
import {useColorStore} from './store.js';

function App() {
  const store = useColorStore((state) => state)
  return (
    <div className="app">
      <div className="app-header"></div>
      <div className="app-main"></div>
      <button className="app-action" onClick={() => store.startQuiz()}></button>
      <div className="app-footer"></div>
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

export default App;

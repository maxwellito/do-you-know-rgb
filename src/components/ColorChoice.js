import {isDark} from '../services/colors';
import './ColorChoice.css';

function themeClass(color) {
  return isDark(color) ? 'dark' : 'light';
}

export default function ColorChoice({index, color, state, onClick = () => {}}) {
  const classes = [`layout-action${index}`];
  let children = null;
  if (state !== "initial") {
    classes.push(themeClass(color));
    if (state === "success") {
      children = <span className="tag tag-plain color-head">{color.substring(1)}</span>;
    } else {
      children = <span className="tag tag-outline color-head">{color.substring(1)}</span>;
    }
  }

  return <button 
    className={classes.join(' ')} 
    data-title={'00'+index}  
    style={{background: color}}
    onClick={() => onClick()}
  >
    {children}
  </button>
}
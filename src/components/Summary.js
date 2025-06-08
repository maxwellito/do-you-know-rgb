function Summary({result, onComplete}) {
  return (
    <div className="layout layout-duo">
      <div className="layout-main">{result}/20</div>
      <button 
        className="layout-action1 action" 
        onClick={() => alert('Soon. For now, use the clipboard')} 
      >SHARE</button>
      <button 
        className="layout-action2 action" 
        onClick={() => onComplete()} 
      >New Game</button>
    </div>
  );
}

export default Summary;

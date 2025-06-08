function Home({onStart}) {
  return (
    <div className="layout layout-mono">
      <div className="layout-main">DO<br/>YOU<br/>KNOW<br/>RGB?</div>
      <button 
        className="layout-action action" 
        onClick={() => onStart()} 
      >Start quiz</button>
    </div>
  );
}

export default Home;

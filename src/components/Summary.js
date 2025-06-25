import Layout from './Layout';

function share () { 
  const shareData = {
    title: "Do you know RGB?",
    text: "20 questions to test your RGB knowledge. How far can you go?",
    url: "https://maxwellito.github.io/do-you-know-rgb",
  };
  if (navigator.canShare && navigator.canShare(shareData)) {
    navigator.share(shareData);
  } else {
    window.alert('Sorry, your browser doesn\'t support it')
  }
}

function Summary({result, onComplete}) {
  const background = result === 20 ? 'rainbow' : '';
  return (
    <Layout type="duo" background={background}>
      <div className="layout-main">{result}/20</div>
      <button 
        className="layout-action1 action" 
        onClick={share} 
      >SHARE</button>
      <button 
        className="layout-action2 action" 
        onClick={() => onComplete()} 
      >New Game</button>
    </Layout>
  );
}

export default Summary;

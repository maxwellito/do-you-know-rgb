import Layout from "./Layout";

function Home({onStart}) {
  return (
    <Layout type="mono" background="sober">
      <div className="layout-main">DO<br/>YOU<br/>KNOW<br/>RGB?</div>
      <button 
        className="layout-action action" 
        onClick={() => onStart()} 
      >Start quiz</button>
    </Layout>
  );
}

export default Home;

import './Layout.css';

function Layout({type, background, children}) {
  const layoutsClasses = ['layout'];
  layoutsClasses.push(`layout-${type}`);
  if (background) {
    layoutsClasses.push(`background-${background}`);
  }
  return (
    <div className={layoutsClasses.join(' ')}>
      {children}

      <div className="d_tr"></div>
      <div className="d_tl"></div>
      <div className="d_bl"></div>
      <div className="d_br"></div>

      <div className="d_r1"></div>
      <div className="d_r2"></div>
      <div className="d_r3"></div>
      <div className="d_r4"></div>
      <div className="d_r5"></div>

      <div className="d_l1"></div>
      <div className="d_l2"></div>
      <div className="d_l3"></div>
      <div className="d_l4"></div>
      <div className="d_l5"></div>

      <div className="d_t1"></div>
      <div className="d_t2"></div>

      <div className="d_b1"></div>
      <div className="d_b2"></div>
    </div>
  );
}

export default Layout;

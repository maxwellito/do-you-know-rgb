import './Layout.css';

function Layout({type, children}) {
  const layoutClassname = `layout-${type}`;
  return (
    <div className={layoutClassname}>
      {children}
    </div>
  );
}

export default Layout;

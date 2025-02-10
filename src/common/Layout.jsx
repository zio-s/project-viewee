import { Outlet, useLocation } from 'react-router-dom';

import Footer from './footer/footer';
import Header from './header';
import { useEffect, useState } from 'react';
import SubHeader from './subheader';

const Layout = () => {
  const [path, setPath] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/changeProfile') {
      setPath(false);
    } else {
      setPath(true);
    }
  });
  return (
    <div className="wrap">
      {path ? <Header /> : <SubHeader />}
      <main className="main">
        {/* 라우터페이지 들어오기 */}
        <Outlet />
      </main>
      {path ? <Footer /> : ''}
    </div>
  );
};

export default Layout;

import { Outlet, useLocation } from 'react-router-dom';

import Header from './header';
import { useEffect, useState } from 'react';
import SubHeader from './subheader';
import ScrollToTopButton from '../ui/button/topButton/ScrollToTopButton';
import { Wrap } from './style';
import Footer from './footer/Footer.jsx';

const Layout = () => {
  const [path, setPath] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/changeprofile') {
      setPath(false);
    } else {
      setPath(true);
    }
  }, [location.pathname]);
  return (
    <Wrap className="wrap">
      {path ? <Header /> : <SubHeader />}
      <main className="main">
        {/* 라우터페이지 들어오기 */}
        <Outlet />
      </main>
      {path ? <Footer /> : ''}
      <ScrollToTopButton size="large" />
    </Wrap>
  );
};

export default Layout;

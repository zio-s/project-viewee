import { Outlet } from 'react-router-dom';

import Footer from './footer/footer';
import Header from './header';

const Layout = () => {
  return (
    <div className='wrap'>
      <Header />
      <main className='main'>
        {/* 라우터페이지 들어오기 */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

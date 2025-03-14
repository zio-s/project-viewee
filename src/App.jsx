import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';
import NotFiles from './pages/notfile';
import MyPage from './pages/mypage';
import Home from './pages/home';
import CateGoryPage from './pages/category';
import Login from './pages/auth/login';
import SignUp from './pages/auth/signup';
import ModifyProfile from './pages/auth/modifyprofile';
import ChangeProfile from './pages/mypage/changeprofile';
import Detail from './pages/detail';
import Coupon from './pages/mypage/coupon';
import Subscribe from './pages/mypage/subscribe';
import QnA from './pages/mypage/qna';
import CustomerCenter from './pages/mypage/customercenter';
import LandingPage from './pages/landing';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const RedirectHandler = () => {
    const hasVisited = localStorage.getItem('hasVisited');

    useEffect(() => {
      if (!hasVisited) {
        localStorage.setItem('hasVisited', 'true');
      }
    }, []);

    if (!hasVisited) {
      return <Navigate to="/landing" replace />;
    }

    return null;
  };
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <>
                  <RedirectHandler />
                  <Home />
                </>
              }
            />
            <Route path="/:category">
              <Route index element={<CateGoryPage />} />
              <Route path=":id" element={<Detail />} />
            </Route>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/modifyprofile" element={<ModifyProfile />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/changeprofile" element={<ChangeProfile />} />
            <Route path="/coupon" element={<Coupon />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/qna" element={<QnA />} />
            <Route path="/support" element={<CustomerCenter />} />
          </Route>
          <Route path="*" element={<NotFiles />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
};

export default App;

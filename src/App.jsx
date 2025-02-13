import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
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
          </Route>
          <Route path="*" element={<NotFiles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

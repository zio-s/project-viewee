import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';
import NotFiles from './pages/notfile';
import MyPage from './pages/mypage';
import Home from './pages/home';
import CateGoryPage from './pages/category';
import Login from './pages/auth/login';
import ChangeProfile from './pages/mypage/changeprofile';
import Detail from './pages/detail';
import SignUp from './pages/auth/signup';
import ModifyProfile from './pages/auth/modifyprofile';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<CateGoryPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/modifyprofile" element={<ModifyProfile />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/changeprofile" element={<ChangeProfile />} />
            <Route path="/detail" element={<Detail />} />
          </Route>
          <Route path="*" element={<NotFiles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

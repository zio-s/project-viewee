import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';
import NotFiles from './pages/notfile';
import MyPage from './pages/mypage';
import Home from './pages/home';
import ChangeProfile from './pages/mypage/changeprofile';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/changeprofile" element={<ChangeProfile />} />
          </Route>

          <Route path="*" element={<NotFiles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

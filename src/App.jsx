import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';
import NotFiles from './pages/notfile';
import MyPage from './pages/mypage';
import Home from './pages/home';
import CateGoryPage from './pages/category';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<CateGoryPage />} />
            <Route path="/mypage" element={<MyPage />} />
          </Route>
          <Route path="*" element={<NotFiles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

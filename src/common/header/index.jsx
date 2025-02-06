import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { HeaderWrap, TopMenu } from './style';
import { useSelector } from 'react-redux';

const Header = () => {
  const authed = useSelector((state) => state.authR);
  return (
    <HeaderWrap>
      <div className="header_inner">
        <h1>
          <Link to="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </h1>
        <NavBar />
      </div>
      <TopMenu className="top-menu">
        {authed ? (
          <li>
            <Link to="/logout">로그아웃</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/join">회원가입</Link>
            </li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
          </>
        )}
      </TopMenu>
    </HeaderWrap>
  );
};

export default Header;

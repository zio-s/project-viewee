import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { HeaderWrap, TopMenu } from './style';
import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import Button from '../../ui/button/defaultButton';
import { useState } from 'react';

const Header = () => {
  const authed = useSelector((state) => state.authR);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
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
        <li>
          <Button variant="search" size="search" onClick={toggleSearch}>
            <i>
              <svg width="28" height="28" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_622_4047)">
                  <path
                    d="M40.7966 37.2626C39.8209 36.328 38.8712 35.3665 37.9487 34.3793C37.1737 33.5918 36.707 33.0189 36.707 33.0189L30.8737 30.2335C33.2091 27.5848 34.498 24.1751 34.4987 20.6439C34.4987 12.6043 27.957 6.06055 19.9154 6.06055C11.8737 6.06055 5.33203 12.6043 5.33203 20.6439C5.33203 28.6835 11.8737 35.2272 19.9154 35.2272C23.5883 35.2272 26.9362 33.8522 29.5049 31.6043L32.2904 37.4376C32.2904 37.4376 32.8633 37.9043 33.6508 38.6793C34.457 39.4355 35.5174 40.4585 36.5341 41.5272L39.3633 44.4272L40.6216 45.7731L45.0404 41.3543L43.6945 40.096C42.9049 39.321 41.8508 38.2918 40.7966 37.2626ZM19.9154 31.0605C14.1716 31.0605 9.4987 26.3876 9.4987 20.6439C9.4987 14.9001 14.1716 10.2272 19.9154 10.2272C25.6591 10.2272 30.332 14.9001 30.332 20.6439C30.332 26.3876 25.6591 31.0605 19.9154 31.0605Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_622_4047">
                    <rect width="50" height="50" fill="white" transform="translate(0.332031 0.939453)" />
                  </clipPath>
                </defs>
              </svg>
            </i>
          </Button>
        </li>
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
      <SearchBar isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
    </HeaderWrap>
  );
};

export default Header;

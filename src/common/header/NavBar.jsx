import { Link } from 'react-router-dom';
import { NavWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = ({ isVisible }) => {
  return (
    <>
      <NavWrap className="nav" $isVisible={isVisible}>
        <ul>
          <li>
            <Link to="/movie">영화</Link>
          </li>
          <li>
            <Link to="/drama">드라마</Link>
          </li>
          <li>
            <Link to="/comedy">예능</Link>
          </li>
          <li>
            <Link to="/animation">애니</Link>
          </li>
          <li>
            <Link to="/kids">키즈</Link>
          </li>
        </ul>
      </NavWrap>
    </>
  );
};

export default NavBar;

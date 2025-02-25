import { Link, useLocation } from 'react-router-dom';
import { NavWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = ({ isVisible }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const activeRoute = '/' + (currentPath.split('/')[1] || '');

  return (
    <>
      <NavWrap className="nav" $isVisible={isVisible}>
        <ul>
          <li className={activeRoute === '/movie' ? 'active' : ''}>
            <Link to="/movie">영화</Link>
          </li>
          <li className={activeRoute === '/drama' ? 'active' : ''}>
            <Link to="/drama">드라마</Link>
          </li>
          <li className={activeRoute === '/comedy' ? 'active' : ''}>
            <Link to="/comedy">예능</Link>
          </li>
          <li className={activeRoute === '/animation' ? 'active' : ''}>
            <Link to="/animation">애니</Link>
          </li>
          <li className={activeRoute === '/kids' ? 'active' : ''}>
            <Link to="/kids">키즈</Link>
          </li>
        </ul>
      </NavWrap>
    </>
  );
};

export default NavBar;

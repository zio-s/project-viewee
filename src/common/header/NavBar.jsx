import { Link } from 'react-router-dom';
import { NavWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
  return (
    <>
      <NavWrap className='nav'>
        <ul>
          <li>
            <Link to='/music'>영화</Link>
          </li>
          <li>
            <Link to='/about'>드라마</Link>
          </li>
          <li>
            <Link to='/artist'>예능</Link>
          </li>
          <li>
            <Link to='/gallery'>애니</Link>
          </li>
          <li>
            <Link to='/notice'>키즈</Link>
          </li>
        </ul>
      </NavWrap>
    </>
  );
};

export default NavBar;

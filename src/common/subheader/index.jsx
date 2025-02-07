import { Link } from 'react-router-dom';
import { HeaderWrap } from './style';

const SubHeader = () => {
  return (
    <HeaderWrap>
      <div className="header_inner">
        <h1>
          <Link to="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </h1>
      </div>
    </HeaderWrap>
  );
};

export default SubHeader;

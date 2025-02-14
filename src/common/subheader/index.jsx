import { Link, useNavigate } from 'react-router-dom';
import { HeaderWrap } from './style';

const SubHeader = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <HeaderWrap>
      <div className="header_inner">
        <h1>
          <div onClick={goBack}>
            <img className="icon" src="/icons/arrow/left.svg" />
            <img className="logo " src="/images/logo.png" alt="" />
          </div>
        </h1>
      </div>
    </HeaderWrap>
  );
};

export default SubHeader;

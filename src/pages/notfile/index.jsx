import { NotFileWrap } from './style';

const NotFiles = () => {
  return (
    <NotFileWrap>
      <div className="inner">
        <span className="error-code">404</span>
        <h2>페이지를 찾을 수 없습니다.</h2>
        <p>요청하신 페이지가 존재하지 않거나 삭제되었을 수 있습니다.</p>
      </div>
    </NotFileWrap>
  );
};

export default NotFiles;

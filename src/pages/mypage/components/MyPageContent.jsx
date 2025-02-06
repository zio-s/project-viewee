import { useState } from 'react';
import Button from '../../../ui/button/defaultButton';
import { MyPageContentWrap } from './style';

const MyPageContent = () => {
  const title = '나의 관심 콘텐츠';
  const [iseditOpen, useIsEditOpen] = useState(false);
  const imgUrl = [
    'https://i.namu.wiki/i/DUfx0Fx81wG8BzpZbFv7TqZ8-Ni2fvWCV7bT9ecVnKY5k29GdnG0llLlsMwSzZODJnbqTPt3EIyMDBxyMVcZNnwLsdyzMCAaAlY3XFRVL0JxYzmG6E7s2TkjSm437ECDGR4ou5p83e7ZmRMqgwkneA.webp',
    'https://i.namu.wiki/i/eV8CouPW0g4ItdpgXbNAC6idRGLv8YcKKyEwHvKVJ4U4RALnqlYTsIDY1iNFZrjOnP065YFXDZ57k8ksxoFrPj06jU0BK-6dUzVoKxI56nUGh1LAMZq0k7tebASOGsyQLyEfiwDZUmF-djyJCd8Rmw.webp',
  ];
  const openToggle = () => {
    useIsEditOpen(!iseditOpen);
  };
  return (
    <MyPageContentWrap>
      <div className="header">
        <h2>{title}</h2>
        <div className="contentEdit">
          {iseditOpen ? (
            <>
              <Button variant="gray" size="small">
                전체선택
              </Button>
              <Button variant="gray" size="small" onClick={openToggle}>
                취소
              </Button>
              <Button variant="primary" size="small">
                선택삭제
              </Button>
            </>
          ) : (
            <Button variant="primary" size="small" onClick={openToggle}>
              수정하기
            </Button>
          )}
        </div>
      </div>

      <div className="content">
        <ul>
          {imgUrl.map((url, i) => (
            <li key={i}>
              <img src={url} />
            </li>
          ))}
        </ul>
        <Button variant="gray" size="large">
          더보기
        </Button>
      </div>
    </MyPageContentWrap>
  );
};

export default MyPageContent;

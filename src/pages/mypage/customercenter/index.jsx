import { useState } from 'react';
import CCNav from './components/ccNav';
import CCNotice from './components/ccNotice';
import { CustomerWrap } from './style';
import CCFnQ from './components/ccfnq';
import CCQnA from './components/ccqna';
import CCTerms from './components/ccterms';
import NotFiles from '../../notfile';

const CustomerCenter = () => {
  const [isActive, setActive] = useState('notice');
  const changeTap = (tab) => {
    setActive(tab);
  };
  return (
    <CustomerWrap>
      <h2>고객센터</h2>
      <CCNav isActive={isActive} changeTap={changeTap} />
      {isActive === 'notice' ? (
        <CCNotice />
      ) : isActive === 'faq' ? (
        <CCFnQ />
      ) : isActive === 'qna' ? (
        <CCQnA />
      ) : isActive === 'terms' ? (
        <CCTerms />
      ) : (
        <NotFiles />
      )}
    </CustomerWrap>
  );
};

export default CustomerCenter;

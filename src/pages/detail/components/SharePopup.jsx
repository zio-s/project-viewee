import { useLocation } from 'react-router';
import { SharePopupWrap } from '../style';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useEffect } from 'react';

const SharePopup = ({ shareToggle, imageUrl }) => {
  const location = useLocation();
  const shareUrl = `https://viewee.vercel.app${location.pathname}`;
  const twitterShare = () => {
    const url = shareUrl;
    const text = `나랑 같이 이거 보자`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(
      url
    )}`;
    window.open(twitterUrl);
  };

  const KAKAO_JS_KEY = import.meta.env.VITE_KAKAO_JS_KEY;

  useEffect(() => {
    if (!window.Kakao) return;
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_JS_KEY);
    }
  }, []);

  const shareMessage = () => {
    if (!window.Kakao) {
      return;
    }

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'OTT Viewee',
        description: `너랑 보고 싶어서 보내!`,
        imageUrl: imageUrl,
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: '보러가기',
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
        {
          title: 'Viewee 둘러보기',
          link: {
            mobileWebUrl: 'https://viewee.vercel.app',
            webUrl: 'https://viewee.vercel.app',
          },
        },
      ],
    });
  };

  return (
    <SharePopupWrap>
      <div className="header">
        <h2>공유하기</h2>
        <img src="/icons/util/times.svg" onClick={shareToggle} />
      </div>
      <div className="shareSNS">
        <div className="twitter" onClick={twitterShare}>
          <div className="icon">
            <img src="/icons/logo/twitter/color.svg" />
          </div>
          twitter
        </div>
        <div className="kakao" onClick={shareMessage}>
          <div className="icon">
            <img src="/icons/logo/kakao/color.svg" />
          </div>
          kakao
        </div>
      </div>
      <div className="copyLink">
        <input type="text" value={shareUrl} />
        <CopyToClipboard text={shareUrl} onCopy={() => alert('주소가 복사되었습니다.')}>
          <button>복사</button>
        </CopyToClipboard>
      </div>
    </SharePopupWrap>
  );
};

export default SharePopup;

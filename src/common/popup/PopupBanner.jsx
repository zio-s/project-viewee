import { useState, useEffect } from 'react';
import {
  StyledCheckboxLabel,
  StyledCloseButton,
  StyledControls,
  StyledPopupContainer,
  StyledPopupImage,
  StyledPopupOverlay,
} from './style';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { authActions } from '../../store/modules/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { showToast } from '../../ui/toast/showToast';
import { notificationActions } from '../../store/modules/notificationSlice';

const POPUP_DATA = [
  {
    id: 1,
    imageUrl: '/images/popup1.png',
    couponCode: 'viewee',
  },
  {
    id: 2,
    imageUrl: '/images/popup2.png',
    couponCode: 'newyears',
  },
  {
    id: 3,
    imageUrl: '/images/popup3.png',
    couponCode: '2025february',
  },
];

const PopupBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authR.user);
  const availableCoupons = useSelector((state) => state.couponR.couponList);
  useEffect(() => {
    const checkPopupVisibility = () => {
      const hiddenUntil = localStorage.getItem('popupHiddenUntil');
      if (!hiddenUntil || new Date().getTime() > parseInt(hiddenUntil)) {
        setIsVisible(true);
        localStorage.removeItem('popupHiddenUntil');
      }
    };

    if (typeof window !== 'undefined') {
      checkPopupVisibility();
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleHide7Days = () => {
    const expiryDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
    localStorage.setItem('popupHiddenUntil', expiryDate.toString());
    setIsVisible(false);
  };

  const handleCouponIssue = (popupData) => {
    try {
      const couponToIssue = availableCoupons.find((coupon) => coupon.code === popupData.couponCode);

      if (!couponToIssue) {
        showToast('error', { message: '로그인 후 쿠폰을 받을 수 있습니다!' });
        return;
      }
      const alreadyIssued = user?.coupon.some((coupon) => coupon.code === popupData.couponCode);

      if (alreadyIssued) {
        showToast('info', { message: '이미 발급된 쿠폰 입니다!' });
        return;
      }
      dispatch(authActions.couponAdd(couponToIssue));
      dispatch(
        notificationActions.createContentNotification({
          userId: user.id,
          contentId: couponToIssue.id,
          contentTitle: couponToIssue.title,
          contentType: 'coupon',
          action: 'couponIssued',
        })
      );
      showToast('success', {
        title: couponToIssue.title,
        name: couponToIssue.title,
        message: '쿠폰이 발급되었습니다.',
      });
      handleClose();
    } catch {
      showToast('error', { message: '쿠폰 발급 중 오류가 발생 했습니다.' });
    }
  };

  if (!isVisible) return null;

  return (
    <StyledPopupOverlay>
      <StyledPopupContainer>
        <StyledCloseButton onClick={handleClose}>×</StyledCloseButton>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="popup-swiper"
        >
          {POPUP_DATA.map((popup) => (
            <SwiperSlide key={popup.id} onClick={() => handleCouponIssue(popup)}>
              <StyledPopupImage
                src={popup.imageUrl}
                alt="팝업 이미지"
                onError={(e) => {
                  e.target.src = '/images/popup1.png';
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <StyledControls>
          <StyledCheckboxLabel onClick={(e) => e.stopPropagation()}>
            <input type="checkbox" onChange={handleHide7Days} />
            7일 동안 보지 않기
          </StyledCheckboxLabel>
        </StyledControls>
      </StyledPopupContainer>
    </StyledPopupOverlay>
  );
};

export default PopupBanner;

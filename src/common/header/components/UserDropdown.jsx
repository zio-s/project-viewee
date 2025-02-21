import { useEffect, useRef, useState } from 'react';
import {
  Divider,
  DropdownMenu,
  IconButton,
  LoginLink,
  MenuItem,
  NavItem,
  ProfileSection,
  ProfileSubtitle,
  ProfileTitle,
} from './style';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../store/modules/authSlice';

const UserDropdown = ({ authed, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const logout = () => {
    dispatch(authActions.logout());
    setIsOpen(false);
  };

  if (!authed) {
    return (
      <NavItem>
        <LoginLink to="/login">로그인</LoginLink>
      </NavItem>
    );
  }

  return (
    <NavItem ref={dropdownRef}>
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <svg width="28" height="28" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M25.332 5.10547C23.2718 5.10547 21.2579 5.7164 19.5448 6.86099C17.8318 8.00559 16.4967 9.63245 15.7083 11.5358C14.9199 13.4392 14.7136 15.5337 15.1155 17.5543C15.5174 19.575 16.5095 21.431 17.9663 22.8878C19.4231 24.3446 21.2792 25.3367 23.2998 25.7386C25.3205 26.1406 27.4149 25.9343 29.3183 25.1459C31.2217 24.3575 32.8486 23.0223 33.9932 21.3093C35.1378 19.5963 35.7487 17.5824 35.7487 15.5221C35.7487 12.7595 34.6512 10.1099 32.6977 8.15644C30.7442 6.20294 28.0947 5.10547 25.332 5.10547ZM25.332 21.7721C24.0959 21.7721 22.8875 21.4056 21.8597 20.7188C20.8319 20.0321 20.0308 19.0559 19.5578 17.9139C19.0847 16.7719 18.961 15.5152 19.2021 14.3028C19.4433 13.0904 20.0385 11.9768 20.9126 11.1027C21.7867 10.2286 22.9003 9.63339 24.1127 9.39223C25.3251 9.15107 26.5818 9.27484 27.7238 9.74789C28.8658 10.2209 29.842 11.022 30.5287 12.0498C31.2155 13.0776 31.582 14.286 31.582 15.5221C31.582 17.1797 30.9236 18.7695 29.7514 19.9416C28.5793 21.1137 26.9896 21.7721 25.332 21.7721ZM44.082 44.6888V42.6055C44.082 38.7377 42.5456 35.0284 39.8107 32.2935C37.0758 29.5586 33.3664 28.0221 29.4987 28.0221H21.1654C17.2976 28.0221 13.5883 29.5586 10.8534 32.2935C8.11848 35.0284 6.58203 38.7377 6.58203 42.6055V44.6888H10.7487V42.6055C10.7487 39.8428 11.8462 37.1933 13.7997 35.2398C15.7532 33.2863 18.4027 32.1888 21.1654 32.1888H29.4987C32.2614 32.1888 34.9109 33.2863 36.8644 35.2398C38.8179 37.1933 39.9154 39.8428 39.9154 42.6055V44.6888H44.082Z"
            fill="white"
          />
        </svg>
      </IconButton>

      {isOpen && (
        <DropdownMenu>
          <ProfileSection>
            <ProfileTitle>
              {user.profileImg && <img src={`${user.profileImg}`} />}
              {user.username ? <span>{user.username}</span> : <span>프로필</span>}
            </ProfileTitle>
            <ProfileSubtitle to="/changeprofile">프로필 전환</ProfileSubtitle>
          </ProfileSection>

          <MenuItem to="/mypage" onClick={() => setIsOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                fill="currentColor"
              />
            </svg>
            마이페이지
          </MenuItem>
          <MenuItem to="/subscribe" onClick={() => setIsOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z"
                fill="currentColor"
              />
            </svg>
            이용권
          </MenuItem>
          <MenuItem to="/coupon" onClick={() => setIsOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4C2.9 2 2 2.9 2 4V11C2 11.55 2.22 12.05 2.59 12.42L11.59 21.42C11.95 21.78 12.45 22 13 22C13.55 22 14.05 21.78 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.45 21.77 11.94 21.41 11.58ZM5.5 7C4.67 7 4 6.33 4 5.5C4 4.67 4.67 4 5.5 4C6.33 4 7 4.67 7 5.5C7 6.33 6.33 7 5.5 7Z"
                fill="currentColor"
              />
            </svg>
            쿠폰함
          </MenuItem>
          <MenuItem to="/support" onClick={() => setIsOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9H8C8 6.79 9.79 5 12 5C14.21 5 16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z"
                fill="currentColor"
              />
            </svg>
            고객센터
          </MenuItem>

          <Divider />
          <MenuItem to="/" onClick={logout}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z"
                fill="currentColor"
              />
            </svg>
            로그아웃
          </MenuItem>
        </DropdownMenu>
      )}
    </NavItem>
  );
};

export default UserDropdown;

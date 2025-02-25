import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { notificationActions } from '../../store/modules/notificationSlice';

// 스타일드 컴포넌트 정의
const NotificationContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const BellButton = styled.button`
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;

const BellBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #e53e3e;
  color: white;
  border-radius: 50%;
  min-width: 18px;
  height: 18px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`;

const NotificationDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 320px;
  max-height: 500px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  overflow: hidden;
  margin-top: 10px;
  border: 1px solid #e2e8f0;
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #e2e8f0;
`;

const HeaderTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

const MarkAllReadButton = styled.button`
  background: none;
  border: none;
  color: #3182ce;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const NotificationList = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const EmptyNotification = styled.div`
  padding: 20px;
  text-align: center;
  color: #718096;
`;

const NotificationItem = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: flex-start;
  background-color: ${(props) => (props.unread ? '#EBF8FF' : 'white')};

  &:hover {
    background-color: ${(props) => (props.unread ? '#BEE3F8' : '#F7FAFC')};
  }
`;

const NotificationIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => {
    switch (props.type) {
      case 'favorite':
        return '#FEF3C7';
      case 'update':
        return '#E0F2FE';
      case 'review':
        return '#E9D8FD';
      case 'coupon':
        return '#D1FAE5';
      default:
        return '#E2E8F0';
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => {
    switch (props.type) {
      case 'favorite':
        return '#D97706';
      case 'update':
        return '#0284C7';
      case 'review':
        return '#7E22CE';
      case 'coupon':
        return '#059669';
      default:
        return '#4A5568';
    }
  }};
  flex-shrink: 0;
`;

const ContentWrapper = styled.div`
  margin-left: 12px;
  flex-grow: 1;
  cursor: pointer;
`;

const NotificationMessage = styled.p`
  margin: 0 0 4px;
  font-size: 14px;
  color: #1a202c;
`;

const NotificationTime = styled.p`
  margin: 0;
  font-size: 12px;
  color: #718096;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #a0aec0;
  margin-left: 8px;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    color: #4a5568;
  }
`;

const DropdownFooter = styled.div`
  padding: 12px;
  text-align: center;
  border-top: 1px solid #e2e8f0;
`;

const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: #3182ce;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const { notifications, unreadCount } = useSelector((state) => state.notiR);
  const { user } = useSelector((state) => state.authR);

  // 로그인한 사용자의 알림만 필터링
  const userNotifications = user
    ? notifications.filter((notification) => !notification.userId || notification.userId === user.id)
    : [];

  // 클릭 외부 감지하여 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 사용자 로그인 시 알림 초기화
  useEffect(() => {
    if (user) {
      dispatch(notificationActions.initNotifications(user.id));
    }
  }, [dispatch, user]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMarkAsRead = (id) => {
    dispatch(notificationActions.markAsRead(id));
  };

  const handleMarkAllAsRead = () => {
    dispatch(notificationActions.markAllAsRead());
  };

  const handleRemoveNotification = (e, id) => {
    e.stopPropagation();
    dispatch(notificationActions.removeNotification(id));
  };

  // 시간 포맷팅 함수
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) {
      return '방금 전';
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes}분 전`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours}시간 전`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      if (days < 7) {
        return `${days}일 전`;
      } else {
        return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
      }
    }
  };

  // 알림 유형에 따른 아이콘 렌더링
  const renderIcon = (type) => {
    switch (type) {
      case 'favorite':
        return '♥';
      case 'update':
        return '↑';
      case 'review':
        return '★';
      case 'coupon':
        return '🎫';
      default:
        return 'i';
    }
  };

  return (
    <NotificationContainer ref={dropdownRef}>
      <BellButton onClick={toggleDropdown}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        {unreadCount > 0 && <BellBadge>{unreadCount}</BellBadge>}
      </BellButton>

      {isOpen && (
        <NotificationDropdown>
          <DropdownHeader>
            <HeaderTitle>알림</HeaderTitle>
            {unreadCount > 0 && <MarkAllReadButton onClick={handleMarkAllAsRead}>모두 읽음 표시</MarkAllReadButton>}
          </DropdownHeader>

          <NotificationList>
            {userNotifications.length === 0 ? (
              <EmptyNotification>알림이 없습니다.</EmptyNotification>
            ) : (
              userNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  unread={!notification.read}
                  onClick={() => handleMarkAsRead(notification.id)}
                >
                  <NotificationIcon type={notification.type}>{renderIcon(notification.type)}</NotificationIcon>
                  <ContentWrapper>
                    <NotificationMessage>{notification.message}</NotificationMessage>
                    <NotificationTime>{formatTime(notification.createdAt)}</NotificationTime>
                  </ContentWrapper>
                  <DeleteButton onClick={(e) => handleRemoveNotification(e, notification.id)}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </DeleteButton>
                </NotificationItem>
              ))
            )}
          </NotificationList>

          {userNotifications.length > 0 && (
            <DropdownFooter>
              <ViewAllButton>모든 알림 보기</ViewAllButton>
            </DropdownFooter>
          )}
        </NotificationDropdown>
      )}
    </NotificationContainer>
  );
};

export default NotificationBell;

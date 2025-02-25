import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notificationActions } from '../../store/modules/notificationSlice';
import {
  BellBadge,
  BellButton,
  ContentWrapper,
  DeleteButton,
  DropdownFooter,
  DropdownHeader,
  EmptyNotification,
  HeaderTitle,
  MarkAllReadButton,
  NotificationContainer,
  NotificationDropdown,
  NotificationIcon,
  NotificationItem,
  NotificationList,
  NotificationMessage,
  NotificationTime,
  ViewAllButton,
} from './style';

const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const { notifications, unreadCount } = useSelector((state) => state.notiR);
  const { user } = useSelector((state) => state.authR);

  const userNotifications = user
    ? notifications.filter((notification) => !notification.userId || notification.userId === user.id)
    : [];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

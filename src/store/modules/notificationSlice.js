import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: JSON.parse(localStorage.getItem('notifications')) || [],
  unreadCount: 0,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      const newNotification = {
        id: Date.now(),
        ...action.payload,
        read: false,
        createdAt: new Date().toISOString(),
      };

      state.notifications = [newNotification, ...state.notifications];
      state.unreadCount += 1;

      localStorage.setItem('notifications', JSON.stringify(state.notifications));
    },

    markAsRead: (state, action) => {
      const notificationId = action.payload;
      const notification = state.notifications.find((item) => item.id === notificationId);

      if (notification && !notification.read) {
        notification.read = true;
        state.unreadCount = Math.max(0, state.unreadCount - 1);

        localStorage.setItem('notifications', JSON.stringify(state.notifications));
      }
    },

    markAllAsRead: (state) => {
      state.notifications = state.notifications.map((notification) => ({
        ...notification,
        read: true,
      }));

      state.unreadCount = 0;
      localStorage.setItem('notifications', JSON.stringify(state.notifications));
    },

    removeNotification: (state, action) => {
      const notificationId = action.payload;
      const notification = state.notifications.find((item) => item.id === notificationId);

      if (notification && !notification.read) {
        state.unreadCount = Math.max(0, state.unreadCount - 1);
      }

      state.notifications = state.notifications.filter((item) => item.id !== notificationId);
      localStorage.setItem('notifications', JSON.stringify(state.notifications));
    },

    clearAllNotifications: (state) => {
      state.notifications = [];
      state.unreadCount = 0;
      localStorage.setItem('notifications', JSON.stringify(state.notifications));
    },

    initNotifications: (state, action) => {
      const userId = action.payload;

      const userNotifications = state.notifications.filter((item) => item.userId === userId);

      state.notifications = userNotifications;
      state.unreadCount = userNotifications.filter((item) => !item.read).length;

      localStorage.setItem('notifications', JSON.stringify(state.notifications));
    },

    createContentNotification: (state, action) => {
      const { userId, contentId, contentTitle, contentType, action: actionType } = action.payload;

      let message = '';
      let type = '';

      switch (actionType) {
        case 'liked':
          message = `성공적으로 "${contentTitle}" ${contentType === 'movie' ? '영화' : '시리즈'}가 찜이 되었습니다.`;
          type = 'favorite';
          break;
        case 'watched':
          message = `시청하신 "${contentTitle}" ${
            contentType === 'movie' ? '영화' : '시리즈'
          }의 새로운 시즌이 출시되었습니다.`;
          type = 'update';
          break;
        case 'review':
          message = `리뷰를 작성하신 "${contentTitle}"에 대한 평점이 업데이트 되었습니다.`;
          type = 'review';
          break;
        case 'coupon':
          message = `새로운 쿠폰이 발급되었습니다: ${contentTitle}`;
          type = 'coupon';
          break;
        case 'download':
          message = `${contentTitle}가 다운로드 목록에 추가 되었습니다.`;
          type = 'download';
          break;
        default:
          message = `"${contentTitle}"에 대한 알림이 있습니다.`;
          type = 'system';
      }

      const newNotification = {
        id: Date.now(),
        userId,
        contentId,
        contentTitle,
        contentType,
        message,
        type,
        read: false,
        createdAt: new Date().toISOString(),
      };

      state.notifications = [newNotification, ...state.notifications];
      state.unreadCount += 1;

      localStorage.setItem('notifications', JSON.stringify(state.notifications));
    },

    // 로그아웃 시 처리
    resetNotifications: (state) => {
      // 로그아웃 시 메모리에서는 초기화하지만 localStorage에는 유지
      // (다른 사용자 로그인 시 해당 사용자의 알림만 표시하기 위함)
      state.notifications = [];
      state.unreadCount = 0;
    },
  },
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice.reducer;

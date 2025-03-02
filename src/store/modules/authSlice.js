import { createSlice } from '@reduxjs/toolkit';
import { notificationActions } from './notificationSlice';

const initialState = {
  joinData: JSON.parse(localStorage.getItem('joinData')) || [
    {
      id: 1,
      username: '김미선',
      userId: 'test',
      userEmail: 'test@test.com',
      password: '123456',
      phone: '010-0000-0000',
      gender: 'female',
      birth: '1997-03-27',
      profileImg: 'images/profileImg1.jpg',
      isMembershiped: false,
      coupon: [],
      liked: [],
      reviewed: [],
      downloaded: [],
      watched: [],
      requested: [],
    },
    {
      id: 2,
      username: '김미선',
      userId: '1',
      userEmail: 'test@test.com',
      password: '123456',
      phone: '010-0000-0000',
      gender: 'female',
      birth: '1997-03-27',
      profileImg: 'images/profileImg1.jpg',
      isMembershiped: false,
      coupon: [],
      liked: [],
      reviewed: [],
      downloaded: [],
      watched: [],
      requested: [],
    },
  ],
  user: JSON.parse(localStorage.getItem('user')) || null,
  prevUser: JSON.parse(localStorage.getItem('prevUser')) || null,
  connected: JSON.parse(localStorage.getItem('connected')) || [[1, 2]],
  authed: localStorage.getItem('authed') === 'true',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup: (state, action) => {
      const { username, userId, password, phone, gender, birth } = action.payload;
      const splitEmail = userId.split('@')[0];
      const newId = state.joinData.length + 1;
      const newUser = {
        id: newId,
        username: username,
        userId: splitEmail,
        userEmail: userId,
        password: password,
        phone: phone,
        gender: gender,
        birth: birth,
        profileImg: 'images/defaultImg1.png',
        isMembershiped: false,
        coupon: [],
        liked: [],
        reviewed: [],
        downloaded: [],
        watched: [],
        requested: [],
      };
      state.joinData.push(newUser);
      state.user = newUser;
      state.prevUser = newUser;
      state.authed = true;
      state.connected.push([newId]);
      localStorage.setItem('joinData', JSON.stringify(state.joinData));
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('authed', 'true');
      localStorage.setItem('connected', JSON.stringify(state.connected));
      localStorage.setItem('prevUser', JSON.stringify(state.prevUser));
    },
    login: (state, action) => {
      const { userId, password } = action.payload;
      const user = state.joinData.find((item) => item.userId === userId && item.password === password);
      const rememberId = document.getElementById('rememberMe');

      if (user) {
        state.user = user;
        state.authed = true;
        state.prevUser = user;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('authed', 'true');
        localStorage.setItem('prevUser', JSON.stringify(user));
        if (rememberId.checked) {
          localStorage.setItem('rememberId', userId);
        } else {
          localStorage.removeItem('rememberId');
        }
      } else {
        alert('이메일 또는 비밀번호가 일치하지 않습니다.');
      }
    },
    logout: (state) => {
      state.user = null;
      state.authed = false;
      state.prevUser = null;
      localStorage.removeItem('user');
      localStorage.removeItem('authed');
      localStorage.removeItem('prevUser');
    },
    deleteLiked: (state, action) => {
      state.user.liked = state.user.liked.filter((item) => !action.payload.includes(item.id));
    },
    deleteWatched: (state, action) => {
      state.user.watched = state.user.watched.filter((item) => !action.payload.includes(item.id));
    },
    deleteDowned: (state, action) => {
      state.user.downloaded = state.user.downloaded.filter((item) => !action.payload.includes(item.id));
      localStorage.setItem('joinData', JSON.stringify(state.joinData));
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('prevUser', JSON.stringify(state.user));
    },
    deleteReviewed: (state, action) => {
      state.user.reviewed = state.user.reviewed.filter((item) => item.id !== action.payload);
      state.joinData = state.joinData.map((item) =>
        item.id === state.user.id
          ? { ...item, reviewed: item.reviewed.filter((item) => item.id !== action.payload) }
          : item
      );
      localStorage.setItem('joinData', JSON.stringify(state.joinData));
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('prevUser', JSON.stringify(state.user));
    },
    changeUser: (state, action) => {
      state.user = state.joinData.find((item) => item.id === action.payload);
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('prevUser', JSON.stringify(state.user));
    },
    changeUserImg: (state, action) => {
      state.user.profileImg = action.payload;
      state.joinData = state.joinData.map((item) => {
        if (item.id === state.user.id) {
          return {
            ...item,
            profileImg: action.payload,
          };
        }
        return item;
      });
      state.prevUser = state.user;
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('prevUser', JSON.stringify(state.prevUser));
      localStorage.setItem('joinData', JSON.stringify(state.joinData));
    },
    changeUserName: (state, action) => {
      state.user.username = action.payload;
      state.joinData = state.joinData.map((item) => {
        if (item.id === state.user.id) {
          return {
            ...item,
            username: action.payload,
          };
        }
        return item;
      });
      state.prevUser = state.user;
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('prevUser', JSON.stringify(state.prevUser));
      localStorage.setItem('joinData', JSON.stringify(state.joinData));
    },
    changeReviewRate: (state, action) => {
      const { id, index } = action.payload;
      const rate = index + 1;
      console.log(action.payload);
      state.joinData = state.joinData.map((item) =>
        item.id === state.user.id
          ? {
              ...item,
              reviewed: item.reviewed.map((item) => (item.id === id ? { ...item, rate: rate } : item)),
            }
          : item
      );
      state.user.reviewed = state.user.reviewed.map((item) => (item.id === id ? { ...item, rate: rate } : item));
      localStorage.setItem('joinData', JSON.stringify(state.joinData));
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('prevUser', JSON.stringify(state.user));
    },
    prevUser: (state, action) => {
      state.user = action.payload;
    },
    editReview: (state, action) => {
      const { id, content } = action.payload;
      state.joinData = state.joinData.map((item) =>
        item.id === state.user.id
          ? {
              ...item,
              reviewed: item.reviewed.map((item) => (item.id === id ? { ...item, content: content } : item)),
            }
          : item
      );
      state.user.reviewed = state.user.reviewed.map((item) => (item.id === id ? { ...item, content: content } : item));
      state.prevUser = state.user;
    },
    couponAdd: (state, action) => {
      state.user.coupon.push(action.payload);
      state.joinData = state.joinData.map((item) => {
        if (item.id === state.user.id) {
          return {
            ...item,
            coupon: [...item.coupon, action.payload],
          };
        }
        return item;
      });
      localStorage.setItem('joinData', JSON.stringify(state.joinData));
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    couponUse: (state, action) => {
      const id = action.payload;
      state.user.coupon = state.user.coupon.map((item) => (item.id === id ? { ...item, used: true } : item));
      state.user.isMembershiped = true;
      state.joinData = state.joinData.map((item) => {
        if (item.id === state.user.id) {
          return {
            ...item,
            isMembershiped: true,
            coupon: item.coupon.filter((item) => item.id !== id),
          };
        }
        return item;
      });
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('joinData', JSON.stringify(state.joinData));
    },
    addRequested: (state, action) => {
      const { category, title, content } = action.payload;
      const id = state.user.requested.length + 1;
      const rState = '처리중';
      const nowDate = new Date();
      const month = nowDate.getMonth() + 1;
      const date = `${nowDate.getFullYear()}-${month <= 9 ? '0' + month : month}-${nowDate.getDate()}`;
      const requested = { id: id, category: category, title: title, state: rState, date: date, content: content };
      state.joinData = state.joinData.map((item) => {
        if (item.id === state.user.id) {
          return {
            ...item,
            requested: [...item.requested, requested],
          };
        }
        return item;
      });

      state.user.requested.push(requested);
      localStorage.setItem('joinData', JSON.stringify(state.joinData));
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    toggleLiked: (state, action) => {
      if (!state.user) return;

      const content = action.payload;
      console.log('좋아요 액션 실행됨', content);

      const index = state.user.liked.findIndex((item) => item.id === content.id);

      if (index !== -1) {
        state.user.liked = [...state.user.liked.slice(0, index), ...state.user.liked.slice(index + 1)];
      } else {
        state.user.liked = [...state.user.liked, content];
      }

      state.joinData = state.joinData.map((user) =>
        user.id === state.user.id ? { ...user, liked: [...state.user.liked] } : user
      );

      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('joinData', JSON.stringify(state.joinData));
    },
    toggleDownloaded: (state, action) => {
      if (!state.user) return;

      if (!state.user.downloaded) {
        state.user.downloaded = []; // ✅ undefined 방지
      }

      const content = action.payload;
      console.log('✅ 다운로드 액션 실행됨', content);

      const index = state.user.downloaded.findIndex((item) => item.id === content.id);

      if (index !== -1) {
        state.user.downloaded.splice(index, 1);
      } else {
        state.user.downloaded.push(content);
      }

      // ✅ joinData도 최신 상태 반영
      state.joinData = state.joinData.map((user) =>
        user.id === state.user.id ? { ...user, downloaded: [...state.user.downloaded] } : user
      );

      // ✅ Redux 변경 사항이 반영될 수 있도록 상태 업데이트
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('joinData', JSON.stringify(state.joinData));
    },
    modifyUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.joinData = state.joinData.map((user) =>
        user.id === state.user.id ? { ...user, ...action.payload } : user
      );
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('joinData', JSON.stringify(state.joinData));
      state.prevUser = state.user;
      localStorage.setItem('prevUser', JSON.stringify(state.prevUser));
    },
    addReview: (state, action) => {
      if (!state.user) return;

      const contentData = action.payload;
      const reviewId = Date.now();

      const existingReviewIndex = state.user.reviewed.findIndex((item) => item.id === contentData.id);

      const newReview = {
        id: contentData.id,
        reviewId: reviewId,
        title: contentData.title,
        poster_path: contentData.poster_path,
        type: contentData.type,
        content: contentData.content,
        rate: contentData.rate,
        date: new Date().toLocaleDateString(),
      };

      if (existingReviewIndex !== -1) {
        state.user.reviewed[existingReviewIndex] = newReview;
      } else {
        state.user.reviewed.push(newReview);
      }

      state.joinData = state.joinData.map((item) =>
        item.id === state.user.id ? { ...item, reviewed: [...state.user.reviewed] } : item
      );

      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('joinData', JSON.stringify(state.joinData));
      localStorage.setItem('prevUser', JSON.stringify(state.user));
    },

    updateReview: (state, action) => {
      if (!state.user) return;

      const { contentId, reviewData } = action.payload;

      const reviewIndex = state.user.reviewed.findIndex((review) => review.id === contentId);

      if (reviewIndex !== -1) {
        state.user.reviewed[reviewIndex] = {
          ...state.user.reviewed[reviewIndex],
          ...reviewData,
          date: new Date().toLocaleDateString(),
        };

        state.joinData = state.joinData.map((user) =>
          user.id === state.user.id ? { ...user, reviewed: [...state.user.reviewed] } : user
        );

        localStorage.setItem('user', JSON.stringify(state.user));
        localStorage.setItem('joinData', JSON.stringify(state.joinData));
      }
    },

    addToWatched: (state, action) => {
      if (!state.user) return;

      const content = action.payload;

      const existingIndex = state.user.watched.findIndex((item) => item.id === content.id);

      if (existingIndex === -1) {
        state.user.watched.push({
          id: content.id,
          title: content.title,
          poster_path: content.poster_path,
          type: content.type,
          date: new Date().toLocaleDateString(),
        });

        state.joinData = state.joinData.map((user) =>
          user.id === state.user.id ? { ...user, watched: [...state.user.watched] } : user
        );

        localStorage.setItem('user', JSON.stringify(state.user));
        localStorage.setItem('joinData', JSON.stringify(state.joinData));
      }
    },
    // authSlice.js의 reducers 객체 안에 아래 액션들을 추가하세요

    // 알림 관련 액션 추가
    initializeNotifications: (state, action) => {
      if (!state.user) return;

      // 사용자의 알림 초기화 로직
      // 예: API에서 사용자의 알림을 가져온 후 저장
      const userId = state.user.id;
      // API 호출 후 저장된 알림을 가져오는 로직이 필요
    },

    addNotification: (state, action) => {
      if (!state.user) return;

      // user 객체에 notifications 필드가 없으면 추가
      if (!state.user.notifications) {
        state.user.notifications = [];
      }

      // 새 알림 추가
      const newNotification = {
        id: Date.now(),
        ...action.payload,
        read: false,
        createdAt: new Date().toISOString(),
      };

      state.user.notifications.unshift(newNotification);

      // joinData도 업데이트
      state.joinData = state.joinData.map((user) =>
        user.id === state.user.id ? { ...user, notifications: [...state.user.notifications] } : user
      );

      // localStorage 업데이트
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('joinData', JSON.stringify(state.joinData));
    },

    markNotificationAsRead: (state, action) => {
      if (!state.user || !state.user.notifications) return;

      const notificationId = action.payload;

      // 알림 상태 업데이트
      state.user.notifications = state.user.notifications.map((notification) =>
        notification.id === notificationId ? { ...notification, read: true } : notification
      );

      // joinData도 업데이트
      state.joinData = state.joinData.map((user) =>
        user.id === state.user.id ? { ...user, notifications: [...state.user.notifications] } : user
      );

      // localStorage 업데이트
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('joinData', JSON.stringify(state.joinData));
    },

    markAllNotificationsAsRead: (state) => {
      if (!state.user || !state.user.notifications) return;

      // 모든 알림 읽음 처리
      state.user.notifications = state.user.notifications.map((notification) => ({ ...notification, read: true }));

      // joinData도 업데이트
      state.joinData = state.joinData.map((user) =>
        user.id === state.user.id ? { ...user, notifications: [...state.user.notifications] } : user
      );

      // localStorage 업데이트
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('joinData', JSON.stringify(state.joinData));
    },

    deleteNotification: (state, action) => {
      if (!state.user || !state.user.notifications) return;

      const notificationId = action.payload;

      // 알림 삭제
      state.user.notifications = state.user.notifications.filter((notification) => notification.id !== notificationId);

      // joinData도 업데이트
      state.joinData = state.joinData.map((user) =>
        user.id === state.user.id ? { ...user, notifications: [...state.user.notifications] } : user
      );

      // localStorage 업데이트
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('joinData', JSON.stringify(state.joinData));
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

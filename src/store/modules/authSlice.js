import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  joinData: [
    {
      id: 1,
      username: '김미선',
      userId: 'test',
      password: '123456',
      phone: '010-0000-0000',
      profileImg: 'images/profileImg1.jpg',
      isMembershiped: false,
      coupon: [],
      liked: [],
      reviewed: [],
      downed: [],
      watched: [],
    },
  ],
  user: JSON.parse(localStorage.getItem('user')) || null,
  prevUser: {},
  connected: [[1]],
  authed: localStorage.getItem('authed') === 'true',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { userId, password } = action.payload;
      const user = state.joinData.find((item) => item.userId === userId && item.password === password);
      const rememberId = document.getElementsByClassName('rememberMe')[0];

      if (user) {
        state.user = user;
        state.authed = true;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('authed', 'true');
        console.log(rememberId);
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
      localStorage.removeItem('user');
      localStorage.removeItem('authed');
    },
    deleteLiked: (state, action) => {
      state.user.liked = state.user.liked.filter((item) => !action.payload.includes(item.id));
    },
    deleteWatched: (state, action) => {
      state.user.watched = state.user.watched.filter((item) => !action.payload.includes(item.id));
    },
    deleteDowned: (state, action) => {
      state.user.downed = state.user.downed.filter((item) => !action.payload.includes(item.id));
    },
    deleteReviewed: (state, action) => {
      state.user.reviewed = state.user.reviewed.filter((item) => item.id !== action.payload);
    },
    changeUser: (state, action) => {
      state.user = state.joinData.find((item) => item.id === action.payload);
    },
    changeUserImg: (state, action) => {
      state.user.profileImg = action.payload;
    },
    changeUserName: (state, action) => {
      const changeName = action.payload;
      state.joinData.find((item) => item.id === state.user.id).username = changeName;
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
    },
    couponUse: (state, action) => {
      const id = action.payload;
      state.user.coupon = state.user.coupon.map((item) => (item.id === id ? { ...item, used: true } : item));
      state.user.isMembershiped = true;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  joinData: [
    {
      id: 1,
      username: '김민지',
      email: 'test@example.com',
      password: '123456',
      profileImg:
        'https://i.namu.wiki/i/khXs0TuOmkXJgKpC4ybkuB_A1h57NBKsbNz_TkVE1K1Dv5-wceOmrmYjUMWZjEEzUKrgMJERPlcVuK0BU7wjwv1x9R0gC4M6kB7RMurrTomL8sU6FiU-O3uhxh5312NXdOMG8cskBQKneF4wsZmXXg.webp',
      isMembershiped: true,
      couponNumber: 0,
    },
    {
      id: 2,
      username: '팜하니',
      email: 'test2@example.com',
      password: '123456',
      profileImg:
        'https://i.namu.wiki/i/HurDJRqmkNVj4sfYwctoo8aa94BoWK0VseUVXdJ5zawFPft8OdDxexUuux2tuBca6DBZPalOQk5Z8aYaIaX4bDJhpvaXE4ycqC3tYJDwTaHDaZNOEd-Xsxi17khQ6fjkErMvU1yg7jCdxrQd-DT8Jw.webp',
      isMembershiped: false,
      couponNumber: 1,
    },
  ],
  user: {
    id: 1,
    username: '김민지',
    email: 'test@example.com',
    password: '123456',
    profileImg:
      'https://i.namu.wiki/i/khXs0TuOmkXJgKpC4ybkuB_A1h57NBKsbNz_TkVE1K1Dv5-wceOmrmYjUMWZjEEzUKrgMJERPlcVuK0BU7wjwv1x9R0gC4M6kB7RMurrTomL8sU6FiU-O3uhxh5312NXdOMG8cskBQKneF4wsZmXXg.webp',
    isMembershiped: false,
    couponNumber: 2,
  },
  authed: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = state.joinData.find((item) => item.email === email && item.password === password);
      if (user) {
        state.user = user;
        state.authed = true;
      } else {
        alert('이메일 또는 비밀번호가 일치하지 않습니다.');
      }
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

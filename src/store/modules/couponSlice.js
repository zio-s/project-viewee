import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  couponList: [
    {
      id: 1,
      title: '[설날 특집]  모든 영화  무료 시청 쿠폰 (1개)',
      dday: '2025.02.01',
      code: 'newyears',
      use: false,
      used: false,
    },
    {
      id: 2,
      title: '[Viewee 출시기념] 무료이용권(30일)',
      dday: '2026.01.01',
      code: 'viewee',
      use: true,
      used: false,
    },
    {
      id: 3,
      title: '[이달의 쿠폰] 모든 이용권 40% 할인',
      dday: '2025.02.01',
      code: '2025february',
      use: false,
      used: false,
    },
  ],
};

export const couponSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {},
});

export const couponActions = couponSlice.actions;
export default couponSlice.reducer;

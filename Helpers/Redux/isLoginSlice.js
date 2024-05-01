import { createSlice } from '@reduxjs/toolkit';

const isLoginSlice = createSlice({
  name: 'isLogin',
  initialState: { isLogin: false },
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setIsLogin } = isLoginSlice.actions;

export default isLoginSlice.reducer;
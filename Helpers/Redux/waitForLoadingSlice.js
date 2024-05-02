import { createSlice } from '@reduxjs/toolkit';

const waitForLoadingSlice = createSlice({
  name: 'waitForLoading',
  initialState: { waitForLoading: true },
  reducers: {
    setWaitForLoading: (state, action) => {
      state.waitForLoading = action.payload;
    },
  },
});

export const { setWaitForLoading } = waitForLoadingSlice.actions;
export default waitForLoadingSlice.reducer;
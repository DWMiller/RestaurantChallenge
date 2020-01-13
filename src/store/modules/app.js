import { createSlice } from '@reduxjs/toolkit';

export const APP_STATES = {
  LOADING: 'LOADING',
  READY: 'READY'
};

const appSlice = createSlice({
  name: 'app',
  initialState: {
    appState: APP_STATES.LOADING
  },
  reducers: {
    appReady: state => ({
      ...state,
      appState: APP_STATES.READY
    })
  }
});

export const { appReady } = appSlice.actions;

export default appSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

import { fetchData } from './actions';

export const APP_STATES = {
  LOADING: 'LOADING',
  READY: 'READY'
};

const appSlice = createSlice({
  name: 'app',
  initialState: {
    appState: APP_STATES.LOADING
  },
  extraReducers: {
    [fetchData.finished]: state => ({
      ...state,
      appState: APP_STATES.READY
    })
  }
});

export default appSlice.reducer;

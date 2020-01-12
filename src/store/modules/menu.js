import { createSlice } from '@reduxjs/toolkit';

import { dataLoaded } from './actions';

const menuSlice = createSlice({
  name: 'menu',
  initialState: null,
  reducers: {},
  extraReducers: {
    [dataLoaded]: (state, { payload }) => {
      return payload.menu;
    }
  }
});

export default menuSlice.reducer;
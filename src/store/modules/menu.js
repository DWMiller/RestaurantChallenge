import { createSlice } from '@reduxjs/toolkit';

import { fetchData } from './actions';

const menuSlice = createSlice({
  name: 'menu',
  initialState: null,
  reducers: {},
  extraReducers: {
    [fetchData.fulfilled]: (state, { payload }) => payload.result.menu
  }
});

export default menuSlice.reducer;

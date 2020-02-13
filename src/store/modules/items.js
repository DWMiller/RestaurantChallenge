import { createSlice } from '@reduxjs/toolkit';

import { fetchData } from './actions';
import { dataSorter } from '../../utils/data';

const itemsSlice = createSlice({
  name: 'items',
  initialState: null,
  extraReducers: {
    [fetchData.fulfilled]: (state, { payload }) =>
      dataSorter(payload.result.items)
  }
});

export default itemsSlice.reducer;

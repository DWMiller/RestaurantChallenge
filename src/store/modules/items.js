import { createSlice } from '@reduxjs/toolkit';

import { dataLoaded } from './actions';
import { dataSorter } from '../../utils/data';

const itemsSlice = createSlice({
  name: 'items',
  initialState: null,
  extraReducers: {
    [dataLoaded]: (state, { payload }) => dataSorter(payload.items)
  }
});

export default itemsSlice.reducer;

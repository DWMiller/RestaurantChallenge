import { createSlice } from '@reduxjs/toolkit';

import { dataLoaded } from './actions';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {},
  reducers: {},
  extraReducers: {
    [dataLoaded]: (state, { payload }) => {
      const items = {};

      payload.items.forEach(item => {
        items[item._id] = item;
      });

      return {
        ...state,
        byId: items
      };
    }
  }
});

export default itemsSlice.reducer;

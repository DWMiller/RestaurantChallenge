import { createSlice } from '@reduxjs/toolkit';

import { dataLoaded } from './actions';

const sectionsSlice = createSlice({
  name: 'sections',
  initialState: {},
  reducers: {},
  extraReducers: {
    [dataLoaded]: (state, { payload }) => {
      const byId = {};
      const byName = {};

      payload.sections.forEach(item => {
        byId[item._id] = item;
        byName[item.name.en] = item;
      });

      return {
        ...state,
        byId,
        byName
      };
    }
  }
});

export default sectionsSlice.reducer;

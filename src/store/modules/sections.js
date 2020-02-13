import { createSlice } from '@reduxjs/toolkit';

import { fetchData } from './actions';
import { dataSorter } from '../../utils/data';

const sectionsSlice = createSlice({
  name: 'sections',
  initialState: null,
  extraReducers: {
    [fetchData.fulfilled]: (state, { payload }) =>
      dataSorter(payload.result.sections)
  }
});

export default sectionsSlice.reducer;

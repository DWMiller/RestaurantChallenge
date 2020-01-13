import { createSlice } from '@reduxjs/toolkit';

import { dataLoaded } from './actions';
import { dataSorter } from '../../utils/data';

const sectionsSlice = createSlice({
  name: 'sections',
  initialState: null,
  extraReducers: {
    [dataLoaded]: (state, { payload }) => dataSorter(payload.sections)
  }
});

export default sectionsSlice.reducer;

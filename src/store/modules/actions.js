import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetch', () =>
  Promise.all([fetch('/api/menu'), fetch('/api/sections'), fetch('/api/items')])
    .then(results => Promise.all(results.map(r => r.json())))
    .then(([menu, sections, items]) => ({
      menu,
      sections,
      items
    }))
);

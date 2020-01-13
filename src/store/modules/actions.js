import { createAction } from '@reduxjs/toolkit';

import { appReady } from './app';

export const dataLoaded = createAction('data/loaded');

export const fetchEverything = () => {
  return dispatch => {
    Promise.all([
      fetch('/api/menu'),
      fetch('/api/sections'),
      fetch('/api/items')
    ])
      .then(results => Promise.all(results.map(r => r.json())))
      .then(([menu, sections, items]) => {
        dispatch(dataLoaded({ menu, sections, items }));
        dispatch(appReady());
      });
  };
};

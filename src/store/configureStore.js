import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import app from './modules/app';
import items from './modules/items';
import menu from './modules/menu';
import sections from './modules/sections';

const reducer = combineReducers({
  app,
  items,
  menu,
  sections
});

export default () =>
  configureStore({
    reducer
  });

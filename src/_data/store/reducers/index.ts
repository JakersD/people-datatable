import { combineReducers } from '@reduxjs/toolkit';
import user, { userSlice } from './userReducer';

export const rootReducer = combineReducers({
  user,
});

export { userSlice };

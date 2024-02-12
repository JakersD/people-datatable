import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from '../../models';

const initialState: IUserState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;

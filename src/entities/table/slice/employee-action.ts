import { getPathWithQuery } from '@/shared/lib';
import { EQueries, IQueryAllRes } from '@/shared/models';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEmployees = createAsyncThunk('fetchEmployees', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get<IQueryAllRes>(getPathWithQuery(EQueries.all));

    return res.data.items;
  } catch (err) {
    throw rejectWithValue(err);
  }
});

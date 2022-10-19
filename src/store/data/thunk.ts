import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { api } from 'network';
import { DATA_SLICE_ALIAS } from './types';

export const dataFetchAction = createAsyncThunk(
  `${DATA_SLICE_ALIAS}/fetchData`,
  async (page: number, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await api().get(`people/?page=${page}`);

      return { count: response.data.count, data: response.data.results };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const searchDataAction = createAsyncThunk(
  `${DATA_SLICE_ALIAS}/searchData`,
  async (name: string, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await api().get(
        `/people/?search=${name}`,
      );
      return { count: response.data.count, data: response.data.results };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

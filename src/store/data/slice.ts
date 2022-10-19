import { dataFetchAction, searchDataAction } from 'store/data/thunk';
import { AxiosError } from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DATA_SLICE_ALIAS } from './types';

const initialState: any = {
  characters: [],
  totalCount: 0,
  selectedCharacter: {},
  searchCharacter: '',
  loading: false,
  loadingSearch: false,
  error: null,
};

export const dataSlice = createSlice({
  name: DATA_SLICE_ALIAS,
  initialState,
  reducers: {
    setSelectedCharacter: (state, action: PayloadAction<any>) => {
      state.selectedCharacter = action.payload;
    },
    setSearchCharacter: (state, action: PayloadAction<string>) => {
      state.searchCharacter = action.payload;
    },
  },
  extraReducers: {
    [dataFetchAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [dataFetchAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<any>,
    ) => {
      state.characters = payload.data;
      state.totalCount = payload.count;
      state.loading = false;
    },

    [dataFetchAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>,
    ) => {
      state.loading = false;
      state.error = payload;
      state.characters = [];
    },

    [searchDataAction.pending.type]: (state) => {
      state.loadingSearch = true;
      state.error = null;
    },

    [searchDataAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<any>,
    ) => {
      state.loadingSearch = false;
      state.characters = payload.data;
      state.totalCount = payload.count;
    },

    [searchDataAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>,
    ) => {
      state.loadingSearch = false;
      state.error = payload;
      state.characters = initialState.characters;
    },
  },
});

export const { setSelectedCharacter, setSearchCharacter } = dataSlice.actions;
export default dataSlice.reducer;

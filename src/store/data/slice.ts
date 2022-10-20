import { dataFetchAction, searchDataAction } from 'store/data/thunk';
import { AxiosError } from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataItem, DataSlice, DATA_SLICE_ALIAS } from './types';

const initialState: DataSlice = {
  characters: [],
  totalCount: 0,
  page: 1,
  selectedCharacter: {
    name: '',
    gender: '',
    eye_color: '',
    birth_year: '',
    hair_color: '',
    height: '',
    mass: '',
    skin_color: '',
  },
  searchCharacter: '',
  loading: false,
  loadingSearch: false,
  error: null,
};

export const dataSlice = createSlice({
  name: DATA_SLICE_ALIAS,
  initialState,
  reducers: {
    setSelectedCharacter: (state, action: PayloadAction<DataItem>) => {
      state.selectedCharacter = action.payload;
    },
    setSearchCharacter: (state, action: PayloadAction<string>) => {
      state.searchCharacter = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.characters = state.characters.filter(
        (item) => item.eye_color === action.payload,
      );
    },
    setPageStore: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: {
    [dataFetchAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [dataFetchAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<{ data: Array<DataItem>; count: number }>,
    ) => {
      if (!state.characters) {
        state.characters = payload.data;
      }
      const arr = state.characters.concat(payload.data);
      state.characters = arr.filter(
        (item: DataItem, i: number) =>
          arr.findIndex((a: DataItem) => a.name === item.name) === i,
      );

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
      { payload }: PayloadAction<{ data: Array<DataItem>; count: number }>,
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

export const { setSelectedCharacter, setSearchCharacter, setPageStore } =
  dataSlice.actions;
export default dataSlice.reducer;

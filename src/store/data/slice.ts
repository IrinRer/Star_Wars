import { dataFetchAction } from 'store/data/thunk';
import { AxiosError } from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DATA_SLICE_ALIAS } from './types';

const initialState: any = {
  characters: [],
  loading: false,
  error: null,
};

export const dataSlice = createSlice({
  name: DATA_SLICE_ALIAS,
  initialState,
  reducers: {
    // setDocument: (state, action: PayloadAction<string>) => {
    //   state.document = action.payload;
    //   state.postData.document = action.payload;
    // },
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
      state.characters = payload;
    },

    [dataFetchAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>,
    ) => {
      state.loading = false;
      state.error = payload;
      state.characters = [];
    },
  },
});

// export const { setName, setDocument, clearNameDocument } = dataSlice.actions;
export default dataSlice.reducer;

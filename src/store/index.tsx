import { configureStore } from '@reduxjs/toolkit';
import DataReducer from './data/slice';

export const store = configureStore({
  reducer: {
    data: DataReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = {
  data: any;
};

export type AppDispatch = typeof store.dispatch;

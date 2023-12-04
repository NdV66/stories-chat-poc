import { configureStore } from '@reduxjs/toolkit';
import { languagesSlice } from '../languages';
import { storiesSlice } from '../Pages/Stories';

export const store = configureStore({
  reducer: {
    languages: languagesSlice.reducer,
    stories: storiesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

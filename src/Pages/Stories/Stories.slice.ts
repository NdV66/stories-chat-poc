import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { TStoryDTO } from '../../models';

export interface StoriesState {
  stories: TStoryDTO[];
}

const initialState: StoriesState = {
  stories: [],
};

export const storiesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    deleteStoryById: (state, action: PayloadAction<string>) => {
      const stories = state.stories.filter((el) => el.id !== action.payload);
      return { ...state, stories };
    },
    updateStoryById: (state, action: PayloadAction<TStoryDTO>) => {
      const index = state.stories.findIndex((el) => el.id === action.payload.id);

      if (index > -1) {
        const stories = [...state.stories];
        stories[index] = action.payload;
        return { ...state, stories };
      }
      return state;
    },
    addStory: (state, action: PayloadAction<string>) => {
      const title = '#' + (state.stories.length + 1);
      const story: TStoryDTO = { id: uuidv4(), title, text: action.payload };
      const stories = [...state.stories, story];
      return { ...state, stories };
    },
  },
});

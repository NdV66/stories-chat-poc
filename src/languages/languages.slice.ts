import { createSlice } from '@reduxjs/toolkit';
import { enEnLangDto } from './languages.builder';
import { LangDTO } from '../models';

export interface LangState {
  translations: LangDTO['translations'];
}

const initialState: LangState = {
  translations: enEnLangDto.translations,
};

export const languagesSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {},
});

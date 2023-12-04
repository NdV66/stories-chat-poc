import { TAppEnv } from '../../data';
import { AddStoryService } from './AddStory.service';

const env: TAppEnv = {
  apiKey: process.env.REACT_APP_API_KEY || 'add-your-key-in-env-file',
  model: process.env.REACT_APP_MODEL || 'gpt-3.5-turbo',
  apiUrl: process.env.REACT_APP_API || 'https://api.openai.com/v1/chat/completions',
};

export const addStoryService = new AddStoryService(env);

import { TTranslate } from './languages.types';

export const enENTranslate: TTranslate = {
  appName: 'Story chat POC',

  errors: {
    empty: 'This field cannot be empty.',
    wrongType: 'This type is wrong.',
  },

  menu: {
    addStory: 'Add story',
    stories: 'My stories',
  },

  stories: {
    title: 'My stories',
    empty: 'No stories here. Add something :)',
    count: 'number of stories',
  },

  addStory: {
    title: 'Unleash your imaginations!',
    childName: 'Child name',
    childAge: 'Child age',
    topic: 'Topic',
    numberOfWords: 'Number od Words',
    submit: 'Imagine!',
  },

  editStory: {
    title: 'Edit story',
    storyTitle: 'Title',
    storyText: 'Text',
    submit: 'Save',
  },

  oneStory: {
    title: 'Title',
    text: 'Story',
    wordsCount: 'Worlds count',
    edit: 'Edit',
    delete: 'Delete forever',
    save: 'Save',
    showMore: 'Show more',
  },
};

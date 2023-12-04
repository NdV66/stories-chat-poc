export enum ELangs {
  EN = 'en-EN',
}

export type TTranslate = {
  appName: string;

  errors: {
    empty: string;
    wrongType: string;
  };

  menu: {
    addStory: string;
    stories: string;
  };

  stories: {
    title: string;
    empty: string;
    count: string;
  };

  addStory: {
    title: string;
    childName: string;
    childAge: string;
    topic: string;
    numberOfWords: string;
    submit: string;
  };

  editStory: {
    title: string;
    storyTitle: string;
    storyText: string;
    submit: string;
  };

  oneStory: {
    title: string;
    text: string;
    wordsCount: string;
    edit: string;
    delete: string;
    save: string;
    showMore: string;
  };
};

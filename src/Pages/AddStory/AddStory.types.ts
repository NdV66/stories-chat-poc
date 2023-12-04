export interface IAddStoryService {
  callForStoryText: (data: TAddStoryForm) => Promise<any>;
}

export type TAddStoryForm = {
  childName: string;
  childAge: string;
  topic: string;
  numberOfWords: string;
};

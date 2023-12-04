import { TStoryDTO } from '../../models';

export type TEditStoryForm = {
  title: string;
  text: string;
};

export interface IEditStoryService {
  findStoryById: (id: string, stories: TStoryDTO[]) => TStoryDTO | undefined;
}

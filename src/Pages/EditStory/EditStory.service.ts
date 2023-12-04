import { TStoryDTO } from '../../models';
import { IEditStoryService } from './EditStory.types';

export class EditStoryService implements IEditStoryService {
  public findStoryById(id: string, stories: TStoryDTO[]) {
    return stories.find((el) => el.id === id);
  }
}

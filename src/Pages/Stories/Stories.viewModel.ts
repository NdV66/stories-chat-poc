import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../appStore';
import { storiesSlice } from './Stories.slice';
import { generatePath, useNavigate } from 'react-router-dom';
import { TPaths } from '../../data';
import { TStoryDTO } from '../../models';

export const useStoriesViewModel = (paths: TPaths) => {
  const { translations } = useSelector((state: RootState) => state.languages);
  const { stories } = useSelector((state: RootState) => state.stories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateStoryById = (story: TStoryDTO) => dispatch(storiesSlice.actions.updateStoryById(story));

  const deleteStoryById = (id: string) => dispatch(storiesSlice.actions.deleteStoryById(id));

  const editStoryById = (id: string) => {
    const path = generatePath(paths.EDIT_STORY, { id });
    navigate(path);
  };

  return {
    stories,
    updateStoryById,
    deleteStoryById,
    translations,
    editStoryById,
  };
};

import { useDispatch, useSelector } from 'react-redux';
import { IEditStoryService, TEditStoryForm } from './EditStory.types';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../appStore';
import { TPaths } from '../../data';
import { storiesSlice } from '../Stories';
import { TStoryDTO } from '../../models';
import { useFormik } from 'formik';
import { useMemo } from 'react';
import { generateEditStoryFormSchema } from './EditStory.formSchema';

export const useEditStoryViewModel = (paths: TPaths, service: IEditStoryService) => {
  const { translations } = useSelector((state: RootState) => state.languages);
  const { stories } = useSelector((state: RootState) => state.stories);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const currentStory = useMemo(() => service.findStoryById(params.id!, stories), [params, service, stories]);
  const initialValues: TEditStoryForm = useMemo(
    () => ({
      title: currentStory?.title || '',
      text: currentStory?.text || '',
    }),
    [currentStory],
  );
  const formik = useFormik<TEditStoryForm>({
    initialValues,
    validationSchema: generateEditStoryFormSchema(translations.errors),
    enableReinitialize: true,
    onSubmit: (values) => {
      const story: TStoryDTO = { id: currentStory?.id, ...values };
      dispatch(storiesSlice.actions.updateStoryById(story));
      navigate(paths.STORIES);
    },
  });

  return {
    translations,
    formik,
  };
};

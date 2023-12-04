import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useFormik } from 'formik';

import { RootState } from '../../appStore';
import { storiesSlice } from '../Stories';
import { useNavigate } from 'react-router-dom';
import { TPaths } from '../../data';
import { IAddStoryService, TAddStoryForm } from './AddStory.types';
import { generateAddStoryFormSchema } from './AddStoryForm.schema';

export const useAddStoryViewModel = (paths: TPaths, service: IAddStoryService) => {
  const { translations } = useSelector((state: RootState) => state.languages);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues: TAddStoryForm = {
    childName: '',
    childAge: '',
    topic: '',
    numberOfWords: '',
  };
  const formik = useFormik<TAddStoryForm>({
    initialValues,
    validationSchema: generateAddStoryFormSchema(translations.errors),
    onSubmit: async (values) => {
      setIsLoading(true);
      const storyText = await service.callForStoryText(values);
      dispatch(storiesSlice.actions.addStory(storyText));
      navigate(paths.STORIES);
      setIsLoading(false);
    },
  });

  return {
    translations,
    formik,
    isLoading,
  };
};

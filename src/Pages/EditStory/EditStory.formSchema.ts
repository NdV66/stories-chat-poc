import { object, string } from 'yup';
import { TTranslate } from '../../languages';

export const generateEditStoryFormSchema = (translations: TTranslate['errors']) =>
  object().shape({
    title: string().required(translations.empty),
    text: string().required(translations.empty),
  });

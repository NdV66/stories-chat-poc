import { object, string, number } from 'yup';
import { TTranslate } from '../../languages';

export const generateAddStoryFormSchema = (translations: TTranslate['errors']) =>
  object().shape({
    childName: string().required(translations.empty),
    childAge: number()
      .typeError(translations.wrongType)
      .required(translations.empty)
      .positive(translations.wrongType)
      .integer(translations.wrongType),
    topic: string().required(translations.empty),
    numberOfWords: number()
      .typeError(translations.wrongType)
      .required(translations.empty)
      .positive(translations.wrongType)
      .integer(translations.wrongType),
  });

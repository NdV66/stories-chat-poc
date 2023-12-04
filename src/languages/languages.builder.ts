import { ELangs } from './languages.types';
import { enENTranslate } from './en-EN';
import { LangDTO } from '../models/Lang.dto';

export const enEnLangDto = new LangDTO(ELangs.EN, enENTranslate);

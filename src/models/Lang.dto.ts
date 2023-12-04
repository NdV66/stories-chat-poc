import { ELangs, TTranslate } from '../languages';

export class LangDTO {
  constructor(public readonly lang: ELangs, public readonly translations: TTranslate) {}
}

import { TAppEnv } from '../../data';
import { IAddStoryService, TAddStoryForm } from './AddStory.types';

export class AddStoryService implements IAddStoryService {
  constructor(private readonly _env: TAppEnv) {}

  public async callForStoryText(data: TAddStoryForm) {
    const apiRequestBody = {
      model: this._env.model,
      messages: [{ role: 'system', content: this._prepareContent(data) }],
    };

    const response = await fetch(this._env.apiUrl, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + this._env.apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiRequestBody),
    });

    const message = await response.json();
    return message.choices[0].message.content;
  }

  private _prepareContent(data: TAddStoryForm) {
    return `
        Create a story for a child. The child's name is ${data.childName} and the child is ${data.childAge} years old.
        Use these topics for creating your story: ${data.topic}.
        The story should be not longer than ${data.numberOfWords} words;
    `;
  }
}

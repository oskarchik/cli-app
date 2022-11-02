import path from 'path';
import { PromptObject } from 'prompts';

import { setQuestions } from '../src/questions';
import { Options } from '../src/types/Options';

describe('setQuestions', () => {
  const folderPath = path.resolve(__dirname, './__mocks__');

  const options: Options = {
    projectName: 'newProject',
    targetDirectory: folderPath,
    templateDir: '',
    git: false,
    runInstall: false,
  };

  it('should return a PromptObject array', () => {
    const result = setQuestions(options);
    expect(result).toBeInstanceOf(Array);
    expect(
      result.forEach((question) =>
        expect(question).toMatchObject({} as PromptObject)
      )
    );
  });
});

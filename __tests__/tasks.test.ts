import { Listr } from 'listr2';

import { tasks } from '../src/tasks';
import { Options } from '../src/types/Options';

describe('tasks', () => {
  const options: Options = {
    language: 'javascript',
    version: 'commonjs',
    database: 'none',
    git: false,
    runInstall: false,
    targetDirectory: '../__tests__/__mocks__/',
    templateDir: '../src/starters/js-basic',
    projectName: 'test',
    template: 'js-basic',
  };

  it('should return a Listr object', async () => {
    const result = await tasks(options);

    expect(result).toBeInstanceOf(Listr);
  });
});

import {
  ensureFileSync,
  readJsonSync,
  removeSync,
  writeJSONSync,
} from 'fs-extra';
import os from 'os';
import path from 'path';

import { Options } from '../src/types/Options';
import { updatePkgJSON } from '../src/updatePkgJson';

describe('updatePkgJson', () => {
  const filePath = path.resolve(__dirname, './__mocks__/package.json');

  beforeEach(() => {
    ensureFileSync(filePath);
    writeJSONSync(filePath, {
      name: 'originalName',
      author: '',
    });
  });
  afterEach(() => {
    removeSync(filePath);
  });

  it('should update package.json', async () => {
    const options: Options = {
      projectName: 'newProject',
      targetDirectory: './__tests__/__mocks__',
      templateDir: '',
      git: false,
      runInstall: false,
    };

    readJsonSync(filePath);

    const result = await updatePkgJSON(options);
    expect(result.name).toEqual(options.projectName);
    expect(result.author).toEqual(os.userInfo().username);
  });
});

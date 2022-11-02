import { ensureDirSync, pathExistsSync } from 'fs-extra';
import path from 'path';

import { removeFiles } from '../src/removeFiles';
import { Options } from '../src/types/Options';

describe('removeFiles', () => {
  const folderPath = path.resolve(__dirname, './__mocks__');
  const options: Options = {
    projectName: 'newProject',
    targetDirectory: folderPath,
    templateDir: '',
    git: false,
    runInstall: false,
  };

  beforeEach(() => {
    ensureDirSync(`${folderPath}/${options.projectName}`);
  });
  it('should remove files from folder', () => {
    removeFiles(options);
    const existsFolder = pathExistsSync(`${folderPath}/${options.projectName}`);
    expect(existsFolder).toBeFalsy();
  });
});

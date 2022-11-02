import fs from 'fs-extra';

import { copyTemplateFiles } from '../src/copyFiles';

const mockCopy = jest.spyOn(fs, 'copy');

describe('copyFiles', () => {
  const destination = './__tests__/__mocks__/';
  const source = './__tests__/test/';

  beforeEach(() => {
    fs.mkdirSync(source);
    fs.createFileSync(`${source}/file.txt`);
  });

  afterEach(() => {
    fs.unlinkSync(`${destination}/file.txt`);
    fs.removeSync(source);
  });
  it('should copy to target directory', async () => {
    await copyTemplateFiles(source, destination);
    expect(mockCopy).toBeCalledWith(source, destination);
  });
});

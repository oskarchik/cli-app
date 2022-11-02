import { removeSync } from 'fs-extra';
import path from 'path';

import { Options } from './types/Options';

export const removeFiles = async (options: Options) => {
  const projectFolder = path.resolve(
    `${options.targetDirectory}/${options.projectName}`
  );

  return removeSync(projectFolder);
};

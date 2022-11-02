import { readJSONSync, writeJSONSync } from 'fs-extra';
import os from 'os';
import path from 'path';

import { Options } from './types/Options';

export const updatePkgJSON = (options: Options) => {
  const filePath = path.resolve(`${options.targetDirectory}`, 'package.json');

  const packageJson = readJSONSync(filePath);
  packageJson.name = options.projectName;
  packageJson.author = os.userInfo().username;

  writeJSONSync(`${options.targetDirectory}/package.json`, packageJson);

  const updatePackageJson = readJSONSync(filePath);

  return updatePackageJson;
};

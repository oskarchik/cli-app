import { Options } from './types/Options';

export const createProject = async (options: Options) => {
  options = {
    ...options,
    targetDirectory: options.projectName
      ? `${process.cwd()}/${options.projectName}`
      : process.cwd(),
  };
};

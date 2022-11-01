import delay from 'delay';
import { Listr } from 'listr2';
import { projectInstall } from 'pkg-install';

import { copyTemplateFiles } from './copyFiles';
import { initGit } from './initGit';
import { removeFiles } from './removeFiles';
import { Options } from './types/Options';
import { updatePkgJSON } from './updatePkgJson';

export const tasks = async (options: Options) => {
  return new Listr([
    {
      title: 'Copying project files',
      task: async () => {
        await delay(1000);

        await copyTemplateFiles(options.templateDir, options.targetDirectory);
      },
      rollback: async (_, task) => {
        task.title = 'Deleting copied files';
        await delay(1000);
        await removeFiles(options);
      },
    },
    {
      title: 'Initializing git',

      task: async () => {
        await delay(1000);
        await initGit(options.targetDirectory);
      },
      enabled: () => options.git,
    },
    {
      title: 'Updating package.json',
      task: async () => {
        await delay(1000);
        await updatePkgJSON(options);
      },
    },
    {
      title: 'Installing dependencies',
      task: async () => {
        await projectInstall({
          cwd: options.targetDirectory,
        });
      },
      enabled: () => options.runInstall,
    },
  ]);
};

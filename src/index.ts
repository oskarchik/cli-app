import chalk from 'chalk';
import fs from 'fs-extra';

import { getTemplate } from './getTemplate';
import { successProject } from './success';
import { tasks } from './tasks';
import { Options } from './types/Options';

export const createProject = async (options: Options) => {
  options = {
    ...options,
    targetDirectory: options.projectName
      ? `${process.cwd()}/${options.projectName}`
      : process.cwd(),
  };

  const templateDir = getTemplate(options);

  options.templateDir = templateDir;

  if (fs.existsSync(options.targetDirectory)) {
    console.log(chalk.rgb(255, 7, 58).italic.bold('folder already exists'));
    console.log();
    console.log('Please try a new project name or move to another folder');
    process.exit(1);
  }

  try {
    const exists = await fs.existsSync(templateDir);
    if (!exists) {
      console.log(chalk.rgb(255, 7, 58).bold('ERROR'), 'Invalid template name');
      process.exit(1);
    }
  } catch (error) {
    process.exit(1);
  }

  await (await tasks(options)).run();

  successProject(options);
  return true;
};

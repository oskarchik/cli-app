import { Command } from 'commander';
import chalk from 'chalk';
import { Options } from './types/Options';

export const parseArguments = (rawArgs: string[]) => {
  const options: Options = {
    git: false,
    runInstall: false,
    targetDirectory: '',
    templateDir: '',
  };

  const program = new Command();

  program.version('1.0.0');
  program.configureOutput({
    outputError: (str, write) => write(chalk.rgb(255, 14, 53).italic.bold(str)),
  });

  program.option('-n, --name <item>', 'name for the project');
  program.option('-g, --git', 'git initialization');
  program.option('-i, --install', 'install dependencies');

  program.parse(rawArgs);

  options.projectName = program.opts().name;
  options.git = program.opts().git;
  options.runInstall = program.opts().install;

  return options;
};

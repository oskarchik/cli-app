import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';

import { Options } from './types/Options';

export const successProject = (options: Options) => {
  console.log();
  console.log(
    `Success! Created ${options.projectName} at ${options.targetDirectory}`
  );
  console.log('Inside that directory, you can run several commands:');
  console.log();
  console.log(chalk.blue(`  npm run dev`));
  console.log('    Starts the development server.');
  console.log();
  console.log(chalk.blue(`  npm run start`));
  console.log('    Starts the production server.');
  console.log();
  console.log('We suggest that you begin by typing:');
  console.log();
  console.log(chalk.blue('  cd'), options.projectName);
  if (!options.git) {
    console.log(chalk.blue('  git init -y'));
  }
  if (!options.runInstall) {
    console.log(chalk.blue('  npm install'));
  }
  console.log(chalk.blue('  npm run dev'));

  console.log();
  figlet('Happy  Coding ! ! ! !', (err, data) => {
    if (err) {
      console.log('something went wrong.....');
      console.dir(err);
      return;
    }

    console.log(gradient.fruit.multiline(data));
  });
};

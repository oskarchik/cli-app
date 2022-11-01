import path from 'path';
import { Options } from './types/Options';
import { PromptObject } from 'prompts';

export const setQuestions = (options: Options) => {
  const questions: PromptObject[] = [
    {
      type: 'select',
      name: 'language',
      message: 'Please choose a language for your project',
      choices: [
        { title: 'Javascript', value: 'Javascript', selected: true },
        { title: 'Typescript', value: 'Typescript' },
      ],
    },
    {
      type: (prev: string) => (prev === 'Javascript' ? 'select' : null),
      name: 'version',
      message: 'Select version',
      choices: [
        { title: 'CommonJS', value: 'CommonJS', selected: true },
        { title: 'ES modules', value: 'ES modules' },
      ],
    },
    {
      type: 'select',
      name: 'database',
      message: 'Do you need a database in your project?',
      choices: [
        { title: 'MongoDb', value: 'MongoDb' },
        { title: 'PostgreSQL', value: 'PostgreSQL' },
        { title: 'none', value: 'none', selected: true },
      ],
    },
  ];
  if (!options.projectName) {
    questions.unshift({
      type: 'text',
      name: 'name',
      message: 'What is the name of your project?',
      initial: path.basename(path.resolve()),
    });
  }
  if (!options.git) {
    questions.push({
      type: 'confirm',
      name: 'git',
      message: 'Initialize a git repository?(No)',
      initial: false,
    });
  }
  if (!options.runInstall) {
    questions.push({
      type: 'confirm',
      name: 'install',
      message: 'Install dependencies?(No)',
      initial: false,
    });
  }

  return questions;
};

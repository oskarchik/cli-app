import { prompt } from 'prompts';
import { setQuestions } from './questions';
import { Options } from './types/Options';

export const promptQuestions = async (options: Options) => {
  const questions = setQuestions(options);

  const answers = await prompt(questions);

  const finalOptions: Options = {
    ...options,
    projectName: options.projectName || answers.name.replace(/\s/g, '_'),
    language: answers.language,
    version: answers.version,
    database: answers.database,
    git: options.git || answers.git,
    runInstall: options.runInstall || answers.install,
  };

  return finalOptions;
};

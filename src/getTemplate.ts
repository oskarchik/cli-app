import path from 'path';

import { Options } from './types/Options';
export const getTemplate = (options: Options) => {
  const currentProjectFolder = __dirname;

  let dir;
  if (
    options.language?.toLowerCase() === 'javascript' &&
    options.version?.toLowerCase() === 'commonjs' &&
    options.database?.toLowerCase() === 'none'
  ) {
    dir = 'js-basic';
  }
  if (
    options.language?.toLowerCase() === 'javascript' &&
    options.version?.toLowerCase() === 'commonjs' &&
    options.database?.toLowerCase() === 'mongodb'
  ) {
    dir = 'js-mongo';
  }

  if (
    options.language?.toLowerCase() === 'javascript' &&
    options.version?.toLowerCase() === 'commonjs' &&
    options.database?.toLowerCase() === 'postgresql'
  ) {
    dir = 'js-pg';
  }
  if (
    options.language?.toLowerCase() === 'javascript' &&
    options.version?.toLowerCase() === 'es modules' &&
    options.database?.toLowerCase() === 'none'
  ) {
    dir = 'es6-basic';
  }
  if (
    options.language?.toLowerCase() === 'javascript' &&
    options.version?.toLowerCase() === 'es modules' &&
    options.database?.toLowerCase() === 'mongodb'
  ) {
    dir = 'es6-mongo';
  }
  if (
    options.language?.toLowerCase() === 'javascript' &&
    options.version?.toLowerCase() === 'es modules' &&
    options.database?.toLowerCase() === 'postgresql'
  ) {
    dir = 'es6-pg';
  }
  if (
    options.language?.toLowerCase() === 'typescript' &&
    options.database?.toLowerCase() === 'none'
  ) {
    dir = 'ts-basic';
  }
  if (
    options.language?.toLowerCase() === 'typescript' &&
    options.database?.toLowerCase() === 'mongodb'
  ) {
    dir = 'ts-mongo';
  }
  if (
    options.language?.toLowerCase() === 'typescript' &&
    options.database?.toLowerCase() === 'postgresql'
  ) {
    dir = 'ts-pg';
  }

  const template = path.join(currentProjectFolder, `/starters/${dir}`);

  options.template = dir;

  return template;
};

#!/usr/bin/env node

import { createProject } from 'src';

import { parseArguments } from './parseArguments';
import { promptQuestions } from './promptQuestions';

export const cli = async (rawArgs: string[]) => {
  let options = parseArguments(rawArgs);

  options = await promptQuestions(options);

  await createProject(options);
};

cli(process.argv);

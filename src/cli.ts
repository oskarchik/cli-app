#!/usr/bin/env node

import { parseArguments } from './parseArguments';
import { promptQuestions } from './promptQuestions';

export const cli = async (rawArgs: string[]) => {
  let options = parseArguments(rawArgs);

  options = await promptQuestions(options);
};

cli(process.argv);

#!/usr/bin/env node

import { parseArguments } from './parseArguments';

export const cli = async (rawArgs: string[]) => {
  let options = parseArguments(rawArgs);
};

cli(process.argv);

import { exec } from 'child_process';

export const initGit = async (targetDirectory: string) => {
  exec('git init -q', { cwd: targetDirectory }, (code, stdout, stderr) => {
    if (stdout) console.log('Program output: ', stdout);
    if (stderr) {
      console.log('Program stderr: ', stderr);
      process.exit(1);
    }
  });
  return;
};

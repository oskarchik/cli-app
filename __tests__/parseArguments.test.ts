import { parseArguments } from '../src/parseArguments';

describe('parseArguments', () => {
  it('Should return an Options object with name and git options defined and runsInstall undefined', () => {
    const rawArgs = ['', '', '--name', 'test', '-g'];
    const result = parseArguments(rawArgs);
    expect(result.projectName).toEqual('test');
    expect(result.git).toEqual(true);
    expect(result.runInstall).toEqual(undefined);
  });
  it('Should return an Options object with git and install options  defined only', () => {
    const rawArgs = ['', '', '-g', '-i'];
    const result = parseArguments(rawArgs);
    expect(result.projectName).toEqual(undefined);
    expect(result.git).toEqual(true);
    expect(result.runInstall).toEqual(true);
  });
  it('Should return an Options object with git option defined only', () => {
    const rawArgs = ['', '', '-g'];
    const result = parseArguments(rawArgs);
    expect(result.projectName).toEqual(undefined);
    expect(result.git).toEqual(true);
    expect(result.runInstall).toEqual(undefined);
  });
  it('Should parse arguments with --', () => {
    const rawArgs = ['', '', '--name', 'test', '--git', '--install'];
    const result = parseArguments(rawArgs);
    expect(result.projectName).toEqual('test');
    expect(result.git).toEqual(true);
    expect(result.runInstall).toEqual(true);
  });
});

import child_process from 'child_process';

import { initGit } from '../src/initGit';

describe('initGit', () => {
  it('should call exec with arguments given', async () => {
    const mockExec = jest.spyOn(child_process, 'exec');
    const dir = '../__tests__/';
    const command = 'git init -q';
    await initGit(dir);
    expect(mockExec).toBeCalledWith(
      command,
      { cwd: dir },
      expect.any(Function)
    );
  });
});

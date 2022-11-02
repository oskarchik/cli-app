import { getTemplate } from '../src/getTemplate';
import { Options } from '../src/types/Options';

describe('getTemplate', () => {
  it('should return a js-basic template', () => {
    const mockTemplate: Options = {
      language: 'javascript',
      version: 'commonjs',
      database: 'none',
      git: false,
      runInstall: false,
      targetDirectory: '',
      templateDir: '',
      projectName: '',
      template: '',
    };
    const template = getTemplate(mockTemplate);
    expect(template).toMatch(/js-basic/i);
  });
  it('should return a js-mongo template', () => {
    const mockTemplate: Options = {
      language: 'javascript',
      version: 'commonjs',
      database: 'mongodb',
      git: false,
      runInstall: false,
      targetDirectory: '',
      templateDir: '',
      projectName: '',
      template: '',
    };
    const template = getTemplate(mockTemplate);
    expect(template).toMatch(/js-mongo/i);
  });
  it('should return a js-pg template', () => {
    const mockTemplate: Options = {
      language: 'javascript',
      version: 'commonjs',
      database: 'postgresql',
      git: false,
      runInstall: false,
      targetDirectory: '',
      templateDir: '',
      projectName: '',
      template: '',
    };
    const template = getTemplate(mockTemplate);
    expect(template).toMatch(/js-pg/i);
  });

  it('should return a es-basic template', () => {
    const mockTemplate: Options = {
      language: 'javascript',
      version: 'es modules',
      database: 'none',
      git: false,
      runInstall: false,
      targetDirectory: '',
      templateDir: '',
      projectName: '',
      template: '',
    };
    const template = getTemplate(mockTemplate);
    expect(template).toMatch(/es6-basic/i);
  });
  it('should return a es6-mongo template', () => {
    const mockTemplate: Options = {
      language: 'javascript',
      version: 'es modules',
      database: 'mongodb',
      git: false,
      runInstall: false,
      targetDirectory: '',
      templateDir: '',
      projectName: '',
      template: '',
    };
    const template = getTemplate(mockTemplate);
    expect(template).toMatch(/es6-mongo/i);
  });
  it('should return a es6-pg template', () => {
    const mockTemplate: Options = {
      language: 'javascript',
      version: 'es modules',
      database: 'postgresql',
      git: false,
      runInstall: false,
      targetDirectory: '',
      templateDir: '',
      projectName: '',
      template: '',
    };
    const template = getTemplate(mockTemplate);
    expect(template).toMatch(/es6-pg/i);
  });
  it('should return a ts-basic template', () => {
    const mockTemplate: Options = {
      language: 'typescript',
      version: '',
      database: 'none',
      git: false,
      runInstall: false,
      targetDirectory: '',
      templateDir: '',
      projectName: '',
      template: '',
    };
    const template = getTemplate(mockTemplate);
    expect(template).toMatch(/ts-basic/i);
  });
  it('should return a ts-mongo template', () => {
    const mockTemplate: Options = {
      language: 'typescript',
      version: '',
      database: 'mongodb',
      git: false,
      runInstall: false,
      targetDirectory: '',
      templateDir: '',
      projectName: '',
      template: '',
    };
    const template = getTemplate(mockTemplate);
    expect(template).toMatch(/ts-mongo/i);
  });
  it('should return a ts-pg template', () => {
    const mockTemplate: Options = {
      language: 'typescript',
      version: '',
      database: 'postgresql',
      git: false,
      runInstall: false,
      targetDirectory: '',
      templateDir: '',
      projectName: '',
      template: '',
    };
    const template = getTemplate(mockTemplate);
    expect(template).toMatch(/ts-pg/i);
  });
});

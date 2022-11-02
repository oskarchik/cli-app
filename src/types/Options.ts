export interface Options {
  projectName?: string;
  language?: string;
  version?: string;
  database?: string;
  targetDirectory: string;
  template?: string;
  templateDir: string;
  git: boolean;
  runInstall: boolean;
}

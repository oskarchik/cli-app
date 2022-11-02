import { copy } from 'fs-extra';

export const copyTemplateFiles = async (
  source: string,
  destination: string
) => {
  try {
    await copy(source, destination);
  } catch (error) {
    console.log('error copying template ', error);
    process.exit(1);
  }
};

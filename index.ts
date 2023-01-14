import { LeetCode } from './scraper';
(async () => {
  const leetCode = new LeetCode();
  await leetCode.initialize();
  await leetCode.setLanguageProcess();
  await leetCode.accessPageProcess();
  await leetCode.createDirProcess();
  await leetCode.getContentProcess();
  await leetCode.getTemplateProcess();
  await leetCode.close();
})();

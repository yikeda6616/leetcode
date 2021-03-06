import { LeetCode } from './scraper';

(async () => {
	const lg = new LeetCode();
	await lg.initialize();
	await lg.setLanguageProcess();
	await lg.accessPageProcess();
	await lg.createDirProcess();
	await lg.getContentProcess();
	await lg.getTemplateProcess();
	// await lg.close();
})();

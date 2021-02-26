import { LeetCode } from './scraper';

(async () => {
    const lg = new LeetCode();
    await lg.initialize();
    await lg.setLanguageProcess();
    await lg.accessPageProcess();
    await lg.createDirProcess();
    await lg.getContentProcess();
    // TODO: await lg.changeLanguageProcess();
    // await lg.close();
})();

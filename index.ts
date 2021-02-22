import { LeetCode } from './scraper';

(async () => {
    const lg = new LeetCode();
    await lg.initialize();
    await lg.accessPageProcess();
    await lg.createDirProcess();
    await lg.close();
})();

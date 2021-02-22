import puppeteer, { Browser, Page } from 'puppeteer';
import { createDir } from './util';

const URL = 'https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/';

export class LeetCode {
    browser: Browser | null = null;
    page: Page | null = null;
    async initialize() {
        this.browser = await puppeteer.launch({
            headless: false,
            slowMo: 50,
        })
        this.page = await this.browser?.newPage();
    }

    async accessPageProcess() {
        await this.page?.goto(URL);
    }

    async createDirProcess() {
        const titleSelector = '[data-cy="question-title"]'
        const elementHandle = await this.page?.$(titleSelector);
        const dirName = await (await elementHandle?.getProperty('textContent'))?.jsonValue();
        const dirLocation = './algorithm';
        await createDir(dirName as string, dirLocation);
    }

    async close() {
        await this.browser?.close();
    }
}

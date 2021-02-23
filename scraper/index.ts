import puppeteer, { Browser, Page } from 'puppeteer';
import { NodeHtmlMarkdown } from 'node-html-markdown'
import { createDir } from './util';

const URL = 'https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/';

export class LeetCode {
    browser: Browser | null = null;
    page: Page | null = null;
    dirName: string | undefined = "";
    async initialize() {
        this.browser = await puppeteer.launch({
            headless: false,
            slowMo: 50,
        })
        this.page = await this.browser?.newPage();
    }

    async accessPageProcess() {
        await this.page?.goto(URL, { waitUntil: 'networkidle2' });
    }

    async createDirProcess() {
        const selector = '[data-cy="question-title"]'
        const element = await this.page?.$(selector);
        this.dirName = await (await element?.getProperty('textContent'))?.jsonValue();
        await createDir(this.dirName, './algorithm');
    }

    async getContentProcess() {
        const selector = 'div[class*="question-content"]';
        const element = await this.page?.$(selector);
        const html = await (await element?.getProperty('innerHTML'))?.jsonValue();

        const markdown = NodeHtmlMarkdown.translate(html as any);
        const fs = require('fs');
        const filePath = `./algorithm/${this.dirName}/index.md`
        fs.writeFile(filePath, markdown, (err: any) => {
            if (err) throw err;
            console.log(`${filePath} is created successfully.`);
        })
        // await createFile(`./algorithm/${this.dirName}/`, content, (err) => {
        //     return console.log(err);
        // });
    }

    // TODO: async changeLanguageProcess() {}

    async close() {
        await this.browser?.close();
    }
}

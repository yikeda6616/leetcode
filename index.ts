const puppeteer = require('puppeteer');

(async () => {
    const url = 'https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/';
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    const titleSelector = '[data-cy="question-title"]' // DOM指定のためのセレクター
    const elementHandle = await page.$(titleSelector);
    const title = await (await elementHandle.getProperty('textContent')).jsonValue();
    console.log(title);

    // await browser.close();
})();

import puppeteer, { Browser, Page } from 'puppeteer';
import { NodeHtmlMarkdown } from 'node-html-markdown'
import { createDir } from './util';

const URL = 'https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/';

export class LeetCode {
	browser: Browser | null = null;
	page: Page | null = null;
	dirName: string | undefined = "";
	localStorage = { global_lang: 'typescript' }

	async initialize() {
		this.browser = await puppeteer.launch({
			headless: false,
			slowMo: 50,
		})
		this.page = await this.browser?.newPage();
	}

	async setLanguageProcess() {
		setDomainLocalStorage(this.browser, URL, this.localStorage);
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
		await createFile(filePath, markdown);
	}

	async getTemplateProcess() {
		const selector = '.CodeMirror-line';
		let elements = await this.page?.$$(selector);
		await elements?.map(async elm => {
			const html = await (await elm.getProperty('innerText'))?.jsonValue();
			console.log(html);
		})
		// await this.page?.evaluate((selector) => {
		// 	console.log(selector)
		// 	let elements = Array.from(document.querySelectorAll(selector))
		// 	let lines = elements.map((element) => {
		// 		return element.innerText;
		// 	})
		// 	console.log(lines);
		// }, selector);
		// document.querySelector('.CodeMirror-line').children[0].children[1].innerText
		// "function smallerNumbersThanCurrent(nums: number[]): number[] {"
	}

	async close() {
		await this.browser?.close();
	}
}

const setDomainLocalStorage = async (browser: Browser | null, url: string, values: {}) => {
	const page = await browser?.newPage();
	await page?.setRequestInterception(true);
	page?.on('request', r => {
		r.respond({
			status: 200,
			contentType: 'text/plain',
			body: 'tweak me.',
		});
	});
	await page?.goto(url);
	await page?.evaluate(values => {
		for (const key in values) {
			localStorage.setItem(key, values[key]);
		}
	}, values);
	await page?.close();
};
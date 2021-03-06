import puppeteer, { Browser, Page } from 'puppeteer';
import { NodeHtmlMarkdown } from 'node-html-markdown'
import { Command } from 'commander';

import { createDir, createFile } from './util';

const program = new Command();
program.parse(process.argv);
const URL = program.args[0];

export class LeetCode {
	browser: Browser | null = null;
	page: Page | null = null;
	dirName: string | undefined = "";
	localStorage = { global_lang: 'typescript' }
	lines: string[] | any[] | undefined = []

	async initialize() {
		this.browser = await puppeteer.launch({
			headless: true,
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
		const filePath = `./algorithm/${this.dirName}/index.md`
		await createFile(filePath, markdown);
	}

	async getTemplateProcess() {
		const selector = '.CodeMirror-line';
		this.lines = await this.page?.evaluate((selector) => {
			const list = Array.from(document.querySelectorAll(selector));
			return list.map(data => data.textContent);
		}, selector);
		const content = this.lines?.join('\n')
		console.log(content);
		const filePath = `./algorithm/${this.dirName}/index.ts`
		await createFile(filePath, content)
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
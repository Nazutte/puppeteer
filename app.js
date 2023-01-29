require('dotenv').config()
const puppeteer = require('puppeteer-extra')
const stealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(stealthPlugin);

const executablePath = process.env.EXECUTABLE_PATH;
const userDataDir = process.env.USER_DATA_DIR;
const args = [ '--proxy-server=http://' ];

const url = 'https://www.google.com/'
const botTestUrl = 'https://bot.sannysoft.com';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function start() {
    const browser = await puppeteer.launch({ headless: false, executablePath, userDataDir });
    const page = await browser.newPage();
    await page.goto(url);
    await sleep(5000);
    await page.screenshot({ path: './test.png', fullPage: true });
    await browser.close();
};

start();
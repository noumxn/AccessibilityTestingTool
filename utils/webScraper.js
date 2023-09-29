import {chromium} from 'playwright';

export const scrapeWebsite = async (url) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(url);
  const htmlContent = await page.content();
  await browser.close();


  return htmlContent;
}

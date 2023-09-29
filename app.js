import fs from 'fs-extra';
import chalk from 'chalk';
import {testAccessibility} from './components/index.js';
import {scrapeWebsite} from './utils/webScraper.js';
import {validateHtml} from './utils/htmlValidator.js';
import {saveToOutputFile} from './utils/fileSaver.js';
import {JSDOM} from 'jsdom';


(async () => {
  const url = process.argv[2];

  if (!url) {
    console.error(chalk.red('Error: Please provide a website URL.'));
    return;
  }

  try {
    // Use playwright to fetch html content
    const htmlContent = await scrapeWebsite(url);
    // Create a new file with html content
    await saveToOutputFile(htmlContent);

    // Validate HTML content
    const validationResult = await validateHtml(htmlContent);
    if (validationResult === false) {
      console.log(chalk.green("HTML is Valid!"));
    } else {
      console.error(chalk.red("HTML is not valid. This is a list of Issues: "), validationResult);
    }
  } catch (e) {
    console.error('Error:', e);
  }

  try {
    console.log("Accessibility Issues:")
    // Load the HTML file
    const data = fs.readFileSync('./output.html', 'utf-8');
    const dom = new JSDOM(data);
    const {document} = dom.window;
    testAccessibility(document);
  } catch (e) {
    console.error(e);
  }
})();

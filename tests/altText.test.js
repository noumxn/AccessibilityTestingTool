import {expect} from 'chai';
import {checkAltText} from '../components/altText';
import {JSDOM} from 'jsdom';
import chalk from 'chalk';

describe('Alt Text Component', () => {
  it('should detect missing alt text', () => {
    const html1 = `<html><body><img /></body></html>`;
    const dom1 = new JSDOM(html1);
    const {document: document1} = dom1.window;
    const result1 = checkAltText(document1);
    expect(result1).to.include(chalk.red('Image or icon without appropriate alt text:'));

    const html2 = `<html><body><img alt="" /></body></html>`;
    const dom2 = new JSDOM(html2);
    const {document: document2} = dom2.window;
    const result2 = checkAltText(document2);
    expect(result2).to.include(chalk.red('Image or icon without appropriate alt text:'));

    const html3 = `<html><body><img alt="this will pass" /></body></html>`;
    const dom3 = new JSDOM(html3);
    const {document: document3} = dom3.window;
    const result3 = checkAltText(document3);
    expect(result3).to.equal(chalk.green('Alt Text test passed!'));
  });
});

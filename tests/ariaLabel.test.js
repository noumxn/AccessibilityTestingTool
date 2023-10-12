import {expect} from 'chai';
import {checkAriaAttr} from '../components/ariaLabel.js';
import {JSDOM} from 'jsdom';
import chalk from 'chalk';

describe('Aria Attributes Component', () => {
  it('should detect complex element without both aria-label and aria-labelledby', () => {
    const html1 = `<html><body><div aria-label=""></div></body></html>`;
    const dom1 = new JSDOM(html1);
    const {document: document1} = dom1.window;
    const result1 = checkAriaAttr(document1);
    expect(result1).to.include(chalk.red('Complex element without both aria-label and aria-labelledby:'));

    const html2 = `<html><body><div aria-labelledby=""></div></body></html>`;
    const dom2 = new JSDOM(html2);
    const {document: document2} = dom2.window;
    const result2 = checkAriaAttr(document2);
    expect(result2).to.include(chalk.red('Complex element without both aria-label and aria-labelledby:'));

    const html3 = `<html><body><div aria-label="pass" aria-labelledby="pass"></div></body></html>`;
    const dom3 = new JSDOM(html3);
    const {document: document3} = dom3.window;
    const result3 = checkAriaAttr(document3);
    expect(result3).to.equal(chalk.green('Aria Attributes test passed!'));
  });
});

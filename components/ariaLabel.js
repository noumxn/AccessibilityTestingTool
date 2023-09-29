import chalk from 'chalk';

// Check for aria-label or aria-labelledby
export const checkAriaAttr = (document) => {
  try {
    const ariaElements = document.querySelectorAll('[aria-label]:not([aria-labelledby]):not([aria-label]), [aria-labelledby]:not([aria-label]):not([aria-labelledby])');
    for (const ele of ariaElements) {
      console.error(chalk.red('\nComplex element without both aria-label and aria-labelledby:'), chalk.cyan($.html(ele)));
      return
    }
    console.log(chalk.green(`Aria Attributes test passed!`));
  } catch (e) {
    console.error(chalk.red('Error parsing the HTML file:'), e);
  }
};

import chalk from 'chalk';

/*
 * @description PERCIEVABLE: Text Alternatives: Verify the use of aria-label and aria-labeled by for complex elements.
 **/

export const checkAriaAttr = (document) => {
  try {
    let output = "";
    const ariaElements = document.querySelectorAll('[aria-label]:not([aria-labelledby]):not([aria-label]), [aria-labelledby]:not([aria-label]):not([aria-labelledby])');
    for (const ele of ariaElements) {
      output = output + `${chalk.red('\nComplex element without both aria-label and aria-labelledby:')}${chalk.cyan($.html(ele))}`
    }
    if (output.length === 0) {
      return chalk.green(`Aria Attributes test passed!`)
    } else {
      return output;
    }
  } catch (e) {
    return `${chalk.red('Error parsing the HTML file:')}${e}`;
  }
};

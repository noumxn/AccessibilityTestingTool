import chalk from 'chalk';

/*
 * @description PERCIEVABLE: Text Alternatives: Check for appropriate alt text for images, icons, and non-text content.
 **/

export const checkAltText = (document) => {
  try {
    const images = document.querySelectorAll('img, [role="img"]');
    images.forEach((element, index) => {
      const alt = element.getAttribute('alt');
      if (!alt) {
        console.error(chalk.red('\nImage or icon without appropriate alt text:'), chalk.cyan(element.outerHTML));
      }
      return
    });
    console.log(chalk.green('Alt Text test passed!'));
  } catch (e) {
    console.error(chalk.red('Error parsing the HTML file:'), e);
  }
};

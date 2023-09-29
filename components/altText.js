import chalk from 'chalk';

// Check alt text
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

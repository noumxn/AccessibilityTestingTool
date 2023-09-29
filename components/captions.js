import chalk from 'chalk';

/*
 * @description PERCIEVABLE: Time-Based Media: Check for captions for multimedia.
 **/

export const checkCaptions = (document) => {
  try {
    const videoElements = document.querySelectorAll('video');
    videoElements.forEach((element, index) => {
      const hasCaption = element.querySelector('track[kind="captions"]');

      if (!hasCaption) {
        console.error(chalk.red('\nMultimedia element without captions:'), chalk.cyan(element.outerHTML));
      }
    });

    console.log(chalk.green('Multimedia Captions test passed!'));
  } catch (e) {
    console.error(chalk.red('Error parsing the HTML file:'), e);
  }
};

import chalk from 'chalk';

/*
 * @description PERCIEVABLE: Time-Based Media: Check for audio descriptions for multimedia.
 **/

export const checkAudioDesc = (document) => {
  try {
    const videoElements = document.querySelectorAll('video');
    videoElements.forEach((element, index) => {
      const hasAudioDescription = element.querySelector('track[kind="descriptions"]');

      if (!hasAudioDescription) {
        console.error(chalk.red('\nMultimedia element without audio descriptions:'), chalk.cyan(element.outerHTML));
      }
    });

    console.log(chalk.green('Multimedia Audio Description test passed!'));
  } catch (e) {
    console.error(chalk.red('Error parsing the HTML file:'), e);
  }
};

import chalk from 'chalk';

/*
 * @description PERCIEVABLE: Time-Based Media: Check for captions for multimedia.
 **/

export const checkCaptions = (document) => {
  try {
    let output = "";
    const videoElements = document.querySelectorAll('video');
    for (let element of videoElements) {
      const hasCaption = element.querySelector('track[kind="captions"]');
      if (!hasCaption) {
        output = output + `${chalk.red('\nMultimedia element without captions:')}${chalk.cyan(element.outerHTML)}`
      }

    };
    if (output.length === 0) {
      return chalk.green('Multimedia Captions test passed!')
    } else {
      return output;
    }
  } catch (e) {
    return `${chalk.red('Error parsing the HTML file:')}${e}`;
  }
};

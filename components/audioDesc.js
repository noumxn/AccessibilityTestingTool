import chalk from 'chalk';

/*
 * @description PERCIEVABLE: Time-Based Media: Check for audio descriptions for multimedia.
 **/

export const checkAudioDesc = (document) => {
  try {
    let output = "";
    const videoElements = document.querySelectorAll('video');
    for (let element of videoElements) {
      const hasAudioDescription = element.querySelector('track[kind="descriptions"]');
      if (!hasAudioDescription) {
        output = output + `${chalk.red('\nMultimedia element without audio descriptions:')}${chalk.cyan(element.outerHTML)}`
      }
    }
    if (output.length === 0) {
      return chalk.green('Multimedia Audio Description test passed!')
    } else {
      return output;
    }
  } catch (e) {
    return `${chalk.red('Error parsing the HTML file:')}${e}`;
  }
};

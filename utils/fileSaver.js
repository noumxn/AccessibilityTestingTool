import fs from 'fs-extra';

/*
 * @param {htmlContent} String
 * @description Saves HTML content to a file called 'output.html'
 **/
export const saveToOutputFile = async (htmlContent) => {
  fs.writeFileSync('output.html', htmlContent, 'utf-8');
  console.log('HTML content saved to output.html');
}

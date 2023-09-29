import fs from 'fs-extra';

export const saveToOutputFile = async (htmlContent) => {
  fs.writeFileSync('output.html', htmlContent, 'utf-8');
  console.log('HTML content saved to output.html');
}

import axios from 'axios';

axios.defaults.headers.post["Content-Type"] = "text/html; charset=utf-8";

/*
 * @param {htmlContent} String
 * @description Validates HTML content
 * @return {false, markupErrors} Returns false if no errors found. Returns an array called markupErrors if errors found
 **/

export const validateHtml = async (htmlContent) => {
  const {data} = await axios.post(
    "https://validator.w3.org/nu/?out=json",
    htmlContent
  );

  let markupErrors = [];
  for (let msg of data.messages) {
    if (msg.type === "error") {
      markupErrors.push(msg.message);
    }
  }
  if (markupErrors.length === 0) {
    return false;
  } else {
    return markupErrors;
  }
};

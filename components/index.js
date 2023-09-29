import {checkAriaAttr} from './ariaLabel.js';
import {checkAltText} from './altText.js'

export const testAccessibility = (document) => {
  checkAriaAttr(document);
  checkAltText(document);
}

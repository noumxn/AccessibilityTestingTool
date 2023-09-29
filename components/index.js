import {checkAriaAttr} from './ariaLabel.js';
import {checkAltText} from './altText.js'
import {checkCaptions} from './captions.js';
import {checkAudioDesc} from './audioDesc.js';

export const testAccessibility = (document) => {
  // TODO: Sort these in order of priority
  checkAriaAttr(document);
  checkAltText(document);
  checkCaptions(document);
  checkAudioDesc(document);
}

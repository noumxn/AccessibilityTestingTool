import {checkAriaAttr} from './ariaLabel.js';
import {checkAltText} from './altText.js'
import {checkCaptions} from './captions.js';
import {checkAudioDesc} from './audioDesc.js';
import {checkTimeBasedMediaAlt} from './altPresentations.js';

export const testAccessibility = (document) => {
  // TODO: Sort these in order of priority
  console.log(checkAriaAttr(document));
  console.log(checkAltText(document));
  console.log(checkCaptions(document));
  console.log(checkAudioDesc(document));
  console.log(checkTimeBasedMediaAlt(document));
}

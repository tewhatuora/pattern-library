import { SIZE_MAP } from '../constants.js';

/**
 * Map a size from Figma to a size
 * that is used in vanilla extract
 * @param {string} size Figma size, e.g. 2xl
 * @return {string} Converted size, e.g. xxlarge
 */
function makeSize(size) {
  if (size in SIZE_MAP) {
    return SIZE_MAP[size];
  }

  const extras = /^(\d?)x([s|l])$/g.exec(size);

  if (extras?.length) {
    return `${Array(Number(extras[1])).fill('x').join('')}${SIZE_MAP[extras[2]]}`;
  }

  // Fallback to input, this is not a size
  return size;
}

export default makeSize;

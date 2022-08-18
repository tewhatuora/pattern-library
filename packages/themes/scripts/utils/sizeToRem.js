/**
 * Convert a size to rem units,
 * for a base font size of 62.5% or 16px
 * so that 10px = 1rem
 * @param {number} size
 * @return {string} size in rem units
 */
function sizeToRem(size) {
  const num = Number(size) / 10;
  const rem = parseFloat(num.toFixed(2).toString());
  return `${rem}rem`;
}

export default sizeToRem;

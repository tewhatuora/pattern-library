/**
 * Font weight for buttons
 * based on variant
 * @param variant
 */
function fontWeightForButton(variant: string) {
  if (['text', 'label'].includes(variant)) return 'link-normal';
  return 'bold';
}

export default fontWeightForButton;

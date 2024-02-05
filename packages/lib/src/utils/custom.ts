import { vars } from '../themes/vars.css';

export const focusColor = vars.color.annotation110;
export const focusOutline = `${vars.borderWidth.xlarge} solid ${focusColor}`;
// This is a hack to only show the focus ring when using keyboard nav
// This is progressively enhanced so if :focus-visible isn't supported it falls back to :focus
export const focusSelectorsStyles = {
  '&:focus': {
    outline: focusOutline,
  },
  '&:focus:not(:focus-visible)': {
    outline: 'none',
  },
};

export const getFocusSelectors = (color: string) => ({
  '&:focus': {
    outline: `${vars.borderWidth.xlarge} solid ${color}`,
  },
  '&:focus:not(:focus-visible)': {
    outline: 'none',
  },
});

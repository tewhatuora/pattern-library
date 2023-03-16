import { vars } from '../themes/vars.css';

export const focusColor = vars.color.annotation110;
export const focusOutline = `${vars.borderWidth.xlarge} solid ${focusColor}`;
export const focusSelectorsStyles = {
  '&:focus': {
    outline: focusOutline,
  },
  '&:focus:not(:focus-visible)': {
    outline: 'none',
  },
};

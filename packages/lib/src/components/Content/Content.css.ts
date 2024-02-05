import { styleVariants } from '@vanilla-extract/css';

import { vars } from '@/src/themes/vars.css';

export const content = styleVariants({
  light: {
    color: vars.color.semantic.text.copy.dark,
  },
  dark: {
    color: vars.color.semantic.text.copy.light,
  },
});

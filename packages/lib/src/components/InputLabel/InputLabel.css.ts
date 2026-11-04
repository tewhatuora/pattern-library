import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

import { calc } from '@vanilla-extract/css-utils';

import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';
import { icon as buttonIcon } from '../Button/Button.css';

export const wrapper = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  columnGap: vars.space.xsmall.mobile,
  color: vars.color.semantic.text.copy.dark,
});

export const labelElement = style({
  display: 'contents',
});

export const labelText = style({
  gridColumn: 1,
  gridRow: 1,
});

export const subheading = style({
  gridColumn: '1 / -1',
  gridRow: 2,
});

export const labels = styleVariants({
  error: {
    color: vars.color.semantic.text.copy.error,
  },
  disabled: {
    color: vars.color.semantic.text.copy.disabled,
  },
});

// The gap between the text and its icon is 2XS. The theme has no 2XS step, so it's half of XS.
export const tertiaryLabel = style([
  responsiveStyle({
    mobile: {
      height: 'auto',
      gap: calc.divide(vars.space.xsmall.mobile, 2),
    },
    tablet: {
      height: 'auto',
      gap: calc.divide(vars.space.xsmall.tablet, 2),
    },
  }),
  {
    gridColumn: 2,
    gridRow: 1,
    justifySelf: 'end',
    display: 'inline-flex',
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: 'auto',
    borderWidth: 0,
  },
]);

// The gap above spaces the icon, so drop the margin Button gives it for its own, larger gap
globalStyle(
  `${tertiaryLabel} > ${buttonIcon.left}:not(:only-child), ${tertiaryLabel} > ${buttonIcon.right}:not(:only-child)`,
  {
    margin: 0,
  },
);

// Keeps the disabled colour on hover, where the link variant would change it
export const tertiaryLabelDisabled = style({
  selectors: {
    '&&, &&:hover': {
      color: vars.color.semantic.text.copy.disabled,
      textDecoration: vars.textDecoration['link-normal'],
      cursor: 'not-allowed',
    },
  },
});

export const iconPosition = styleVariants({
  left: {
    flexDirection: 'row-reverse',
  },
  right: {
    flexDirection: 'row',
  },
});

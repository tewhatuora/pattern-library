import { globalStyle, style } from '@vanilla-extract/css';

import { calc } from '@vanilla-extract/css-utils';

import { input } from '../InputField/InputField.css';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

export const chevron = style([
  {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: vars.color.semantic.icons.dark,
    cursor: 'pointer',
    zIndex: 2,
  },
  responsiveStyle({
    mobile: {
      right: vars.space.small.mobile,
    },
    tablet: {
      right: vars.space.xsmall.tablet,
    },
  }),
]);

// Shown over the select, which hides the placeholder option's own text so it can be styled. Clicks pass through to
// the select.
export const placeholder = style([
  {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 3,
    width: '100%',
    height: vars.space.xxlarge.tablet,
    lineHeight: vars.space.xxlarge.tablet,
    // Lines the text up with the select's, inside its border
    paddingLeft: calc.add(vars.space.xsmall.tablet, vars.borderWidth.small),
    // Keeps a long placeholder on one line, clear of the chevron, like the select's own text
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: vars.color.semantic.text.copy.placeholder,
    pointerEvents: 'none',
  },
  responsiveStyle({
    mobile: {
      paddingRight: calc(vars.space.small.mobile).add(vars.space.small.mobile).toString(),
      fontSize: vars.textSize.medium.mobile.fontSize,
    },
    tablet: {
      paddingRight: calc(vars.space.small.tablet)
        .add(vars.space.xsmall.tablet)
        .add(vars.space.xsmall.tablet)
        .toString(),
      fontSize: vars.textSize.medium.tablet.fontSize,
    },
  }),
]);

globalStyle(`${input.dropdown}:focus + ${placeholder}`, {
  color: 'transparent',
});

globalStyle(`${input.dropdown}:disabled + ${placeholder}`, {
  color: vars.color.semantic.text.copy.disabled,
});

// The select's disabled colour would otherwise show the placeholder option's text under the overlay
globalStyle(`select${input.dropdownPlaceholder}:disabled`, {
  color: 'transparent',
});

import { style } from '@vanilla-extract/css';

import { calc } from '@vanilla-extract/css-utils';

import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/src/themes/vars.css';
import { focusOutline } from '@/src/utils/custom';
import * as typography from '@/src/hooks/typography/typography.css';
import { responsiveStyle } from '@/src/css/responsiveStyle';

// the use of `!important` is necessary because `react-select` sets unremovable styles.

export const combobox = style({
  transition: 'unset !important',
  selectors: {
    '&:focus-within': {
      outline: `${focusOutline(vars.color.semantic.inputs.fields.highlight.focus)} !important`,
    },
  },
});

export const placeholder = style({
  color: vars.color.semantic.text.copy.placeholder,
});

export const menu = style([
  responsiveStyle({
    mobile: {
      marginTop: 4,
      paddingTop: calc.divide(vars.space.small.mobile, 2),
      paddingBottom: calc.divide(vars.space.small.mobile, 2),
      borderRadius: vars.borderRadiusAll.inputs,
      boxShadow: vars.shadow.primary,
      borderWidth: vars.borderWidth.small,
      borderStyle: 'solid',
      borderColor: vars.color.semantic.card.border,
    },
    tablet: {
      paddingTop: calc.divide(vars.space.small.tablet, 2),
      paddingBottom: calc.divide(vars.space.small.tablet, 2),
    },
  }),
  typography.fontFamily,
  typography.fontWeight['regular'],
  typography.text.medium,
]);

export const option = recipe({
  base: [
    responsiveStyle({
      mobile: {
        paddingLeft: vars.space.small.mobile,
        paddingTop: calc.divide(vars.space.small.mobile, 2),
        paddingBottom: calc.divide(vars.space.small.mobile, 2),
      },
      tablet: {
        paddingLeft: vars.space.small.tablet,
        paddingTop: calc.divide(vars.space.small.tablet, 2),
        paddingBottom: calc.divide(vars.space.small.tablet, 2),
      },
    }),
  ],
  variants: {
    isFocused: {
      true: {
        // color: vars.color.semantic.text.copy.light,
        backgroundColor: vars.color.semantic.inputs.elements.background['unselected-hover'],
      },
    },
    isSelected: {
      true: {
        color: vars.color.semantic.text.copy.light,
        backgroundColor: vars.color.semantic.inputs.elements.background.selected,
      },
    },
  },
});

export const clearIndicatorSingle = style({
  color: vars.color.semantic.icons.dark,
});

export const clearIndicatorMulti = style({
  fontSize: vars.textSize.small.mobile.fontSize,
  lineHeight: vars.textSize.small.mobile.lineHeight,
});

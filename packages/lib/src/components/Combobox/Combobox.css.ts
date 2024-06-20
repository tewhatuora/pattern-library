import { style } from '@vanilla-extract/css';

import { calc } from '@vanilla-extract/css-utils';

import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/src/themes/vars.css';
import { focusOutline } from '@/src/utils/custom';
import * as typography from '@/src/hooks/typography/typography.css';
import * as loader from '@/src/components/Loader/Loader.css';
import { responsiveStyle } from '@/src/css/responsiveStyle';
import { rem } from '@/src/css/helpers';

const height = vars.space.xxlarge.tablet;

// the use of `!important` is necessary because `react-select` sets unremovable styles.

export const combobox = recipe({
  base: style([
    {
      minHeight: `${height} !important`,
      paddingTop: vars.space.xsmall.mobile,
      paddingBottom: vars.space.xsmall.mobile,
      transition: 'unset !important',
      lineHeight: 'unset',
      height: 'unset',

      selectors: {
        '&:focus-within': {
          outline: `${focusOutline(vars.color.semantic.inputs.fields.highlight.focus)} !important`,
        },
      },
    },
    responsiveStyle({
      mobile: {
        flexDirection: 'column', // column on mobile so that the clear can be on its own row
        alignItems: 'flex-start !important',
      },
      tablet: {
        flexDirection: 'row',
        alignItems: 'center !important',
      },
    }),
  ]),
  variants: {
    error: {
      true: {
        borderColor: vars.color.semantic.inputs.fields.border.error,
        boxShadow: `0 0 0 ${rem(1)} ${vars.color.semantic.inputs.fields.border.error}`,
      },
    },
  },
});

export const placeholder = style({
  color: vars.color.semantic.text.copy.placeholder,
});

export const valueContainer = style({
  gap: vars.space.xsmall.mobile,
  maxWidth: '100%',
});

export const menu = style([
  responsiveStyle({
    mobile: {
      marginTop: 4,
      backgroundColor: vars.color.semantic.card.background,
      borderRadius: vars.borderRadiusAll.inputs,
      boxShadow: vars.shadow.primary,
      borderWidth: vars.borderWidth.small,
      borderStyle: 'solid',
      borderColor: vars.color.semantic.card.border,
    },
  }),
  typography.fontFamily,
  typography.fontWeight['regular'],
  typography.text.medium,
]);

export const menuList = style([
  responsiveStyle({
    mobile: {
      paddingTop: calc.divide(vars.space.small.mobile, 2),
      paddingBottom: calc.divide(vars.space.small.mobile, 2),
    },
    tablet: {
      paddingTop: calc.divide(vars.space.small.tablet, 2),
      paddingBottom: calc.divide(vars.space.small.tablet, 2),
    },
  }),
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

export const indicatorsContainer = style([
  {
    alignItems: 'baseline !important',
    paddingTop: vars.space.xsmall.mobile,
    paddingLeft: vars.space.xsmall.mobile,
  },
  responsiveStyle({
    mobile: {
      alignSelf: 'end !important',
    },
    tablet: {
      alignSelf: 'stretch !important',
    },
  }),
]);

export const clearIndicatorSingle = style([
  responsiveStyle({
    mobile: {
      display: 'flex',
      alignItems: 'center',
      color: vars.color.semantic.icons.dark,
      minHeight: vars.textSize.small.mobile.lineHeight,
      cursor: 'pointer',
    },
  }),
]);

export const clearIndicatorMulti = style({
  fontSize: vars.textSize.small.mobile.fontSize,
  lineHeight: vars.textSize.small.mobile.lineHeight,
  cursor: 'pointer',
});

export const loadingIndicator = style([
  loader.baseVariant.dark,
  {
    width: 20,
    height: 20,
  },
]);

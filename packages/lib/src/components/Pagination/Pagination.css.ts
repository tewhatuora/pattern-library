import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { rem } from '@/src/css/helpers';

import { fontFamily } from '@/src/hooks/typography/typography.css';

import { getFocusSelectors } from '@/src/utils/custom';

import { atoms } from '../../css/atoms/atoms';
import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  rowGap: vars.space.small.mobile,
});

const base = style([
  responsiveStyle({
    mobile: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
    },
  }),
]);

export const pages = styleVariants({
  controlled: [base],
  uncontrolled: [
    base,
    responsiveStyle({
      desktop: {
        display: 'none',
      },
    }),
  ],
});

export const pageSelect = style({
  position: 'relative',
  display: 'flex',
});

export const select = style([
  fontFamily,
  {
    appearance: 'none',
    height: vars.space.xxlarge.tablet,
    paddingLeft: vars.space.small.mobile,
    // Room for the chevron: its width plus the gaps either side
    paddingRight: calc(vars.space.small.mobile).add(vars.space.xsmall.mobile).add(vars.space.small.mobile).toString(),
    fontSize: vars.textSize.medium.mobile.fontSize,
    color: vars.color.semantic.text.copy.dark,
    backgroundColor: vars.color.semantic.inputs.fields.background.normal,
    borderStyle: 'solid',
    borderWidth: vars.borderWidth.small,
    borderColor: vars.color.semantic.inputs.fields.border.normal,
    borderRadius: vars.borderRadiusAll.inputs,
    cursor: 'pointer',
    selectors: {
      ...getFocusSelectors(vars.color.semantic.inputs.fields.highlight.focus),
    },
  },
]);

export const selectChevron = style({
  position: 'absolute',
  top: '50%',
  right: vars.space.xsmall.mobile,
  transform: 'translateY(-50%)',
  color: vars.color.semantic.icons.dark,
  // Clicks pass through to the select
  pointerEvents: 'none',
});

const pageLinksBase = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  }),
  { columnGap: vars.space.xsmall.mobile },
]);

export const pageLinks = styleVariants({
  // Forced page buttons don't fit beside Previous and Next below desktop, so they get their own row there
  controlled: [
    pageLinksBase,
    responsiveStyle({
      mobile: {
        order: 1,
        flexBasis: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        rowGap: vars.space.xsmall.mobile,
      },
      desktop: {
        order: 0,
        flexBasis: 'auto',
        flexWrap: 'nowrap',
      },
    }),
  ],
  // Nine page buttons plus Previous and Next need desktop width; below that the page select shows instead
  uncontrolled: [
    pageLinksBase,
    responsiveStyle({
      mobile: {
        display: 'none',
      },
      desktop: {
        display: 'flex',
      },
    }),
  ],
});

export const page = style({
  width: vars.space.xlarge.tablet,
  height: vars.space.xlarge.tablet,
});

export const pageItem = style([
  atoms({
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 'button',
    transitionDuration: '150',
    transitionProperty: 'default',
    transitionTimingFunction: 'inOut',
  }),
  fontFamily,
  {
    width: '100%',
    height: '100%',
    fontSize: vars.textSize.medium.tablet.fontSize,
    selectors: {
      ...getFocusSelectors(vars.color.semantic.button.primary.highlight.focus),
    },
  },
]);

export const buttonContainer = style(
  responsiveStyle({
    mobile: {
      display: 'flex',
      width: rem(120),
      height: vars.space.xxlarge.tablet,
      selectors: {
        '&:last-of-type': {
          justifyContent: 'flex-end',
        },
      },
    },
    tablet: {
      width: rem(130),
    },
  }),
);

export const button = styleVariants({
  primary: [
    pageItem,
    // Fills the container's height rather than Button's minimum height
    { minHeight: 0, paddingBlock: 0 },
    responsiveStyle({
      mobile: {
        paddingLeft: vars.space.small.tablet,
        paddingRight: vars.space.small.tablet,
        width: 'fit-content',
      },
      tablet: {
        paddingLeft: '0',
        paddingRight: '0',
        width: '100%',
      },
    }),
  ],
  page: [
    pageItem,
    {
      borderRadius: vars.borderRadiusAll.standard,
      color: vars.color.semantic.text.copy.dark,
      border: 'none',
      ':hover': {
        color: vars.color.semantic.button.primary.content.hover,
        backgroundColor: vars.color.semantic.button.primary.background.hover,
      },
    },
  ],
  current: [
    pageItem,
    {
      borderRadius: vars.borderRadiusAll.standard,
      color: vars.color.semantic.text.copy.light,
      backgroundColor: vars.color.semantic.button.primary.background.normal,
      fontWeight: vars.textWeight.bold,
    },
  ],
});

const dot = {
  width: rem(3),
  height: rem(3),
  borderRadius: '50%',
  backgroundColor: vars.color.semantic.text.copy.dark,
};

export const ellipsis = style([
  dot,
  {
    position: 'relative',
    ':before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: rem(-6),
      ...dot,
    },
    ':after': {
      content: '""',
      position: 'absolute',
      top: '0',
      right: rem(-6),
      ...dot,
    },
  },
]);

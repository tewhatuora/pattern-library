import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

import { mapToProperty } from '../../utils';

type Vars = typeof vars;
type TextDefinition = Vars['textSize'];
type HeadingDefinition = Vars['headingLevel'];
type TypographicDefinition = TextDefinition[keyof TextDefinition] | HeadingDefinition[keyof HeadingDefinition];

export const fontFamily = style({
  fontFamily: `${vars.fontFamily}, Arial, Helvetica, sans-serif`,
});

export const fontWeight = styleVariants(vars.textWeight, mapToProperty('fontWeight'));

const makeTypographyRules = (textDefinition: TypographicDefinition) => {
  const { fontSize: mobileFontSize, lineHeight: mobileLineHeight } = textDefinition.mobile;

  const { fontSize: tabletFontSize, lineHeight: tabletLineHeight } = textDefinition.tablet;

  return style(
    responsiveStyle({
      mobile: {
        fontSize: mobileFontSize,
        lineHeight: mobileLineHeight,
      },
      tablet: {
        fontSize: tabletFontSize,
        lineHeight: tabletLineHeight,
      },
    }),
  );
};

export const text = {
  xsmall: makeTypographyRules(vars.textSize.xsmall),
  small: makeTypographyRules(vars.textSize.small),
  medium: makeTypographyRules(vars.textSize.medium),
  large: makeTypographyRules(vars.textSize.large),
};

export const headingWeight = styleVariants(vars.headingWeight, mapToProperty('fontWeight'));

export const heading = {
  '1': makeTypographyRules(vars.headingLevel['1']),
  '2': makeTypographyRules(vars.headingLevel['2']),
  '3': makeTypographyRules(vars.headingLevel['3']),
  '4': makeTypographyRules(vars.headingLevel['4']),
};

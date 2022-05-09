import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

import { mapToProperty } from '../../utils';

type Vars = typeof vars;
type TextDefinition = Vars['textSize'];
type HeadingDefinition = Vars['headingLevel'];
type TypographicDefinition = TextDefinition[keyof TextDefinition] | HeadingDefinition[keyof HeadingDefinition];

export const fontFamily = style({
  fontFamily: vars.fontFamily,
});

export const fontWeight = styleVariants(contract.textWeight, mapToProperty('fontWeight'));

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
  xsmall: makeTypographyRules(contract.textSize.xsmall),
  small: makeTypographyRules(contract.textSize.small),
  medium: makeTypographyRules(contract.textSize.standard),
  large: makeTypographyRules(contract.textSize.large),
  xlarge: makeTypographyRules(contract.textSize.xlarge),
  xxlarge: makeTypographyRules(contract.textSize.xxlarge),
  xxxlarge: makeTypographyRules(contract.textSize.xxxlarge),
};

export const headingWeight = styleVariants(vars.headingWeight, mapToProperty('fontWeight'));

export const heading = {
  '1': makeTypographyRules(contract.headingLevel['1']),
  '2': makeTypographyRules(contract.headingLevel['2']),
  '3': makeTypographyRules(contract.headingLevel['3']),
  '4': makeTypographyRules(contract.headingLevel['4']),
};

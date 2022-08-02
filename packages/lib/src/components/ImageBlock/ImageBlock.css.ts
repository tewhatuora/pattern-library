import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

// import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';
import { atoms } from '../../css/atoms/atoms';
import { fontFamily } from '../../hooks/typography/typography.css';

export const imageBlock = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
    height: 'full',
  }),
]);

export const content = style([
  atoms({
    display: 'flex',
    flexGrow: 1,
    flexShrink: 0,
    alignItems: 'center',
  }),
  {
    height: '100%',
  },
]);

export const row = styleVariants({
  full: {
    gridTemplateAreas: '"content content content content content content image image image image image image"',
  },
  half: {
    gridTemplateRows: 'auto',
    gridTemplateAreas: `
      "content content content content content content"
      "image image image image image image"`,
  },
  third: {
    gridTemplateRows: 'auto',
    gridTemplateAreas: `
      "content content content content"
      "image image image image"`,
  },
});

globalStyle(`${content} > *`, {
  flexGrow: 1,
});

export const imageBase = style([
  {
    display: 'block',
    position: 'relative',
    height: 'auto',
    width: '100%',
    objectFit: 'cover',
    color: vars.color.primary100,
    textAlign: 'center',
    ':before': {
      content: ' ',
      display: 'block',
      position: 'absolute',
      top: '-10px',
      left: '0',
      height: 'calc(100% + 10px)',
      width: '100%',
      backgroundColor: 'rgb(230, 230, 230)',
      border: '2px dotted rgb(200, 200, 200)',
      borderRadius: '5px',
    },
    ':after': {
      content: '"\f127" " Broken Image of " attr(alt)',
      display: 'block',
      fontSize: '16px',

      color: 'rgb(100, 100, 100)',

      position: 'absolute',
      top: '5px',
      left: '0',
      width: '100%',
      textAlign: 'center',
    },
  },
  fontFamily,
]);

export const image = styleVariants({
  square: [
    imageBase,
    {
      aspectRatio: '1 / 1',
    },
  ],
  rectangle: [
    imageBase,
    {
      aspectRatio: '3 / 2',
    },
  ],
});

// export const image = style({
//   objectFit: 'cover',
//   width: '100%',
// });

export const contentCol = styleVariants({
  left: {
    gridArea: 'image',
  },
  right: {
    gridArea: 'content',
  },
});

export const imageCol = styleVariants({
  left: {
    gridArea: 'content',
  },
  right: {
    gridArea: 'image',
  },
});

export const buttonRow = styleVariants({
  full: {
    gridTemplateRows: '1fr',
  },
  half: {
    gridTemplateRows: '1fr 1fr',
  },
  third: {
    gridTemplateRows: '1fr 1fr',
  },
});

export const primaryButtonColumn = styleVariants({
  full: {},
  half: {},
  third: {},
});

export const secondaryButtonColumn = styleVariants({
  full: {},
  half: {
    gridRowStart: '2',
  },
  third: {
    gridRowStart: '2',
  },
});

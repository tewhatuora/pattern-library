import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { responsiveStyle } from '../../css/responsiveStyle';
import { atoms } from '../../css/atoms/atoms';
import { vars } from '../../themes/vars.css';
import { fontFamily } from '../../hooks/typography/typography.css';
import { tabletRow } from '../../css/grid';

const width = {
  full: {
    ...tabletRow(12),
    gridTemplateAreas: '"content content content content content content image image image image image image"',
  },
  half: {
    ...tabletRow(6),
    gridTemplateRows: 'auto',
    gridTemplateAreas: `
          "content content content content content content"
          "image image image image image image"`,
  },
  third: {
    ...tabletRow(4),
    gridTemplateRows: 'auto',
    gridTemplateAreas: `
      "content content content content"
      "image image image image"`,
  },
};

const imagePosition = {
  before: {},
  after: {},
};

export type WidthVariant = keyof typeof width;
export type ImagePositionVariant = keyof typeof imagePosition;

export const rowVariants = recipe({
  base: style({}),
  variants: {
    width,
    imagePosition,
  },
  compoundVariants: [
    {
      variants: {
        width: 'full',
        imagePosition: 'before',
      },
      style: responsiveStyle({
        mobile: {
          display: 'flex',
          flexDirection: 'column-reverse',
        },
        desktop: {
          display: 'grid',
          gridTemplateAreas: '"image image image image image image content content content content content content"',
        },
      }),
    },
    {
      variants: {
        width: 'full',
        imagePosition: 'after',
      },
      style: responsiveStyle({
        mobile: {
          display: 'flex',
          flexDirection: 'column-reverse',
        },
        desktop: {
          display: 'grid',
          gridTemplateAreas: '"content content content content content content image image image image image image"',
        },
      }),
    },
    // Half
    {
      variants: {
        width: 'half',
        imagePosition: 'before',
      },
      style: responsiveStyle({
        mobile: {
          display: 'flex',
          flexDirection: 'column-reverse',
        },
      }),
    },
    {
      variants: {
        width: 'half',
        imagePosition: 'after',
      },
      style: responsiveStyle({
        mobile: {
          display: 'flex',
          flexDirection: 'column',
        },
      }),
    },
    // Third
    {
      variants: {
        width: 'third',
        imagePosition: 'before',
      },
      style: responsiveStyle({
        mobile: {
          display: 'flex',
          flexDirection: 'column-reverse',
        },
      }),
    },
    {
      variants: {
        width: 'third',
        imagePosition: 'after',
      },
      style: responsiveStyle({
        mobile: {
          display: 'flex',
          flexDirection: 'column',
        },
      }),
    },
  ],
});

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

    ':before': {
      content: ' ',
      display: 'block',
      position: 'absolute',
      top: '0',
      left: '0',
      height: '100%',
      width: '100%',
      background: `repeating-conic-gradient(${vars.color.primary5} 0% 25%, ${vars.color.primary0} 0% 50%) 50% / 4rem 4rem`,
    },
    ':after': {
      content: '"Broken image of " attr(alt)',
      display: 'block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      paddingLeft: vars.space.medium.tablet,
      textAlign: 'left',
      transform: 'translate(-50%, -50%)',
      color: vars.color.primary100,
      fontSize: vars.textSize.medium.tablet.fontSize,
      background: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAfCAYAAACPvW/2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJuSURBVHgBxVgxltMwEP0J9OQIpqM0J0B7goQTbHKCTU4Q5wbQ0SVbUW44wZoTsCXd+giho4M/ywiPTWRZdnj739PTSJatn9Gf0bxMMBLOuQW7OduM7ViW5S1G4AVGgGS27D6x5Wxv2BZZlqGqqq8YiAkGgmSExLfA4yt6qsQATDEcd8Y+avPYYiAGeYjeWbLb6/DE9lZt8dhM7Q2d9AGJSPYQyWRoeuAjN66kiW3mt1w7QyKGHFnBlqktRArzTDxSqS1kko8uiZB65xpNcn9BcnJ8KzO15jsO/4sQmkI+nMs5Gl2lmUryUm9CKuTcTO06lq+ar7pr9ESvxKji/Iw6gnZ0xNHuyISYMyF+lzH7E8cSwU6X5Bzfcv5nbK++HrqBETL+iNeTWbO7Z7tT20PWnNSWd9fogSghFXJhpgoVr8fcLveGrtmYZzf6rXGEWmQeIpfnKzvg2gNqgctx7zGGkArZCvI90rFrfrI7DcQ8ZEP2oNk4CZoGbAbfd2XwICEtLTIdVugO8xgK9BT4NECm/VIxxDseKnD7g4ICD3moQJ1zqoiQbcT9QJiUpIEHHQbvuX8IaeGVImT55ZVuFss1Ng0szwl8cobQI2rtiJBXuCD4fbkPFzoUzV/Z59PW4qUh0z73rk2i4WywQX3MrpXda0KhwgtxMv7quG9//BxihZz1UIFw4dWFd8Z26IdgIfdEKFZ4ReBFfYK5dLvQVchNlJAU577WubiQQ+C+ctROh08CnyqzvoXXpdEu5JwcmTOTX8Zk5FToXjbp5i9RZ0/BnCR/4fnw6DVkk+FzQSL7tQ97yZaj/rUYAYm4UjngN2xt57VmCrFlAAAAAElFTkSuQmCC) 0% 50% no-repeat`,
      backgroundSize: 'contain',
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

export const contentCol = style(
  responsiveStyle({
    desktop: {
      gridArea: 'content',
    },
  }),
);

export const imageCol = style(
  responsiveStyle({
    desktop: {
      gridArea: 'image',
    },
  }),
);

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
  full: responsiveStyle({
    mobile: {
      display: 'flex',
      justifyContent: 'center',
    },
    desktop: {
      display: 'block',
    },
  }),
  half: responsiveStyle({
    mobile: {
      display: 'flex',
      justifyContent: 'center',
    },
    desktop: {
      display: 'block',
    },
  }),
  third: responsiveStyle({
    mobile: {
      display: 'flex',
      justifyContent: 'center',
    },
    desktop: {
      display: 'block',
    },
  }),
});

export const secondaryButtonColumn = styleVariants({
  full: responsiveStyle({
    mobile: {
      display: 'flex',
      justifyContent: 'center',
    },
    desktop: {
      display: 'block',
    },
  }),
  half: responsiveStyle({
    mobile: {
      display: 'flex',
      justifyContent: 'center',
      gridRowStart: '2',
    },
    desktop: {
      display: 'block',
    },
  }),
  third: responsiveStyle({
    mobile: {
      display: 'flex',
      justifyContent: 'center',
      gridRowStart: '2',
    },
    desktop: {
      display: 'block',
    },
  }),
});

import { style } from '@vanilla-extract/css';

export const boldText = style({
  //
});

export const text = style({
  selectors: {
    [`${boldText} &`]: {
      fontWeight: 'bold',
    },
  },
});

export const ignoreWeightOverride = style({
  selectors: {
    [`${boldText} &`]: {
      fontWeight: 'normal',
    },
  },
});

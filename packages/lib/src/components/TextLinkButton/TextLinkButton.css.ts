import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '@/src/themes/vars.css';

export const TextLinkButton = style({
  // @NOTE: The padding was set to `xsmall.mobile` on both the mobile and tablet breakpoints before I made these
  // changes. The designs don't specify padding, so I can't confirm whether this is intentional or a mistake. I
  // will leave it as is.
  padding: calc.divide(vars.space.xsmall.mobile, 2),
});

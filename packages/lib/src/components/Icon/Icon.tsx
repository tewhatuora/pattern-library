import { ElementType, memo } from 'react';
import { clsx } from 'clsx';

import assert from '../../utils/assert';

import { Box, BoxProps } from '../Box/Box';
import icons, { IconType } from './icons';

import * as styles from './Icon.css';
import { Color } from '../../types';

export const IconStyles = styles;

const validIcons = Object.keys(icons);
export type IconProps = {
  /** Name of the icon. Throws if it isn't one of the available icons. */
  icon: IconType;
  /**
   * Size and use: `decorativeIcons` is large, `functionalIcons` is small for controls and inline text,
   * `socialIcons` is a fixed large size, and `tagIcon` is the smallest.
   * @default 'decorativeIcons'
   */
  variant?: styles.Variant;
  /** Click handler on the icon's `span`. It isn't focusable or announced as a button, so use `Button` for actions. */
  onClick?: () => void;
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
  className?: string;
  color?: Color;
  /** Accessible name. Gives the icon `role="img"`. Leave empty for a decorative icon, which is hidden from screen readers. */
  alt?: string;
  /**
   * @deprecated Has no effect. It undid an old rule that filled every icon path; icons now set their own fill
   * and stroke, so it is no longer needed (and it made filled icons such as `person` disappear).
   */
  noFill?: boolean;
} & BoxProps;

/**
 * Renders one of the library's SVG icons.
 *
 * @example
 * <Icon alt="Warning" icon="warning" variant="functionalIcons" />
 */
export const Icon = memo(({ icon, className, variant = 'decorativeIcons', alt, noFill, ...boxProps }: IconProps) => {
  assert(
    !!icon && validIcons.includes(icon),
    `Invalid Icon component: '${icon}'. Should be one of [${validIcons.map((c) => `'${c}'`).join(', ')}]`,
  );

  const IconComponent = icons[icon] as ElementType;

  assert(IconComponent && typeof IconComponent === 'function', `Icon component not found for icon: '${icon}'`);

  return (
    <Box
      aria-label={alt || undefined} // Prevents alt being passed through as an empty string
      as="span"
      className={clsx(styles.variants({ variant }), className)}
      role={alt ? 'img' : undefined} // A span has no role, so it needs one for the aria-label to be announced
      {...boxProps}
    >
      <IconComponent aria-hidden="true" />
    </Box>
  );
});

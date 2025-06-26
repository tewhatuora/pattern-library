import { ElementType, memo } from 'react';
import clsx from 'clsx';

import assert from '../../utils/assert';

import { Box, BoxProps } from '../Box/Box';
import icons, { IconType } from './icons';

import * as styles from './Icon.css';
import { Color } from '../../types';

export const IconStyles = styles;

const validIcons = Object.keys(icons);
export type IconProps = {
  /** Icon type */
  icon: IconType;
  /** Size variant */
  variant?: styles.Variant;
  /** Optional onClick handler for Icon element */
  onClick?: () => void;
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
  className?: string;
  /** Icon color */
  color?: Color;
  /** Alternative text to use for aria-label */
  alt?: string;

  /**
   * If true, the icon will be rendered without a fill color
   */
  noFill?: boolean;
} & BoxProps;

/**
 * Icon component to render
 * an icon from /lib/icons/*.svg
 * @param props
 * @constructor
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
      className={clsx(styles.variants({ variant }), className, noFill && styles.noFill)}
      {...boxProps}
    >
      <IconComponent aria-hidden="true" />
    </Box>
  );
});

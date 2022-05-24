import assert from 'assert';

import { Box, BoxProps } from '../Box/Box';
import * as styles from './Icon.css';
import icons from './icons';

export const validIcons = Object.keys(icons) as const;

type IconProps = {
  icon: keyof typeof icons;
  variant?: styles.Variant;
  onClick?: () => void;
  className?: string;
} & Pick<BoxProps, 'as'>;

/**
 * Icon component to render
 * an icon from /lib/icons/*.svg
 * @param props
 * @constructor
 */
export const Icon = ({ icon, className, variant = 'decorativeIcons', ...boxProps }: IconProps) => {
  assert(
    validIcons.includes(icon),
    `Invalid Icon component: '${icon}'. Should be one of [${validIcons.map((c) => `'${c}'`).join(', ')}]`,
  );

  const IconComponent = icons[icon];

  return (
    <Box as="span" className={`${styles.variants({ variant })} ${className}`} {...boxProps}>
      <IconComponent />
    </Box>
  );
};

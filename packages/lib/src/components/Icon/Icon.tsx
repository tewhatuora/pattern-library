import clsx from 'clsx';

import assert from 'assert';

import { Box } from '../Box/Box';
import * as styles from './Icon.css';
import icons, { IconType } from './icons';

const validIcons = Object.keys(icons);

type IconProps = {
  icon: IconType;
  variant?: styles.Variant;
  onClick?: () => void;
  className?: string;
  color?: string | undefined;
};

/**
 * Icon component to render
 * an icon from /lib/icons/*.svg
 * @param props
 * @constructor
 */
export const Icon = ({ icon, className, variant = 'decorativeIcons', ...boxProps }: IconProps) => {
  assert(
    !!icon && validIcons.includes(icon),
    `Invalid Icon component: '${icon}'. Should be one of [${validIcons.map((c) => `'${c}'`).join(', ')}]`,
  );

  const IconComponent = icons[icon];

  // TODO: fix typescript issue with <IconComponent />
  return (
    <Box as="span" className={clsx(styles.icon, styles.variants({ variant }), className)} {...boxProps}>
      <IconComponent />
    </Box>
  );
};

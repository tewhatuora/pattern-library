import { PropsWithChildren, useMemo } from 'react';
import clsx from 'clsx';

import { vars } from '../../themes/vars.css';

import { Box } from '../Box/Box';

import * as styles from './Card.css';

export const CardStyles = styles;

type Color = Exclude<keyof typeof vars.color, 'semantic'>;

export type CardProps = {
  /** Option to display the Card without a box-shadow */
  noShadow?: boolean;
  border?: Color;
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
  className?: string;
} & Pick<JSX.IntrinsicElements['div'], 'children'>;

/**
 * Card for building 2D layouts using grids or to contain content.
 * @constructor
 */
export const Card = ({ noShadow = false, border, children, className }: PropsWithChildren<CardProps>) => {
  const cardClassNames = useMemo(() => {
    return clsx(
      styles.card,
      {
        [styles.variants.noShadow]: noShadow,
      },
      className,
    );
  }, [noShadow, className]);

  return (
    <Box as="div" className={cardClassNames} style={border ? { borderColor: vars.color[border] } : undefined}>
      {children}
    </Box>
  );
};

Card.displayName = 'Card';

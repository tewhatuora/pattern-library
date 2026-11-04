import type { JSX } from 'react';
import { PropsWithChildren, useMemo } from 'react';
import { clsx } from 'clsx';

import { vars } from '../../themes/vars.css';

import { Box } from '../Box/Box';

import * as styles from './Card.css';

export const CardStyles = styles;

type Color = Exclude<keyof typeof vars.color, 'semantic'>;

export type CardProps = {
  /** Removes the box-shadow. */
  noShadow?: boolean;
  /** Colour token name from the theme, e.g. `'primary25'`, draws a border in that colour. Without it the card has no border. */
  border?: Color;
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
  className?: string;
} & Pick<JSX.IntrinsicElements['div'], 'children'>;

/**
 * Shadowed container that groups related content.
 *
 * @example
 * <Card border="primary25">
 *   <Text>Card content</Text>
 * </Card>
 */
export const Card = ({ noShadow = false, border, children, className }: PropsWithChildren<CardProps>) => {
  const cardClassNames = useMemo(() => {
    return clsx(
      styles.card,
      {
        [styles.variants.noShadow]: noShadow,
        [styles.variants.bordered]: !!border,
      },
      className,
    );
  }, [noShadow, border, className]);

  return (
    <Box as="div" className={cardClassNames} style={border ? { borderColor: vars.color[border] } : undefined}>
      {children}
    </Box>
  );
};

Card.displayName = 'Card';

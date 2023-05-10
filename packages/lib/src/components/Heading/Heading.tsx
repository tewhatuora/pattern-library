import { ReactNode, forwardRef } from 'react';

import clsx from 'clsx';

import { Box, BoxProps } from '../Box/Box';
import { HeadingLevel, HeadingWeight, useHeading } from '../../hooks/typography';

const resolveDefaultComponent = {
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
  '4': 'h4',
} as const;

export type HeadingProps = {
  /** Heading level for styling purposes */
  level: HeadingLevel;
  /** Font weight token */
  weight?: HeadingWeight;
  /** Text alignment */
  align?: BoxProps['textAlign'];
  /** Heading color token */
  color?: BoxProps['color'];
  /** Element type to render as, defaults to h1-h4 with level prop */
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'legend' | 'p';
  /** Heading text/elements */
  children?: ReactNode;
  /** id attribute for the element */
  id?: string;
  /** classname override */
  className?: string;
};

/**
 * Heading component for h1, h2, h3, h4 elements
 */
export const Heading = forwardRef<HTMLElement, HeadingProps>(
  ({ level, weight, align, as, children, id, color, className }, ref) => {
    return (
      <Box
        as={as ?? resolveDefaultComponent[level]}
        className={clsx(useHeading({ weight, level }), className)}
        color={color}
        id={id}
        ref={ref}
        tabIndex={-1} // Allows it to be focused
        textAlign={align}
      >
        {children}
      </Box>
    );
  },
);

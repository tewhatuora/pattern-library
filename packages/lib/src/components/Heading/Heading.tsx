import { ReactNode, forwardRef } from 'react';

import { Box, BoxProps } from '../Box/Box';
import { HeadingLevel, HeadingWeight, useHeading } from '../../hooks/typography';

const resolveDefaultComponent = {
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
  '4': 'h4',
} as const;

export type HeadingProps = {
  level: HeadingLevel;
  weight?: HeadingWeight;
  align?: BoxProps['textAlign'];
  color?: BoxProps['color'];
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'legend' | 'p';
  children?: ReactNode;
  id?: string;
};

/**
 * Heading component for h1, h2, h3, h4 elements
 */
export const Heading = forwardRef<HTMLElement, HeadingProps>(
  ({ level, weight, align, as, children, id, color }, ref) => {
    return (
      <Box
        as={as ?? resolveDefaultComponent[level]}
        className={useHeading({ weight, level })}
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

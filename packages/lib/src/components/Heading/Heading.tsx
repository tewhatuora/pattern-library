import { ReactNode, forwardRef } from 'react';

import { clsx } from 'clsx';

import { Box, BoxProps } from '../Box/Box';
import { HeadingLevel, HeadingWeight, useHeading } from '../../hooks/typography';

const resolveDefaultComponent = {
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
  '4': 'h4',
} as const;

export type HeadingProps = {
  /** Type scale step, `'1'` largest to `'4'` smallest (a number works too). Also picks the default element, `h1` to `h4`. */
  level: HeadingLevel | 1 | 2 | 3 | 4;
  /**
   * Font weight token.
   * @default 'regular'
   */
  weight?: HeadingWeight;
  align?: BoxProps['textAlign'];
  color?: BoxProps['color'];
  /**
   * Element to render. `level` only sets the look, so choose this to match the page's heading outline.
   * Use `legend` for a fieldset title.
   * @default `h1` to `h4`, matching `level`
   */
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'legend' | 'p';
  children?: ReactNode;
  id?: string;
  className?: string;
};

/**
 * A heading styled by `level`. Focusable programmatically (`tabIndex={-1}`), so focus can be moved to it
 * after a page change.
 *
 * @example
 * <Heading as="h1" level="2">
 *   Your appointments
 * </Heading>
 */
export const Heading = forwardRef<HTMLElement, HeadingProps>(
  ({ level: levelProp, weight, align, as, children, id, color, className }, ref) => {
    const level = String(levelProp) as HeadingLevel;

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

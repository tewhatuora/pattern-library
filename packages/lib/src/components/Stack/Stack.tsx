import { Children, ElementType, PropsWithChildren, useContext } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import assert from 'assert';

import { Box, BoxProps } from '../Box/Box';

import type { Space } from '../../css/atoms/atoms';

import * as styles from './Stack.css';
import { marginVar } from './Stack.css';
import { BreakpointContext } from '../../components/ThemeProvider/BreakpointContext';
import { vars } from '../../themes/vars.css';

const StackStyles = styles;

export const validStackComponents = ['div', 'span', 'ol', 'ul'] as const;

type StackProps = {
  /** Element type to render as */
  as?: (typeof validStackComponents)[number];
  /** Element type to render child wrapper as */
  childWrapperAs?: ElementType;
  /** A space token for spacing between children elements */
  space: Space;
  /** Order children elements horizontally */
  horizontal?: boolean;
  /** Additional CSS className. (Use `__anatomic__` for an example) */
  className?: string;
} & BoxProps;

/**
 * A component to vertically stack its
 * children components, separated by a
 * space provided as a prop
 */
const Stack = ({
  as = 'div',
  childWrapperAs = 'div',
  children,
  space = 'medium',
  horizontal = false,
  className,
  ...boxProps
}: PropsWithChildren<StackProps>) => {
  assert(
    validStackComponents.includes(as),
    `Invalid Stack component: '${as}'. Should be one of [${validStackComponents.map((c) => `'${c}'`).join(', ')}]`,
  );

  const direction = horizontal ? 'horizontal' : 'vertical';
  const breakpoint = useContext(BreakpointContext) === 'mobile' ? 'mobile' : 'tablet';

  return (
    <Box
      as={as}
      className={[styles.variants({ direction }), className]}
      style={assignInlineVars({
        // Set marginVar in TypeScript to avoid writing all the possible cases in CSS
        [marginVar]: vars.space[space][breakpoint],
      })}
      {...boxProps}
    >
      {Children.map(children, (child) => (
        // Wrapped the children in a <Box> instead of passing the className directly because sometimes children
        // don't accept classNames. Also, I don't want to override their margin.
        <Box as={childWrapperAs} className={styles.child[direction]}>
          {child}
        </Box>
      ))}
    </Box>
  );
};

export { Stack, StackStyles };
export type { StackProps };

import { Children, ElementType, PropsWithChildren, useContext } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { Box, BoxProps } from '../Box/Box';

import type { Space } from '../../css/atoms/atoms';

import * as styles from './Stack.css';
import { marginVar } from './Stack.css';
import { BreakpointContext } from '../../components/ThemeProvider/BreakpointContext';
import { vars } from '../../themes/vars.css';

const StackStyles = styles;

export const validStackComponents = ['div', 'span', 'ol', 'ul'] as const;

type StackProps = {
  /**
   * Element to render. Use `ol` or `ul` with `childWrapperAs="li"` for a list.
   * @default 'div'
   */
  as?: (typeof validStackComponents)[number];
  /**
   * Element each child is wrapped in.
   * @default 'div'
   */
  childWrapperAs?: ElementType;
  /**
   * Space token for the gap between children, e.g. `small` or `large`. The size resolves per breakpoint,
   * mobile or tablet and up.
   * @default 'medium'
   */
  space?: Space;
  /** Lay children out in a row instead of a column. */
  horizontal?: boolean;
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
  className?: string;
} & BoxProps;

/**
 * Spaces its children evenly, in a column or a row. Each child is wrapped in an element, and falsy children
 * (`null`, `false`, `0`, `''`) are skipped without leaving a gap. `alignItems` and `justifyContent` also
 * apply to each wrapper.
 *
 * @example
 * <Stack space="medium">
 *   <Heading level="2">Appointments</Heading>
 *   <Text as="p">You have no upcoming appointments.</Text>
 * </Stack>
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
  if (!validStackComponents.includes(as)) {
    throw new Error(
      `Invalid Stack component: '${as}'. Should be one of [${validStackComponents.map((c) => `'${c}'`).join(', ')}]`,
    );
  }

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
      {Children.map(children, (child) =>
        child ? (
          // Wrapped the children in a <Box> instead of passing the className directly because sometimes children
          // don't accept classNames. Also, I don't want to override their margin.
          <Box
            alignItems={boxProps.alignItems}
            as={childWrapperAs}
            className={styles.child[direction]}
            display="flex"
            flexDirection={direction === 'vertical' ? 'column' : 'row'}
            justifyContent={boxProps.justifyContent}
          >
            {child}
          </Box>
        ) : null,
      )}
    </Box>
  );
};

export { Stack, StackStyles };
export type { StackProps };

import { PropsWithChildren } from 'react';

import assert from 'assert';

import { Box, BoxProps } from '../Box/Box';

import type { Space } from '../../css/atoms/atoms';

import * as styles from './Stack.css';

export const StackStyles = styles;

export const validStackComponents = ['div', 'span', 'ol', 'ul'] as const;

export type StackProps = {
  /** Element type to render as */
  as?: typeof validStackComponents[number];
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
 * `space provided as a prop
 */
export const Stack = ({
  as = 'div',
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

  return (
    <Box
      as={as}
      className={[
        styles.variants({
          space,
          direction: horizontal ? 'horizontal' : 'vertical',
        }),
        className,
      ]}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

import { PropsWithChildren } from 'react';

import assert from 'assert';

import { Box, BoxProps } from '../Box/Box';

import type { Space } from '../../css/atoms/atoms';

import * as styles from './Stack.css';

export const StackStyles = styles;

export const validStackComponents = ['div', 'span', 'ol', 'ul'] as const;

export type StackProps = {
  as?: typeof validStackComponents[number];
  space: Space;
  horizontal?: boolean;
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
  className,
  space = 'medium',
  horizontal = false,
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

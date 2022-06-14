import assert from 'assert';

import { Box } from '../Box/Box';

import type { Space } from '../../css/atoms/atoms';

import * as styles from './Stack.css';

export const StackStyles = styles;

export const validStackComponents = ['div', 'span', 'ol', 'ul'] as const;

export interface StackProps {
  as?: typeof validStackComponents[number];
  children: JSX.Element[];
  space: Space;
  horizontal?: boolean;
}

/**
 * A component to vertically stack its
 * children components, separated by a
 * `space provided as a prop
 */
export const Stack = ({ as = 'div', children, space = 'medium', horizontal = false }: StackProps) => {
  assert(
    validStackComponents.includes(as),
    `Invalid Stack component: '${as}'. Should be one of [${validStackComponents.map((c) => `'${c}'`).join(', ')}]`,
  );

  return (
    <Box
      as={as}
      className={styles.variants({
        space,
        direction: horizontal ? 'horizontal' : 'vertical',
      })}
    >
      {children}
    </Box>
  );
};

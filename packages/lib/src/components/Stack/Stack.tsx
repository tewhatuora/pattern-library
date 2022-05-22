import { Children } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import assert from 'assert';
import { Box } from '../Box/Box';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import { Align, alignToFlexAlign } from '../../utils/align';
import { negativeMarginTop } from '../../css/negativeMargin/negativeMargin';
import { OptionalResponsiveValue, mapResponsiveValue } from '../../css/atoms/sprinkles.css';
import { ReactNodeNoStrings } from '../../types';

const alignToDisplay = {
  left: 'block',
  center: 'flex',
  right: 'flex',
} as const;

export const validStackComponents = ['div', 'span', 'ol', 'ul'] as const;

interface UseStackItemProps {
  align: OptionalResponsiveValue<Align>;
  space: ResponsiveSpace;
  as: typeof validStackComponents[number];
}

const useStackItem = ({ align, space, as }: UseStackItemProps) =>
  ({
    paddingTop: space,
    display: as === 'span' ? 'block' : undefined,
    // If we're aligned left across all screen sizes,
    // there's actually no alignment work to do.
    ...(align === 'left'
      ? null
      : {
          display: mapResponsiveValue(align, (value) => alignToDisplay[value]),
          flexDirection: 'column' as const,
          alignItems: alignToFlexAlign(align),
        }),
  } as const);

export interface StackProps {
  as?: typeof validStackComponents[number];
  children: ReactNodeNoStrings;
  space: ResponsiveSpace;
  align?: OptionalResponsiveValue<Align>;
}

/**
 * A component to vertically stack it's
 * children components, separated by a
 * `space provided as a prop
 */
export const Stack = ({ as = 'div', children, space = 'default', align = 'left' }: StackProps) => {
  assert(
    validStackComponents.includes(as),
    `Invalid Stack component: '${as}'. Should be one of [${validStackComponents.map((c) => `'${c}'`).join(', ')}]`,
  );

  const stackItemProps = useStackItem({ space, align, as });
  const stackItems = flattenChildren(children);
  const isList = as === 'ol' || as === 'ul';
  const stackItemComponent = isList ? 'li' : as;

  return (
    <Box as={as} className={negativeMarginTop(space)} display={as === 'span' ? 'block' : undefined}>
      {Children.map(stackItems, (child) => {
        return (
          <Box as={stackItemComponent} {...stackItemProps}>
            {child}
          </Box>
        );
      })}
    </Box>
  );
};

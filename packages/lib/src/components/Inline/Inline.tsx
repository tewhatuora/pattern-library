import { Children } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import assert from 'assert';

import { Box } from '../Box/Box';
import { ResponsiveSpace } from '../../css/atoms/atoms';
import { negativeMarginLeft, negativeMarginTop } from '../../css/negativeMargin/negativeMargin';
import { ReactNodeNoStrings } from '../../types';
import { CollapsibleAlignmentProps, resolveCollapsibleAlignmentProps } from '../../utils/collapsibleAlignmentProps';

export const validInlineComponents = ['div', 'ol', 'ul'] as const;

export interface InlineProps extends CollapsibleAlignmentProps {
  space: ResponsiveSpace;
  as?: typeof validInlineComponents[number];
  children: ReactNodeNoStrings;
}

/**
 * An inline component
 */
export const Inline = ({ space = 0, align, alignY, collapseBelow, reverse, as = 'div', children }: InlineProps) => {
  assert(
    validInlineComponents.includes(as),
    `Invalid Inline component: '${as}'. Should be one of [${validInlineComponents.map((c) => `'${c}'`).join(', ')}]`,
  );

  const isList = as === 'ol' || as === 'ul';
  const inlineItemComponent = isList ? 'li' : 'div';

  const { collapsibleAlignmentProps, collapsibleAlignmentChildProps, orderChildren } = resolveCollapsibleAlignmentProps(
    {
      align,
      alignY,
      collapseBelow,
      reverse,
    },
  );

  return (
    <Box className={negativeMarginTop(space)}>
      <Box as={as} className={negativeMarginLeft(space)} flexWrap="wrap" {...collapsibleAlignmentProps}>
        {Children.map(orderChildren(flattenChildren(children)), (child) =>
          child !== null && child !== undefined ? (
            <Box
              as={inlineItemComponent}
              marginLeft={space}
              marginTop={space}
              minWidth={0}
              {...collapsibleAlignmentChildProps}
            >
              {child}
            </Box>
          ) : null,
        )}
      </Box>
    </Box>
  );
};

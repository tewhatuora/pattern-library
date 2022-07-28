import { Children, PropsWithChildren, ReactChild, ReactNode, cloneElement, isValidElement } from 'react';

import assert from 'assert';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

type AllowedChildrenProps = {
  types: ReactNode[];
  errorMessage: string;
  propsForChild?: (child?: ReactChild) => any;
};

/**
 * Only render allowed children of `type`
 * @param {Array<ReactNode>} types List of allowed children types
 * @param {string} errorMessage Error message when children are not allowed
 * @param {Array<ReactNode>} children Children
 * @param {Function} propsForChild Function that returns props for each child
 * @constructor
 */
export const AllowedChildren = ({
  types,
  errorMessage,
  propsForChild,
  children,
}: PropsWithChildren<AllowedChildrenProps>) => {
  const allowedChildren = children
    ? Children.map(children, (child: ReactNode) => {
        assert(
          isValidElement(child) && types.some((allowedType) => child.type === allowedType),
          `${errorMessage}. ${child?.type} given`,
        );

        const props = propsForChild ? propsForChild?.(child) : null;

        return cloneElement(child, props);
      })
    : null;

  return <ErrorBoundary>{allowedChildren}</ErrorBoundary>;
};

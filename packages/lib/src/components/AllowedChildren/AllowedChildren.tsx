import { Children, PropsWithChildren, ReactNode, cloneElement, isValidElement } from 'react';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import assert from 'assert';

type AllowedChildrenProps = {
  types: ReactNode[];
  errorMessage: string;
};

/**
 * Only render allowed children of `type`
 * @param {Array<ReactNode>} types List of allowed children types
 * @param {string} errorMessage Error message when children are not allowed
 * @param {Array<ReactNode>} children Children
 * @constructor
 */
export const AllowedChildren = ({ types, errorMessage, children }: PropsWithChildren<AllowedChildrenProps>) => {
  const allowedChildren = Children.map(children, (child: ReactNode) => {
    assert(isValidElement(child) && types.some((allowedType) => child.type === allowedType), errorMessage);
    return cloneElement(child);
  });
  return <ErrorBoundary>{allowedChildren}</ErrorBoundary>;
};

import { Children, PropsWithChildren, ReactElement, cloneElement, isValidElement } from 'react';

import assert from '../../utils/assert';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const REACT_LAZY_TYPE = Symbol.for('react.lazy');

type AllowedChildrenProps = {
  types: React.ElementType[];
  errorMessage: string;
  propsForChild?: (child?: ReactElement<any>) => any;
};

/**
 * Only render allowed children of `type`
 * @param {Array<ReactNode>} types List of allowed children types
 * @param {string} errorMessage Error message when children are not allowed
 * @param {Function} propsForChild Function that returns props for each child
 * @param {Array<ReactNode>} children Children
 * @constructor
 */
export const useAllowedChildren = ({
  types,
  errorMessage,
  propsForChild,
  children,
}: PropsWithChildren<AllowedChildrenProps>) => {
  if (!children) return null;

  return Children.map(children, (child) => {
    // Conditional children such as `{show && <Item />}` arrive as null when they aren't rendered
    if (child === null) return null;

    const childElement = child as ReactElement;

    // Children created in a React Server Component arrive as lazy references to the client component,
    // which can't be identified until React resolves them, so they're trusted rather than rejected
    const isLazy = (childElement?.type as { $$typeof?: symbol } | undefined)?.$$typeof === REACT_LAZY_TYPE;

    assert(
      isValidElement(child) && (isLazy || types.some((allowedType) => child.type === allowedType)),
      `${errorMessage}. ${childElement?.type} given`,
    );

    const props = propsForChild ? propsForChild?.(child) : null;

    return cloneElement(child, props);
  });
};

/**
 * Only render allowed children of `type` as component
 * @param {Array<ReactNode>} types List of allowed children types
 * @param {string} errorMessage Error message when children are not allowed
 * @param {Function} propsForChild Function that returns props for each child
 * @param {Array<ReactNode>} children Children
 * @constructor
 */
export const AllowedChildren = ({
  types,
  errorMessage,
  propsForChild,
  children,
}: PropsWithChildren<AllowedChildrenProps>) => {
  const allowedChildren = useAllowedChildren({
    types,
    errorMessage,
    propsForChild,
    children,
  });

  return <ErrorBoundary>{allowedChildren}</ErrorBoundary>;
};

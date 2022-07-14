import clsx from 'clsx';
import { Children, PropsWithChildren, cloneElement, createElement, isValidElement } from 'react';

import assert from 'assert';

import { Item } from './Item';
import { AllowedChildren } from '../AllowedChildren/AllowedChildren';

import * as styles from './List.css';

export type ListRootProps = {
  type: 'ol' | 'ul';
  noMarkers?: boolean;
  dividers?: boolean;
  className?: string;
  variant?: 'light' | 'dark';
};

export const Root = ({
  type,
  noMarkers = false,
  dividers = false,
  variant,
  className,
  children,
}: PropsWithChildren<ListRootProps>) => {
  const newChildren = Children.map(children, (child) => {
    assert(
      isValidElement(child),
      'A child of `List.Root` is an invalid React element. Check that the children are all valid.',
    );

    return cloneElement(child, { className: clsx(child.props.className, { [styles.dividers]: dividers }) });
  });

  const listEl = createElement(
    type,
    {
      className: clsx(styles.list, { [styles.noMarkers]: noMarkers }, className),
      'data-dividers': dividers, // Required to handle vertical padding of nested lists
      'data-variant': variant,
    },
    <AllowedChildren
      errorMessage="Only `List.Item` and `List.Root` components are allowed as children of `List.Root`."
      types={[Item, Root]}
    >
      {newChildren}
    </AllowedChildren>,
  );

  return listEl;
};

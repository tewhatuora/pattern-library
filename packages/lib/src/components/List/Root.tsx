import clsx from 'clsx';
import { Children, PropsWithChildren, cloneElement, createElement, isValidElement } from 'react';

import assert from 'assert';

import { Item } from './Item';
import { AllowedChildren } from '../AllowedChildren/AllowedChildren';

import * as styles from './List.css';

export const ListStyles = styles;

export type ListRootProps = PropsWithChildren<{
  type: 'ol' | 'ul';
  bulletStyle: 'none' | 'bullet' | 'number' | 'individualIcons';
  dividers?: boolean;
}>;

export const Root = ({ type, bulletStyle = 'bullet', dividers = false, children }: ListRootProps) => {
  const newChildren = Children.map(children, (child) => {
    assert(isValidElement(child), 'A child of `List.Root` is an invalid React element.');

    return cloneElement(child, { className: clsx(child.props.className, { [styles.dividers]: dividers }) });
  });

  const listEl = createElement(
    type,
    {
      className: clsx(styles.list, styles.listStyle[bulletStyle]),
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

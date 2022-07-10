import clsx from 'clsx';
import { Children, PropsWithChildren, cloneElement, createElement, isValidElement } from 'react';

import assert from 'assert';

import * as styles from './List.css';
import { Item } from './Item';

export type ListRootProps = PropsWithChildren<{
  type: 'ol' | 'ul';
  bulletStyle: 'none' | 'bullet' | 'number' | 'individualIcons';
  dividers?: boolean;
}>;

export const Root = ({ type, bulletStyle = 'bullet', dividers = false, children }: ListRootProps) => {
  const newChildren = Children.map(children, (child) => {
    assert(
      isValidElement(child) && child?.type === Item,
      'Only `RadioButton` components are allowed as children of `List`.',
    );

    return cloneElement(child, { className: clsx(child.props.className, { [styles.dividers]: dividers }) });
  });

  const listEl = createElement(type, { className: clsx(styles.listStyle[bulletStyle], styles.list) }, newChildren);
  return listEl;
};

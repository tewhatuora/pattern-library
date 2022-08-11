import clsx from 'clsx';
import { Children, PropsWithChildren, cloneElement, createElement, isValidElement } from 'react';

import assert from 'assert';

import { Item } from './Item';
import { AllowedChildren } from '../AllowedChildren/AllowedChildren';

import { ContrastVariant } from '../../types';

import * as styles from './List.css';

export type ListRootProps = {
  /** List element type */
  type: 'ol' | 'ul';
  /** Option to have no list item markers */
  noMarkers?: boolean;
  /** Option to show dividers between list items */
  dividers?: boolean;
  /** Additional CSS className. (Use `__anatomic__` for an example) */
  className?: string;
  /** Contrast variant for dark/light UI */
  variant?: ContrastVariant;
};

export const Root = ({
  type,
  noMarkers = false,
  dividers = false,
  variant = 'light',
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
      'data-dividers': dividers,
      'data-variant': variant, // Required to handle vertical padding of nested lists
      role: 'list', // Fixes <ul> in Safari when list-style is set to 'none'. See https://developer.mozilla.org/en-US/docs/Web/CSS/list-style#accessibility_concerns
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

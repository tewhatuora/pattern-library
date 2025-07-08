import clsx from 'clsx';
import { Children, PropsWithChildren, ReactNode, cloneElement, createElement, isValidElement } from 'react';

import assert from 'assert';

import { ContrastVariant } from '../../types';

import * as styles from './List.css';

export type ListRootProps = {
  /** List element type */
  type: 'ol' | 'ul';
  /** Option to have no list item markers */
  noMarkers?: boolean;
  /** Option to show dividers between list items */
  dividers?: boolean;

  /** Option to disable divider on first item */
  dividersNoTop?: boolean;
  /** Option to disable divider on last item */
  dividersNoBottom?: boolean;
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
  className?: string;
  /** Contrast variant for dark/light UI */
  variant?: ContrastVariant;
};

export const Root = ({
  type,
  noMarkers = false,
  dividers = false,
  dividersNoTop = false,
  dividersNoBottom = false,
  variant = 'light',
  className,
  children,
}: PropsWithChildren<ListRootProps>) => {
  const newChildren = Children.map(children, (child: ReactNode) => {
    assert(
      isValidElement(child),
      'A child of `List.Root` is an invalid React element. Check that the children are all valid.',
    );

    const props = {
      className: clsx(
        child.props.className,
        { [styles.dividers]: dividers },
        { [styles.dividersNoTop]: dividersNoTop },
        { [styles.dividersNoBottom]: dividersNoBottom },
      ),
    };

    return cloneElement(child, props);
  });

  const listEl = createElement(
    type,
    {
      className: clsx(
        styles.list[type],
        { [styles.noMarkers]: noMarkers },

        className,
      ),
      'data-dividers': dividers,
      'data-variant': variant, // Required to handle vertical padding of nested lists
      role: 'list', // Fixes <ul> in Safari when list-style is set to 'none'. See https://developer.mozilla.org/en-US/docs/Web/CSS/list-style#accessibility_concerns
    },
    newChildren,
  );

  return listEl;
};

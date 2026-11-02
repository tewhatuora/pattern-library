import { clsx } from 'clsx';
import { Children, PropsWithChildren, ReactNode, cloneElement, createElement, isValidElement } from 'react';

import assert from '../../utils/assert';

import * as styles from './List.css';

export type ListRootProps = {
  /** `ol` numbers the items, `ul` bullets them. */
  type: 'ol' | 'ul';
  /** Hide the bullets or numbers, e.g. for lists of links or icons. */
  noMarkers?: boolean;
  /** Draw a line between items. */
  dividers?: boolean;
  /** Remove the divider above the first item. Needs `dividers`. */
  dividersNoTop?: boolean;
  /** Remove the divider below the last item. Needs `dividers`. */
  dividersNoBottom?: boolean;
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
  className?: string;
};

/**
 * A styled list. Every child must be an element, such as `List.Item`, `List.Link` or a nested `List.Root`;
 * plain text children throw.
 *
 * @example
 * <List.Root dividers type="ul">
 *   <List.Item heading="Pharmacy" icon="medicine">
 *     Collect your prescription
 *   </List.Item>
 *   <List.Link href="/results">View results</List.Link>
 * </List.Root>
 */
export const Root = ({
  type,
  noMarkers = false,
  dividers = false,
  dividersNoTop = false,
  dividersNoBottom = false,
  className,
  children,
}: PropsWithChildren<ListRootProps>) => {
  const newChildren = Children.map(children, (child: ReactNode) => {
    assert(
      isValidElement<{ className?: string }>(child),
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
      'data-variant': 'light', // Required to handle vertical padding of nested lists
      role: 'list', // Fixes <ul> in Safari when list-style is set to 'none'. See https://developer.mozilla.org/en-US/docs/Web/CSS/list-style#accessibility_concerns
    },
    newChildren,
  );

  return listEl;
};

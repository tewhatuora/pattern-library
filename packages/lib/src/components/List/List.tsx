/**
 * List is mainly a wrapper that renders a list of items.
 * <li> items will be passed as children
 * Dev can choose what the list type will be
 *   Will this be by using an <ul> vs <ol>? What about the ones without bullets or numbers?
 */

import clsx from 'clsx';
import { PropsWithChildren, createElement } from 'react';

import { DividerStyles } from '../index';

import * as styles from './List.css';

export type ListProps = PropsWithChildren<{
  type: 'ol' | 'ul';
  bulletStyle: 'none' | 'bullet' | 'number' | 'individualIcons';
  dividers?: boolean;
}>;

export const List = ({ type, bulletStyle = 'bullet', dividers = false, children }: ListProps) => {
  const listEl = createElement(
    type,
    { className: clsx(styles.listStyle[bulletStyle], { [DividerStyles.variants({ variant: 'dark' })]: dividers }) },
    children,
  );

  return listEl;
};

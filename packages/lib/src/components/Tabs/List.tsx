import * as RadixTabs from '@radix-ui/react-tabs';

import { Children, RefAttributes, cloneElement, isValidElement } from 'react';

import clsx from 'clsx';

import assert from 'assert';

import { ChildrenOfType } from '../../types/index';

import * as styles from './Tabs.css';
import { TabsTriggerProps } from './Trigger';

export type TabsListProps = {
  className?: string;
  children: ChildrenOfType<'Trigger', TabsTriggerProps>;
} & RadixTabs.TabsListProps &
  RefAttributes<HTMLDivElement>;

export const List = ({ className, children, ...rest }: TabsListProps) => {
  return (
    <RadixTabs.List className={clsx(styles.list, className)} {...rest}>
      {Children.map(children, (child) => {
        assert(isValidElement(child) && child?.type.name === 'Trigger');
        return cloneElement(child);
      })}
    </RadixTabs.List>
  );
};

import * as RadixTabs from '@radix-ui/react-tabs';

import { Children, cloneElement, isValidElement } from 'react';

import assert from 'assert';

import { ChildrenOfType } from '../../types/index';

import { TabsContentProps } from './Content';
import { TabsListProps } from './List';

export type TabsRootProps = {
  onValueChange?: (value: string) => void;
  className?: string;
  children: ChildrenOfType<'List', TabsListProps> & ChildrenOfType<'Content', TabsContentProps>;
} & Omit<RadixTabs.TabsProps, 'orientation' | 'dir' | 'asChild'> &
  React.RefAttributes<HTMLDivElement>;

export const Root = ({ className, children, ...rest }: TabsRootProps) => {
  return (
    <RadixTabs.Root className={className} {...rest}>
      {Children.map(children, (child) => {
        assert(
          isValidElement(child) && ['List', 'Content'].includes(child?.type.name),
          'Only Tabs.List and Tabs.Content components are allowed as children of Tabs.Root.',
        );
        return cloneElement(child);
      })}
    </RadixTabs.Root>
  );
};

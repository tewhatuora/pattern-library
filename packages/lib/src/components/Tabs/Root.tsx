import { RefAttributes } from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';

import { ChildrenOfType } from '../../types/index';

import { Content, TabsContentProps } from './Content';
import { List, TabsListProps } from './List';
import { AllowedChildren } from '../AllowedChildren/AllowedChildren';

export type TabsRootProps = {
  onValueChange?: (value: string) => void;
  /** Optional CSS className */
  className?: string;
  /** Tabs.List | Tabs.Content components */
  children: ChildrenOfType<'List', TabsListProps> & ChildrenOfType<'Content', TabsContentProps>;
} & Omit<RadixTabs.TabsProps, 'orientation' | 'dir' | 'asChild'> &
  RefAttributes<HTMLDivElement>;

/**
 * Tabs
 *
 *  For a horizontal selection of multiple content panels.
 *
 * Built on the Radix Tabs component.
 *
 * @param props
 * @returns
 */
export const Root = ({ className, children, ...rest }: TabsRootProps) => {
  return (
    <RadixTabs.Root className={className} {...rest}>
      <AllowedChildren
        errorMessage="Only Tabs.List and Tabs.Content components are allowed as children of Tabs.Root."
        types={[List, Content]}
      >
        {children}
      </AllowedChildren>
    </RadixTabs.Root>
  );
};

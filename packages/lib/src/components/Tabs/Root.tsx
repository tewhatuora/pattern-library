import { RefAttributes } from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';

import { ChildrenOfType } from '../../types/index';
import { Stack } from '../Stack/Stack';
import { Content, TabsContentProps } from './Content';
import { List, TabsListProps } from './List';

import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Space } from '../../css/atoms/atoms';

export type TabsRootProps = {
  onValueChange?: (value: string) => void;
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
  className?: string;
  /** A space token for spacing between children elements */
  space: Space;
  /** When automatic, tabs are activated when receiving focus. When manual, tabs are activated when clicked. */
  activationMode: Pick<RadixTabs.TabsProps, 'activationMode'>;
  /** Only Tabs.List and Tabs.Content components are allowed as children of Tabs.Root. */
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
export const Root = ({ className, space, children, ...rest }: TabsRootProps) => {
  return (
    <RadixTabs.Root className={className} {...rest}>
      <Stack space={space}>
        <AllowedChildren
          errorMessage="Only Tabs.List and Tabs.Content components are allowed as children of Tabs.Root."
          types={[List, Content]}
        >
          {children}
        </AllowedChildren>
      </Stack>
    </RadixTabs.Root>
  );
};

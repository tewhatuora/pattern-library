import { RefAttributes } from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';

import { ChildrenOfType } from '../../types/index';
import { Stack } from '../Stack/Stack';
import { Content, TabsContentProps } from './Content';
import { List, TabsListProps } from './List';

import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Space } from '../../css/atoms/atoms';

export type TabsRootProps = {
  /** Called with the `value` of the tab the user switches to. */
  onValueChange?: (value: string) => void;
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
  className?: string;
  /** Space token for the gap between the tab list and the content. */
  space: Space;
  /**
   * `automatic` shows a tab as soon as it gets focus, so arrow keys switch tabs. `manual` waits for a click or
   * Enter.
   * @default 'automatic'
   */
  activationMode?: RadixTabs.TabsProps['activationMode'];
  /** Only Tabs.List and Tabs.Content components are allowed as children of Tabs.Root. */
  children: ChildrenOfType<'List', TabsListProps> & ChildrenOfType<'Content', TabsContentProps>;
} & Omit<RadixTabs.TabsProps, 'orientation' | 'dir' | 'asChild'> &
  RefAttributes<HTMLDivElement>;

/**
 * Switches between content panels from a row of tabs. Built on Radix Tabs, so the active tab is
 * uncontrolled with `defaultValue`, or controlled with `value` and `onValueChange`. Each `Tabs.Trigger` and
 * `Tabs.Content` pair shares a `value`.
 *
 * @example
 * <Tabs.Root defaultValue="details" space="medium">
 *   <Tabs.List aria-label="Appointment">
 *     <Tabs.Trigger value="details">Details</Tabs.Trigger>
 *     <Tabs.Trigger value="history">History</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="details">Details content</Tabs.Content>
 *   <Tabs.Content value="history">History content</Tabs.Content>
 * </Tabs.Root>
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

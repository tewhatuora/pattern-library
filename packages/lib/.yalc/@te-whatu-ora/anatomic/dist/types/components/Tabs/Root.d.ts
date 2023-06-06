import { RefAttributes } from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import { ChildrenOfType } from '../../types/index';
import { TabsContentProps } from './Content';
import { TabsListProps } from './List';
import { Space } from '../../css/atoms/atoms';
export declare type TabsRootProps = {
    onValueChange?: (value: string) => void;
    /** Additional CSS className. (Use `__anatomic__` for an example) */
    className?: string;
    /** A space token for spacing between children elements */
    space: Space;
    /** When automatic, tabs are activated when receiving focus. When manual, tabs are activated when clicked. */
    activationMode: Pick<RadixTabs.TabsProps, 'activationMode'>;
    /** Only Tabs.List and Tabs.Content components are allowed as children of Tabs.Root. */
    children: ChildrenOfType<'List', TabsListProps> & ChildrenOfType<'Content', TabsContentProps>;
} & Omit<RadixTabs.TabsProps, 'orientation' | 'dir' | 'asChild'> & RefAttributes<HTMLDivElement>;
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
export declare const Root: ({ className, space, children, ...rest }: TabsRootProps) => JSX.Element;

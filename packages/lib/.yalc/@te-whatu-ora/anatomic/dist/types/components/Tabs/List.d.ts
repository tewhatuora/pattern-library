import * as RadixTabs from '@radix-ui/react-tabs';
import { RefAttributes } from 'react';
import { ChildrenOfType } from '../../types/index';
import { TabsTriggerProps } from './Trigger';
export declare type TabsListProps = {
    /** Additional CSS className. (Use `__anatomic__` for an example) */
    className?: string;
    /** Only `Tabs.Trigger` components are allowed as children of `Tabs.List` */
    children: ChildrenOfType<'Trigger', TabsTriggerProps>;
} & RadixTabs.TabsListProps & RefAttributes<HTMLDivElement>;
export declare const List: ({ className, children, ...rest }: TabsListProps) => JSX.Element;

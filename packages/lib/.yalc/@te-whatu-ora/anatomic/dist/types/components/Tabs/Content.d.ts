import * as RadixTabs from '@radix-ui/react-tabs';
import { PropsWithChildren, RefAttributes } from 'react';
export declare type TabsContentProps = PropsWithChildren<{
    /** Additional CSS className. (Use `__anatomic__` for an example) */
    className?: string;
}> & RadixTabs.TabsContentProps & RefAttributes<HTMLDivElement>;
export declare const Content: ({ className, children, value, ...rest }: TabsContentProps) => JSX.Element;

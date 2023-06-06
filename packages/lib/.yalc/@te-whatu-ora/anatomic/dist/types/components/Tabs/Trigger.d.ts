import * as RadixTabs from '@radix-ui/react-tabs';
import { RefAttributes } from 'react';
import { IconType } from '../Icon/icons';
export declare type TabsTriggerProps = {
    /** Trigger label/content */
    children: string;
    /** Additional CSS className. (Use `__anatomic__` for an example) */
    className?: string;
    /** Optional icon to display on the Trigger */
    icon?: IconType;
    /** Icon position relative to the Trigger label */
    iconPosition?: 'left' | 'right';
} & RadixTabs.TabsTriggerProps & RefAttributes<HTMLButtonElement>;
export declare const Trigger: ({ children, value, className, icon, iconPosition, ...rest }: TabsTriggerProps) => JSX.Element;

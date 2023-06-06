import { HTMLAttributes } from 'react';
import { IconType } from '../Icon/icons';
export declare type ListItemProps = {
    /** Optional icon to display in the List Item */
    icon?: IconType;
    /** Optional heading text to display */
    heading?: string;
    /** Required href */
    href: string;
} & HTMLAttributes<HTMLLIElement>;
export declare const Link: import("react").ForwardRefExoticComponent<{
    /** Optional icon to display in the List Item */
    icon?: IconType | undefined;
    /** Optional heading text to display */
    heading?: string | undefined;
    /** Required href */
    href: string;
} & HTMLAttributes<HTMLLIElement> & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLAnchorElement>>;

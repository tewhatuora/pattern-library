import { HTMLAttributes, PropsWithChildren } from 'react';
import { IconType } from '../Icon/icons';
export declare type ListItemProps = {
    /** Optional icon to display in the List Item */
    icon?: IconType;
    /** Icon position relative to the List Item text */
    iconPosition?: 'left' | 'right';
    /** Optional heading text to display */
    heading?: string;
} & HTMLAttributes<HTMLLIElement>;
export declare const Item: ({ icon, iconPosition, heading, children, ...rest }: PropsWithChildren<ListItemProps>) => JSX.Element;

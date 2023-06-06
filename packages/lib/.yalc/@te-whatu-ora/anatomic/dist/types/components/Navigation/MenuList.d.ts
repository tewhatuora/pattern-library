import { PropsWithChildren } from 'react';
import * as styles from './Menu.css';
export declare const MenuListStyles: typeof styles;
export declare type MenuListProps = {
    /** Heading for menu list **/
    heading: string;
};
/**
 * Navigation menu list
 * @constructor
 */
export declare const MenuList: {
    ({ heading, children }: PropsWithChildren<MenuListProps>): JSX.Element;
    displayName: string;
};

import { PropsWithChildren, RefObject } from 'react';
import { UtilityNavItemProps } from './Utility';
import { ContrastVariant } from '../../types';
import * as styles from './Navigation.css';
export declare const NavigationStyles: typeof styles;
export declare const NavigationContext: import("react").Context<{
    element: RefObject<HTMLElement> | null;
}>;
export declare type NavigationProps = {
    /** Contrast variant for dark/light UI */
    variant?: ContrastVariant;
    /** Open state for mobile navigation */
    open: boolean;
    /** Show InputSearch with mobile navigation */
    withSearch?: boolean;
    /** Search form action */
    searchFormAction: string;
    /** Search form method */
    searchFormMethod: 'POST' | 'GET';
    /** Array of Utility navigation items, with href, icon, label, and an optional custom link component e.g. react-router-dom Link */
    utilityNavItems?: UtilityNavItemProps[];
};
/**
 * Fixes on scroll at desktop.
 * Breaks to mobile when menu items can no longer fit. This will be content specific.
 * When Menu breaks to mobile, so does Navigation and Fly out
 * @constructor
 */
export declare const Root: {
    ({ variant, open, withSearch, searchFormAction, searchFormMethod, children, utilityNavItems, }: PropsWithChildren<NavigationProps>): JSX.Element;
    displayName: string;
};

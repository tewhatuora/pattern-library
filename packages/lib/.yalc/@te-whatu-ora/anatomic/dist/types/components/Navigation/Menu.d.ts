import { PropsWithChildren } from 'react';
import { ContrastVariant } from '../../types';
import * as styles from './Menu.css';
export declare const NavigationMenuStyles: typeof styles;
export declare type NavigationMenuProps = {
    /** Show sub menu as mini menu (mega menu is default) */
    mini?: boolean;
    /** Parent navigation item's label */
    label?: string;
    /** Start transition animation  */
    startTransitionOut?: boolean;
    /** Contrast variant for dark/light UI */
    variant?: ContrastVariant;
    /** Function to call when starting to close the menu */
    onStartClose?: () => void;
    /** Function to call when the menu is closed  */
    onClose?: () => void;
};
/**
 * Mega or mini navigation sub menu
 * @constructor
 */
export declare const Menu: {
    ({ mini, label, startTransitionOut, variant, onClose, onStartClose, children, }: PropsWithChildren<NavigationMenuProps>): JSX.Element;
    displayName: string;
};

import { FC, PropsWithChildren } from 'react';
import { ContrastVariant } from '../../types';
import * as styles from './Item.css';
export declare const NavigationItemStyles: typeof styles;
export declare type NavigationItemProps = {
    /** URL/path to link to */
    href: string;
    /** Selected/current/active state */
    selected?: boolean;
    /** Navigation item label */
    label: string;
    /** If there is a subnavigation  */
    subNav?: boolean;
    /** Contrast variant for dark/light UI */
    variant?: ContrastVariant;
    /** A React component to render, e. react-router-dom `<Link />` */
    component?: FC<any>;
};
/**
 * Navigation item, either a <button> or <a> depending
 * on whether the component has children or not
 * @constructor
 */
export declare const Item: {
    ({ href, label, selected, subNav, variant, component, children, }: PropsWithChildren<NavigationItemProps>): JSX.Element;
    displayName: string;
};

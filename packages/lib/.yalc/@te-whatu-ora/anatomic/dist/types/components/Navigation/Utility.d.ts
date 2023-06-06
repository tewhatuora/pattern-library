import { FC } from 'react';
import { IconType } from '../Icon/icons';
import { ContrastVariant } from '../../types';
export declare type UtilityNavItemProps = {
    /** Link href/path */
    href: string;
    /** Icon */
    icon: IconType;
    /** Label/text content for the link */
    label: string;
    /** Optionally render as a custom component, e.g. react-router-dom Link */
    component?: FC<any>;
};
export declare type UtilityProps = {
    /** Contrast variant for dark/light UI */
    variant: ContrastVariant;
    /** Additional CSS className. (Use `__anatomic__` for an example) */
    className?: string;
    /** Array of utility navigation items */
    items: UtilityNavItemProps[];
};
/**
 * Utility navigation
 * @constructor
 */
export declare const Utility: import("react").MemoExoticComponent<({ variant, className, items }: UtilityProps) => JSX.Element>;

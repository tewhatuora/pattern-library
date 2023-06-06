import { ElementType, ReactNode } from 'react';
import { IconType } from '../Icon/icons';
import * as styles from './Button.css';
export declare const ButtonStyles: typeof styles;
declare type KeysUnder<T, K extends PropertyKey> = T extends object ? {
    [P in keyof T]-?: (P extends K ? keyof T[P] : any) | KeysUnder<T[P], K>;
}[keyof T] : any;
declare type ColorVariant = KeysUnder<styles.Variants, 'color'>;
export declare type ButtonProps = {
    /** Icon to display **/
    icon?: IconType;
    /** Where to position the icon */
    iconPosition?: 'left' | 'right';
    /** Element type to render the Button as */
    as?: ElementType;
    /** URL/path to link to if `as` is set to `a` */
    href?: string;
    /** Additional CSS className. (Use `__anatomic__` for an example) */
    className?: string;
    /** Banner style variant */
    variant?: ColorVariant;
    /** A function that will be called when clicking/pressing the Button */
    onPress?: (e: any) => void;
    children?: ReactNode | undefined;
} & Pick<JSX.IntrinsicElements['button'], 'disabled' | 'type' | 'tabIndex'> & AsLink;
declare type AsLink = {
    href?: string;
};
/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 */
export declare const Button: import("react").ForwardRefExoticComponent<{
    /** Icon to display **/
    icon?: IconType | undefined;
    /** Where to position the icon */
    iconPosition?: "left" | "right" | undefined;
    /** Element type to render the Button as */
    as?: ElementType<any> | undefined;
    /** URL/path to link to if `as` is set to `a` */
    href?: string | undefined;
    /** Additional CSS className. (Use `__anatomic__` for an example) */
    className?: string | undefined;
    /** Banner style variant */
    variant?: ColorVariant;
    /** A function that will be called when clicking/pressing the Button */
    onPress?: ((e: any) => void) | undefined;
    children?: ReactNode | undefined;
} & Pick<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "disabled" | "type" | "tabIndex"> & AsLink & import("react").RefAttributes<HTMLButtonElement>>;
export {};

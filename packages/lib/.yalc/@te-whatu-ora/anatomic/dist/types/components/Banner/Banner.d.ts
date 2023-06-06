import * as styles from './Banner.css';
import { ContrastVariant } from '../../types';
export declare const BannerStyles: typeof styles;
export declare type BannerProps = {
    /** Banner style variant */
    variant: styles.Variant;
    /** Contrast variant for dark/light UI */
    theme?: ContrastVariant;
    /** A function that will be called when closing the Alert */
    onClose?: () => void;
} & Pick<JSX.IntrinsicElements['button'], 'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'children' | 'disabled' | 'type' | 'tabIndex'>;
/**
 * Banner component.
 * Displays a prominent message and icon.
 * Closable option and when closed, component is hidden
 * Has a light and dark variant
 * @param props
 * @constructor
 */
export declare const Banner: import("react").ForwardRefExoticComponent<{
    /** Banner style variant */
    variant: styles.Variant;
    /** Contrast variant for dark/light UI */
    theme?: ContrastVariant | undefined;
    /** A function that will be called when closing the Alert */
    onClose?: (() => void) | undefined;
} & Pick<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "disabled" | "type" | "tabIndex" | "children" | "onClick" | "onMouseEnter" | "onMouseLeave"> & import("react").RefAttributes<HTMLDivElement>>;

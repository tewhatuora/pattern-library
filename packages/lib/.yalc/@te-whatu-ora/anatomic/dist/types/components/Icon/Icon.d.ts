import { BoxProps } from '../Box/Box';
import { IconType } from './icons';
import * as styles from './Icon.css';
import { Color } from '../../types';
export declare const IconStyles: typeof styles;
export declare type IconProps = {
    /** Icon type */
    icon: IconType;
    /** Size variant */
    variant?: styles.Variant;
    /** Optional onClick handler for Icon element */
    onClick?: () => void;
    /** Additional CSS className. (Use `__anatomic__` for an example) */
    className?: string;
    /** Icon color */
    color?: Color;
    /** Alternative text to use for aria-label */
    alt?: string;
} & BoxProps;
/**
 * Icon component to render
 * an icon from /lib/icons/*.svg
 * @param props
 * @constructor
 */
export declare const Icon: import("react").MemoExoticComponent<({ icon, className, variant, alt, ...boxProps }: IconProps) => JSX.Element>;

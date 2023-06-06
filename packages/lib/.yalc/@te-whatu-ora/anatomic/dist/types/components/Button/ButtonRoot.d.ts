import { PropsWithChildren } from 'react';
import { ButtonProps } from './Button';
export declare type ButtonRootProps = PropsWithChildren<ButtonProps>;
/**
 * Accessible button component without Button UI styles
 */
export declare const ButtonRoot: import("react").ForwardRefExoticComponent<{
    icon?: import("../Icon/icons").IconType | undefined;
    iconPosition?: "left" | "right" | undefined;
    as?: import("react").ElementType<any> | undefined;
    href?: string | undefined;
    className?: string | undefined;
    variant?: any;
    onPress?: ((e: any) => void) | undefined;
    children?: import("react").ReactNode;
} & Pick<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "disabled" | "type" | "tabIndex"> & {
    href?: string | undefined;
} & import("react").RefAttributes<HTMLButtonElement>>;

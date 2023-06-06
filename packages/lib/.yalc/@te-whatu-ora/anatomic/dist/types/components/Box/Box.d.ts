import { AllHTMLAttributes, ElementType, PropsWithChildren } from 'react';
import { ClassValue } from 'clsx';
import { Atoms } from '../../css/atoms/atoms';
declare type HTMLProperties = Omit<AllHTMLAttributes<HTMLElement>, 'as' | 'className' | 'color' | 'height' | 'width'>;
export declare type BoxProps = PropsWithChildren<Atoms & HTMLProperties & {
    as?: ElementType;
    className?: ClassValue;
}>;
export declare const Box: import("react").ForwardRefExoticComponent<Atoms & HTMLProperties & {
    as?: ElementType<any> | undefined;
    className?: ClassValue;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
export {};

import { ComponentPropsWithoutRef } from 'react';
import { BoxProps } from '../Box/Box';
import { UseTextProps } from '../../hooks/typography';
export declare type TextProps = ComponentPropsWithoutRef<'span'> & Pick<BoxProps, 'as'> & {
    /** id attribute for the element */
    id?: string;
    /** Font size token */
    size?: UseTextProps['size'];
    /** Font weight token */
    weight?: UseTextProps['weight'];
    /** Text alignment */
    align?: BoxProps['textAlign'];
    /** CSS display property */
    display?: BoxProps['display'];
    /** Text color token */
    color?: BoxProps['color'];
    /** Additional CSS className. (Use `__anatomic__` for an example) */
    className?: BoxProps['className'];
};
/**
 * A Text component for displaying
 * text content as a given HTML tag
 */
export declare const Text: import("react").ForwardRefExoticComponent<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof import("react").HTMLAttributes<HTMLSpanElement>> & Pick<BoxProps, "as"> & {
    /** id attribute for the element */
    id?: string | undefined;
    /** Font size token */
    size?: UseTextProps['size'];
    /** Font weight token */
    weight?: UseTextProps['weight'];
    /** Text alignment */
    align?: BoxProps['textAlign'];
    /** CSS display property */
    display?: BoxProps['display'];
    /** Text color token */
    color?: BoxProps['color'];
    /** Additional CSS className. (Use `__anatomic__` for an example) */
    className?: BoxProps['className'];
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;

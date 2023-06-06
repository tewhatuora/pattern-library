import { ReactNode } from 'react';
import { BoxProps } from '../Box/Box';
import { HeadingLevel, HeadingWeight } from '../../hooks/typography';
export declare type HeadingProps = {
    /** Heading level for styling purposes */
    level: HeadingLevel;
    /** Font weight token */
    weight?: HeadingWeight;
    /** Text alignment */
    align?: BoxProps['textAlign'];
    /** Heading color token */
    color?: BoxProps['color'];
    /** Element type to render as, defaults to h1-h4 with level prop */
    as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'legend' | 'p';
    /** Heading text/elements */
    children?: ReactNode;
    /** id attribute for the element */
    id?: string;
    /** classname override */
    className?: string;
};
/**
 * Heading component for h1, h2, h3, h4 elements
 */
export declare const Heading: import("react").ForwardRefExoticComponent<HeadingProps & import("react").RefAttributes<HTMLElement>>;

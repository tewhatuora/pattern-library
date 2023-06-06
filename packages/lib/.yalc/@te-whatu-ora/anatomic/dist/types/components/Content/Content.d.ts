import { HeadingProps } from '../Heading/Heading';
import { ContrastVariant } from '../../types';
declare type ContentHeadingLevel = '1' | '2' | '3' | '4' | '5';
export declare type ContentProps = {
    /** Heading */
    heading: string;
    /** Heading level */
    headingLevel: ContentHeadingLevel;
    /** Element type for Heading to render as */
    headingAs?: HeadingProps['as'];
    /** Content subheading */
    subheading?: string;
    /** Contrast variant for dark/light UI */
    variant?: ContrastVariant;
    /** Additional CSS className. (Use `__anatomic__` for an example) */
    className?: string;
};
/**
 * Predefined content groups to make laying out text more efficient.
 * @param props
 */
export declare const Content: import("react").ForwardRefExoticComponent<ContentProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
export {};

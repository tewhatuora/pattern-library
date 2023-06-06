import { PropsWithChildren } from 'react';
import { ContrastVariant } from '../../types';
export declare type ListRootProps = {
    /** List element type */
    type: 'ol' | 'ul';
    /** Option to have no list item markers */
    noMarkers?: boolean;
    /** Option to show dividers between list items */
    dividers?: boolean;
    /** Option to disable divider on first item */
    dividersNoTop?: boolean;
    /** Option to disable divider on last item */
    dividersNoBottom?: boolean;
    /** Additional CSS className. (Use `__anatomic__` for an example) */
    className?: string;
    /** Contrast variant for dark/light UI */
    variant?: ContrastVariant;
};
export declare const Root: ({ type, noMarkers, dividers, dividersNoTop, dividersNoBottom, variant, className, children, }: PropsWithChildren<ListRootProps>) => import("react").DetailedReactHTMLElement<{
    className: string;
    'data-dividers': boolean;
    'data-variant': ContrastVariant;
    role: "list";
}, HTMLElement>;

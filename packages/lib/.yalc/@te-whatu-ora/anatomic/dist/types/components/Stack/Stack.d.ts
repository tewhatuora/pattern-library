import { ElementType, PropsWithChildren } from 'react';
import { BoxProps } from '../Box/Box';
import type { Space } from '../../css/atoms/atoms';
import * as styles from './Stack.css';
declare const StackStyles: typeof styles;
export declare const validStackComponents: readonly ["div", "span", "ol", "ul"];
declare type StackProps = {
    /** Element type to render as */
    as?: (typeof validStackComponents)[number];
    /** Element type to render child wrapper as */
    childWrapperAs?: ElementType;
    /** A space token for spacing between children elements */
    space: Space;
    /** Order children elements horizontally */
    horizontal?: boolean;
    /** Additional CSS className. (Use `__anatomic__` for an example) */
    className?: string;
} & BoxProps;
/**
 * A component to vertically stack its
 * children components, separated by a
 * space provided as a prop
 */
declare const Stack: ({ as, childWrapperAs, children, space, horizontal, className, ...boxProps }: PropsWithChildren<StackProps>) => JSX.Element;
export { Stack, StackStyles };
export type { StackProps };

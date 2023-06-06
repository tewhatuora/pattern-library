import { PropsWithChildren, ReactElement, ReactNode } from 'react';
declare type AllowedChildrenProps = {
    types: ReactNode[];
    errorMessage: string;
    propsForChild?: (child?: ReactElement) => any;
};
/**
 * Only render allowed children of `type`
 * @param {Array<ReactNode>} types List of allowed children types
 * @param {string} errorMessage Error message when children are not allowed
 * @param {Function} propsForChild Function that returns props for each child
 * @param {Array<ReactNode>} children Children
 * @constructor
 */
export declare const useAllowedChildren: ({ types, errorMessage, propsForChild, children, }: PropsWithChildren<AllowedChildrenProps>) => ReactElement<any, string | import("react").JSXElementConstructor<any>>[] | null | undefined;
/**
 * Only render allowed children of `type` as component
 * @param {Array<ReactNode>} types List of allowed children types
 * @param {string} errorMessage Error message when children are not allowed
 * @param {Function} propsForChild Function that returns props for each child
 * @param {Array<ReactNode>} children Children
 * @constructor
 */
export declare const AllowedChildren: ({ types, errorMessage, propsForChild, children, }: PropsWithChildren<AllowedChildrenProps>) => JSX.Element;
export {};

import { LiHTMLAttributes, PropsWithChildren } from 'react';
declare type CrumbProps = {
    index: number;
    shouldCheckVisibility?: boolean;
    hidden?: boolean;
    onToggleVisibility?: (index: number, shouldHide: boolean) => void;
} & LiHTMLAttributes<HTMLLIElement>;
/**
 * Crumb
 * Individual breadcrumb item
 * @param index
 * @param shouldCheckVisibility
 * @param hidden
 * @param onToggleVisibility
 * @param children
 * @param rest
 * @constructor
 */
export declare const Crumb: {
    ({ index, shouldCheckVisibility, hidden, onToggleVisibility, children, ...rest }: PropsWithChildren<CrumbProps>): JSX.Element;
    displayName: string;
};
export {};

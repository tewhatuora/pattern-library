import * as styles from './ScreenReadersOnly.css';
export declare const ScreenReadersOnlyStyles: typeof styles;
declare type ScreenReadersOnlyProps = {
    id?: string;
    children: React.ReactNode;
    as?: 'div' | 'span';
};
/**
 * A component that will be visible
 * only to screen readers
 */
export declare const ScreenReadersOnly: ({ id, children, as }: ScreenReadersOnlyProps) => JSX.Element;
export {};

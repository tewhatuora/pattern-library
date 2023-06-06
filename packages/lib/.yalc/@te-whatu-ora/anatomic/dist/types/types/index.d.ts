import * as React from 'react';
import { vars } from '../themes/vars.css';
export declare type AllOrNone<T> = T | {
    [K in keyof T]?: never;
};
export declare type ReactNodeNoStrings = React.ReactElement | React.ReactNodeArray | boolean | null | undefined;
export declare type EmptyObject = {
    [k: string]: unknown;
};
export declare type ChildrenOfType<Name, Props> = (React.ReactNode & {
    props: Props;
    type: {
        name: Name;
    };
})[];
/** Contrast variant for dark/light UI */
export declare type ContrastVariant = 'light' | 'dark';
export declare type Color = keyof typeof vars.color;

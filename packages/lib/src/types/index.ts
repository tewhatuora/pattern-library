import * as React from 'react';

import { vars } from '../themes/vars.css';

export type AllOrNone<T> = T | { [K in keyof T]?: never };

/*
 * Disallow string from React.ReactNode
 */
export type ReactNodeNoStrings = React.ReactElement | React.ReactNodeArray | boolean | null | undefined;

/* Basic empty type instead of using `{}`
 * https://github.com/typescript-eslint/typescript-eslint/issues/2063#issuecomment-675156492
 */
export type EmptyObject = { [k: string]: unknown };

export type ChildrenOfType<Name, Props> = (React.ReactNode & { props: Props; type: { name: Name } })[];

/** Contrast variant for dark/light UI */
export type ContrastVariant = 'light' | 'dark';

export type Color = keyof typeof vars.color;

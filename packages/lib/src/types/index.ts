import * as React from 'react';

import type { Tokens } from '@healthnz/pattern-library-themes';

import { Atoms } from '../css/atoms/atoms';

export type AllOrNone<T> = T | { [K in keyof T]?: never };

/*
 * Disallow string from React.ReactNode
 */
export type ReactNodeNoStrings = React.ReactElement | React.ReactNode[] | boolean | null | undefined;

/* Basic empty type instead of using `{}`
 * https://github.com/typescript-eslint/typescript-eslint/issues/2063#issuecomment-675156492
 */
export type EmptyObject = { [k: string]: unknown };

/**
 * Children that should be the named component, e.g. `ChildrenOfType<'Trigger', TabsTriggerProps>`.
 * Only `ReactNode` is enforced: TypeScript types every JSX element the same, so it can't tell which component
 * a child is, and a stricter type rejected valid children. `useAllowedChildren` checks them at runtime instead.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ChildrenOfType<Name extends string, Props> = React.ReactNode;

/** Contrast variant for dark/light UI */
export type ContrastVariant = 'light' | 'dark';

/** Props a custom link `component` is rendered with, e.g. a wrapper that passes `href` to react-router-dom `<Link to>` */
export type LinkComponentProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  ref?: React.Ref<HTMLAnchorElement>;
};

/** A custom component to render a link with, instead of `<a>` */
export type LinkComponentType = React.ElementType<LinkComponentProps>;

export type AvatarVariant = 'small' | 'large';

export type Color = Atoms['color'];

export type Theme = {
  className: string;
  tokens: Tokens;
};

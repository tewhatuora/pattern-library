import { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react';
import { AriaLinkOptions } from '@react-aria/link';
import * as styles from './Link.css';
export declare const LinkStyles: typeof styles;
export declare type LinkProps = {
    href: string;
    selected?: boolean;
    className?: string;
    component?: FC<any>;
} & AriaLinkOptions & AnchorHTMLAttributes<HTMLAnchorElement>;
/**
 * Navigation link
 * @constructor
 */
export declare const Link: {
    ({ href, selected, className, component: LinkComponent, children, ...rest }: PropsWithChildren<LinkProps>): JSX.Element;
    displayName: string;
};

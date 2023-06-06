import { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react';
import { AriaLinkOptions } from '@react-aria/link';
import { UseTextProps } from '../../hooks/typography';
import * as styles from './AnchorLink.css';
export declare const AnchorLinkStyles: typeof styles;
export declare type AnchorLinkProps = {
    /** A URL/path to link to */
    to: string;
    /** Additional CSS className. (Use `__anatomic__` for an example) */
    className?: string;
    /** A React component to render, e. react-router-dom `<Link />` */
    component?: FC<any>;
    /** Font size for `<Text>` */
    size?: UseTextProps['size'];
    /** Font weight for `<Text>` */
    weight?: UseTextProps['weight'];
    /** Option to not display the icon */
    noIcon?: boolean;
    /** Option to not display the visited styles */
    noVisited?: boolean;
    /** Option to show underline when not hovered */
    showUnderline?: boolean;
} & AriaLinkOptions & AnchorHTMLAttributes<HTMLAnchorElement>;
/**
 * Links to a specified anchor point within the same page.
 * @constructor
 */
export declare const AnchorLink: {
    ({ to, size, weight, noIcon, noVisited, className, showUnderline, component: LinkComponent, children, ...rest }: PropsWithChildren<AnchorLinkProps>): JSX.Element;
    displayName: string;
};

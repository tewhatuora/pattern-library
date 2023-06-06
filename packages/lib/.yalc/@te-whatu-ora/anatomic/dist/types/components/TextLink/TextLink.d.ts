import { PropsWithChildren } from 'react';
import { BoxProps } from '../Box/Box';
import { UseTextProps } from '../../hooks/typography';
import { IconType } from '../Icon/icons';
import * as styles from './TextLink.css';
export declare const TextLinkStyles: typeof styles;
export declare type TextLinkProps = Omit<BoxProps, 'size'> & {
    /** Font size token */
    size?: UseTextProps['size'];
    /** Font weight token */
    weight?: UseTextProps['weight'];
    /** Text alignment */
    align?: BoxProps['textAlign'];
    /** CSS display property */
    display?: BoxProps['display'];
    /** Additional CSS className. (Use `__anatomic__` for an example) */
    className?: BoxProps['className'];
    /** URL/path to link to if `as` is set to `a` */
    href?: string;
    /** Icon to display **/
    icon?: IconType;
    /** Where to position the icon */
    iconPosition?: 'left' | 'right';
};
/**
 * TextLinkButton
 * A semantic button that looks like a link.
 * Because this is a button - we don’t
 * require a ‘pressed state’ as we do
 * with our link components.
 * @param props
 * @constructor
 */
export declare const TextLink: ({ as, href, size, align, weight, children, icon, iconPosition, className, ...props }: PropsWithChildren<TextLinkProps>) => JSX.Element;

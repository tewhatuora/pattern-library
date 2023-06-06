import { FC, PropsWithChildren } from 'react';
import { ContrastVariant } from '@/src/types';
import * as styles from './Footer.css';
import { MenuListProps } from '../Navigation/MenuList';
import { NavigationItemProps } from '../Navigation/Item';
declare const FooterStyles: typeof styles;
declare type ImprintItem = {
    text: string;
    href?: string;
    /** A React component to render, e. react-router-dom `<Link />` */
    component?: FC<any>;
};
declare type FooterProps = {
    /** Social link href/paths for Facebook, Twitter, Instagram, LinkedIn & TikTok */
    socialLinkHrefs?: {
        facebook?: string;
        twitter?: string;
        instagram?: string;
        linkedin?: string;
        tiktok?: string;
    };
    /** Array of Imprint items,which can have text and href for links */
    imprintItems?: ImprintItem[];
    legalCopy?: string;
    /** Contrast variant for dark/light UI */
    variant?: ContrastVariant;
    /** Additional CSS className. (Use `__anatomic__` for an example) */
    className?: string;
};
declare const Footer: {
    ({ socialLinkHrefs, imprintItems, legalCopy, variant, className, children, }: PropsWithChildren<FooterProps>): JSX.Element;
    displayName: string;
};
declare type FooterListProps = PropsWithChildren<MenuListProps>;
declare const FooterList: {
    (props: FooterListProps): JSX.Element;
    displayName: string;
};
declare type FooterListItemProps = PropsWithChildren<NavigationItemProps>;
declare const FooterListItem: {
    (props: FooterListItemProps): JSX.Element;
    displayName: string;
};
declare const Root: {
    ({ socialLinkHrefs, imprintItems, legalCopy, variant, className, children, }: PropsWithChildren<FooterProps>): JSX.Element;
    displayName: string;
};
declare const List: {
    (props: FooterListProps): JSX.Element;
    displayName: string;
};
declare const ListItem: {
    (props: FooterListItemProps): JSX.Element;
    displayName: string;
};
export { FooterStyles, Footer, FooterList, FooterListItem, Root, List, ListItem };
export type { FooterProps, FooterListProps, FooterListItemProps };

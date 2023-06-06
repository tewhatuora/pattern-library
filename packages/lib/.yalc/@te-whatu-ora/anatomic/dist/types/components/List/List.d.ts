import * as styles from './List.css';
export declare const ListStyles: typeof styles;
export declare const List: {
    Root: ({ type, noMarkers, dividers, dividersNoTop, dividersNoBottom, variant, className, children, }: import("react").PropsWithChildren<import("./Root").ListRootProps>) => import("react").DetailedReactHTMLElement<{
        className: string;
        'data-dividers': boolean;
        'data-variant': import("../../types").ContrastVariant;
        role: "list";
    }, HTMLElement>;
    Item: ({ icon, iconPosition, heading, children, ...rest }: import("react").PropsWithChildren<import("./Item").ListItemProps>) => JSX.Element;
    Link: import("react").ForwardRefExoticComponent<{
        icon?: import("../Icon/icons").IconType | undefined;
        heading?: string | undefined;
        href: string;
    } & import("react").HTMLAttributes<HTMLLIElement> & {
        children?: import("react").ReactNode;
    } & import("react").RefAttributes<HTMLAnchorElement>>;
};

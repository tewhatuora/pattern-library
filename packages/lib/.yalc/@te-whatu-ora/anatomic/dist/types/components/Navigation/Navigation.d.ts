export * as NavigationStyles from './Navigation.css';
export declare const Navigation: {
    Root: {
        ({ variant, open, withSearch, searchFormAction, searchFormMethod, children, utilityNavItems, }: import("react").PropsWithChildren<import("./Root").NavigationProps>): JSX.Element;
        displayName: string;
    };
    Item: {
        ({ href, label, selected, subNav, variant, component, children, }: import("react").PropsWithChildren<import("./Item").NavigationItemProps>): JSX.Element;
        displayName: string;
    };
    Link: {
        ({ href, selected, className, component: LinkComponent, children, ...rest }: import("react").PropsWithChildren<import("./Link").LinkProps>): JSX.Element;
        displayName: string;
    };
    Menu: {
        ({ mini, label, startTransitionOut, variant, onClose, onStartClose, children, }: import("react").PropsWithChildren<import("./Menu").NavigationMenuProps>): JSX.Element;
        displayName: string;
    };
    MenuList: {
        ({ heading, children }: import("react").PropsWithChildren<import("./MenuList").MenuListProps>): JSX.Element;
        displayName: string;
    };
    Side: {
        ({ children }: {
            children?: import("react").ReactNode;
        }): JSX.Element;
        displayName: string;
    };
    Utility: import("react").MemoExoticComponent<({ variant, className, items }: import("./Utility").UtilityProps) => JSX.Element>;
};

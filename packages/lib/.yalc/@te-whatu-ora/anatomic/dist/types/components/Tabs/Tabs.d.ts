import * as styles from './Tabs.css';
export declare const TabsStyles: typeof styles;
export declare const Tabs: {
    Root: ({ className, space, children, ...rest }: import("./Root").TabsRootProps) => JSX.Element;
    List: ({ className, children, ...rest }: import("./List").TabsListProps) => JSX.Element;
    Content: ({ className, children, value, ...rest }: import("./Content").TabsContentProps) => JSX.Element;
    Trigger: ({ children, value, className, icon, iconPosition, ...rest }: import("./Trigger").TabsTriggerProps) => JSX.Element;
};

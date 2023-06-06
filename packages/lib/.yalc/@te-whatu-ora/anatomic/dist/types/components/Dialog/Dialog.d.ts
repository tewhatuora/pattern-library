export * as DialogStyles from './Dialog.css';
export declare const Dialog: {
    Root: {
        ({ icon, heading, subheading, defaultOpen, open, onOpenChange, trigger, children, }: import("react").PropsWithChildren<import("./Root").DialogProps>): JSX.Element;
        displayName: string;
    };
    Trigger: import("react").ForwardRefExoticComponent<import("@radix-ui/react-dialog").DialogTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
    Actions: {
        ({ children }: any): JSX.Element;
        displayName: string;
    };
    Action: (props: import("../Button/Button").ButtonProps) => JSX.Element;
    Content: {
        ({ children }: {
            children?: import("react").ReactNode;
        }): JSX.Element;
        displayName: string;
    };
};

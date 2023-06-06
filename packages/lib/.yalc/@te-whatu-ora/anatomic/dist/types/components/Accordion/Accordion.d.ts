export declare const Accordion: {
    Root: ({ variant, headingLevel, children, ...props }: import("react").PropsWithChildren<import("./Root").AccordionRootProps>) => JSX.Element;
    Item: ({ value, children }: import("./Item").AccordionItemProps) => JSX.Element;
    Trigger: import("react").ForwardRefExoticComponent<import("./Trigger").AccordionTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
    Content: ({ children }: import("./Content").AccordionContentProps) => JSX.Element;
};

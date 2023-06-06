import { IconType } from '../Icon/icons';
export declare type AccordionTriggerProps = {
    /** Optional icon to display in Accordion Trigger */
    icon?: IconType;
    /** Optional header label for Accordion Trigger */
    header?: string;
    /** Accordion Trigger label */
    label: string;
};
export declare const Trigger: import("react").ForwardRefExoticComponent<AccordionTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;

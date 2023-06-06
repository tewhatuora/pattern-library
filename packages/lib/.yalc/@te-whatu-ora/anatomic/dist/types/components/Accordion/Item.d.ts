import { AccordionTriggerProps } from './Trigger';
import { AccordionContentProps } from './Content';
import { ChildrenOfType } from '../../types/index';
export declare type AccordionItemProps = {
    /** Accordion item value */
    value: string;
    /** Only `Accordion.Trigger` and `Accordion.Content` components are allowed as children of `Accordion.Item` */
    children: ChildrenOfType<'Trigger', AccordionTriggerProps> & ChildrenOfType<'Content', AccordionContentProps>;
};
export declare const Item: ({ value, children }: AccordionItemProps) => JSX.Element;

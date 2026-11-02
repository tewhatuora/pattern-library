import * as RadixAccordion from '@radix-ui/react-accordion';

import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { AccordionTriggerProps, Trigger } from './Trigger';
import { AccordionContentProps, Content } from './Content';

import { ChildrenOfType } from '../../types/index';

import * as styles from './Accordion.css';

export type AccordionItemProps = {
  /** Identifies the item in the Root's `value` / `defaultValue`. Must be unique within the Accordion. */
  value: string;
  /** Only `Accordion.Trigger` and `Accordion.Content` components are allowed as children of `Accordion.Item` */
  children: ChildrenOfType<'Trigger', AccordionTriggerProps> & ChildrenOfType<'Content', AccordionContentProps>;
};

/** One expandable section. Takes an `Accordion.Trigger` and an `Accordion.Content`. */
export const Item = ({ value, children }: AccordionItemProps) => {
  return (
    <RadixAccordion.Item className={styles.item} value={value}>
      <AllowedChildren
        errorMessage="Only `Accordion.Trigger` and `Accordion.Content` components are allowed as children of `Accordion.Item`"
        types={[Trigger, Content]}
      >
        {children}
      </AllowedChildren>
    </RadixAccordion.Item>
  );
};

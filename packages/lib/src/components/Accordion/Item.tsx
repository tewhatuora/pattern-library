import * as RadixAccordion from '@radix-ui/react-accordion';

import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { AccordionTriggerProps, Trigger } from './Trigger';
import { AccordionContentProps, Content } from './Content';

import { ChildrenOfType } from '../../types/index';

import * as styles from './Accordion.css';

export type AccordionItemProps = {
  value: string;
  children: ChildrenOfType<'Trigger', AccordionTriggerProps> & ChildrenOfType<'Content', AccordionContentProps>;
};

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

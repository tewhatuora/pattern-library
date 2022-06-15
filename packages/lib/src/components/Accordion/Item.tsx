import * as RadixAccordion from '@radix-ui/react-accordion';

import * as styles from './Accordion.css';
import { Content } from './Content';
import { Trigger } from './Trigger';

export type AccordionItemProps = {
  value: string;
  children: (typeof Trigger | typeof Content)[];
};

export const Item = ({ value, children }: AccordionItemProps) => {
  return (
    <RadixAccordion.Item className={styles.item} value={value}>
      {children}
    </RadixAccordion.Item>
  );
};

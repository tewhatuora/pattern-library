import { PropsWithChildren } from 'react';

import * as RadixAccordion from '@radix-ui/react-accordion';

import * as styles from './Accordion.css';

export type AccordionContentProps = PropsWithChildren<Record<string, any>>;

export const Content = ({ children }: AccordionContentProps) => {
  return (
    <RadixAccordion.Content className={styles.content}>
      <div className={styles.contentWrapper}>{children}</div>
    </RadixAccordion.Content>
  );
};

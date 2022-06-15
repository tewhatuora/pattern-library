import { PropsWithChildren } from 'react';

import * as RadixAccordion from '@radix-ui/react-accordion';

import * as styles from './Accordion.css';

export const Content = ({ children }: PropsWithChildren<Record<string, any>>) => {
  return (
    <RadixAccordion.Content className={styles.content}>
      <div className={styles.contentWrapper}>{children}</div>
    </RadixAccordion.Content>
  );
};

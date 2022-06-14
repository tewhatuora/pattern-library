import * as styles from './Accordion.css';
import * as RadixAccordion from '@radix-ui/react-accordion';

import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';
import { PropsWithChildren } from 'react';
import { IconType } from '../Icon/icons';

const Content = ({ children }: PropsWithChildren<{}>) => {
  return (
    <RadixAccordion.Content className={styles.content}>
      <div className={styles.contentWrapper}>{children}</div>
    </RadixAccordion.Content>
  );
};

type AccordionTriggerProps = {
  icon?: IconType;
  header?: string;
  label: string;
};

const Trigger = ({ icon, header, label }: AccordionTriggerProps) => {
  return (
    <RadixAccordion.Header className={styles.header}>
      <RadixAccordion.Trigger className={styles.trigger}>
        <div className={styles.headerContainer}>
          {!!icon && <Icon icon={icon} variant="functionalIcons" className={styles.icon} />}

          <div className={styles.headingText}>
            {!!header && (
              <Text as="div" weight="bold">
                {header}
              </Text>
            )}
            <Text as="div">{label}</Text>
          </div>
        </div>

        <Icon icon="chevron_down" variant="functionalIcons" className={styles.chevron} />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
};

type AccordionItemProps = {
  value: string;
  children: (typeof Trigger | typeof Content)[];
};

const Item = ({ value, children }: AccordionItemProps) => {
  return (
    <RadixAccordion.Item value={value} className={styles.item}>
      {children}
    </RadixAccordion.Item>
  );
};

export type AccordionRootProps = {
  type: 'single' | 'multiple';
  variant?: 'light' | 'dark';
  children: typeof Item;
};

/**
 * Accordion
 * @constructor
 */
const Root = ({ type, variant = 'dark', children }: AccordionRootProps) => {
  return (
    <RadixAccordion.Root type={type} collapsible className={styles.root[variant]}>
      {children}
    </RadixAccordion.Root>
  );
};

export const Accordion = {
  Root,
  Item,
  Trigger,
  Content,
};

import * as RadixAccordion from '@radix-ui/react-accordion';

import { PropsWithChildren } from 'react';

import * as styles from './Accordion.css';

import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';

import { IconType } from '../Icon/icons';

const Content = ({ children }: PropsWithChildren<Record<string, any>>) => {
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
          {!!icon && <Icon className={styles.icon} icon={icon} variant="functionalIcons" />}

          {/* Div to keep the header text vertical. */}
          <div>
            {!!header && (
              <Text align="left" as="div" weight="bold">
                {header}
              </Text>
            )}
            <Text align="left" as="div">
              {label}
            </Text>
          </div>
        </div>

        <Icon className={styles.chevron} icon="chevron_down" variant="functionalIcons" />
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
    <RadixAccordion.Item className={styles.item} value={value}>
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
    <RadixAccordion.Root className={styles.root[variant]} collapsible type={type}>
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

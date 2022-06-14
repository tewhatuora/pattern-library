import * as RadixAccordion from '@radix-ui/react-accordion';

import { Children, PropsWithChildren, cloneElement, isValidElement } from 'react';

import * as styles from './Accordion.css';

import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';

import { IconType } from '../Icon/icons';
import assert from 'assert';

import { ChildrenOfType } from '../../types/index';

// @TODO: Align content with heading
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
    // @TODO: Update `asChild` to allow heading levels
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
  children: ChildrenOfType<'Item', AccordionItemProps>;
};

// This is causing a typescript error and expecting only a single child. Can we
// do something like in the [RadioGroup
// component](https://gitlab.com/alphero/moh-design-system/-/merge_requests/22/diffs#1f13c70d2429235328c3b6254d8a8d9972300963_0_32)
// ? (See below)
/**
 * Accordion
 * @constructor
 */
const Root = ({ type, variant = 'dark', children }: AccordionRootProps) => {
  return (
    <RadixAccordion.Root className={styles.root[variant]} collapsible type={type}>
      {Children.map(children, (child) => {
        assert(
          isValidElement(child) && child?.type.name === 'Item', // Might need to rename the component, "Item" is a bit generic
          'Only Accordion.Item components are allowed as children of Accordion.Root.',
        );
        return cloneElement(child);
      })}
    </RadixAccordion.Root>
  );
};

// @TODO: Split into multiple files
export const Accordion = {
  Root,
  Item,
  Trigger,
  Content,
};

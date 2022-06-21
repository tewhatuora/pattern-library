import * as RadixAccordion from '@radix-ui/react-accordion';

import { Children, cloneElement, isValidElement } from 'react';

import assert from 'assert';

import { ChildrenOfType } from '../../types/index';

import * as styles from './Accordion.css';
import { AccordionContentProps } from './Content';
import { AccordionTriggerProps } from './Trigger';

export type AccordionItemProps = {
  value: string;
  children: ChildrenOfType<'Trigger', AccordionTriggerProps> & ChildrenOfType<'Content', AccordionContentProps>;
};

export const Item = ({ value, children }: AccordionItemProps) => {
  return (
    <RadixAccordion.Item className={styles.item} value={value}>
      {Children.map(children, (child) => {
        assert(
          isValidElement(child) && ['Trigger', 'Content'].includes(child?.type.name),
          'Only `Accordion.Trigger` and `Accordion.Content` components are allowed as children of `Accordion.Item`.',
        );
        return cloneElement(child);
      })}
    </RadixAccordion.Item>
  );
};

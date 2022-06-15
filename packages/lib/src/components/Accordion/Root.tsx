import * as RadixAccordion from '@radix-ui/react-accordion';

import { Children, cloneElement, isValidElement } from 'react';

import * as styles from './Accordion.css';

import assert from 'assert';

import { ChildrenOfType } from '../../types/index';
import { AccordionItemProps } from './Item';

export type AccordionRootProps = {
  type: 'single' | 'multiple';
  variant?: 'light' | 'dark';
  children: ChildrenOfType<'Item', AccordionItemProps>;
};

/**
 * Accordion
 * @constructor
 */
export const Root = ({ type, variant = 'dark', children }: AccordionRootProps) => {
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

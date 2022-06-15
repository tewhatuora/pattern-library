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

// This is causing a typescript error and expecting only a single child. Can we
// do something like in the [RadioGroup
// component](https://gitlab.com/alphero/moh-design-system/-/merge_requests/22/diffs#1f13c70d2429235328c3b6254d8a8d9972300963_0_32)
// ? (See below)
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

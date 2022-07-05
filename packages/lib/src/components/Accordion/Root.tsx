import * as RadixAccordion from '@radix-ui/react-accordion';

import { Children, cloneElement, createContext, isValidElement } from 'react';

import * as styles from './Accordion.css';

import assert from 'assert';

import { ChildrenOfType } from '../../types/index';
import { AccordionItemProps } from './Item';

export type AccordionRootProps = {
  type: 'single' | 'multiple';
  variant?: 'light' | 'dark';
  children: ChildrenOfType<'Item', AccordionItemProps>;
  headingLevel: 3 | 4 | 5 | 6;
};

export const AccordionContext = createContext({ headingLevel: 3 });

/**
 * Expandable and collapsible content.
 *
 * This component is built on top of the Radix UI Accordion component.
 *
 * @constructor
 */
export const Root = ({ type, variant = 'dark', headingLevel, children }: AccordionRootProps) => {
  return (
    <RadixAccordion.Root className={styles.root[variant]} collapsible type={type}>
      <AccordionContext.Provider value={{ headingLevel }}>
        {Children.map(children, (child) => {
          assert(
            isValidElement(child) && child?.type.name === 'Item', // Might need to rename the component, "Item" is a bit generic
            'Only Accordion.Item components are allowed as children of Accordion.Root.',
          );
          return cloneElement(child);
        })}
      </AccordionContext.Provider>
    </RadixAccordion.Root>
  );
};

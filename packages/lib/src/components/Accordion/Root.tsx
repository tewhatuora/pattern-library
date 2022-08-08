import { createContext } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';

import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { AccordionItemProps, Item } from './Item';

import { ChildrenOfType, ContrastVariant } from '../../types';

import * as styles from './Accordion.css';

export type AccordionRootProps = {
  /** Accordion type - single allows only one item open at a time*/
  type: 'single' | 'multiple';
  /** Contrast variant for dark/light UI */
  variant?: ContrastVariant;
  /** Only `Accordion.Item` components are allowed as children of `Accordion.Root` */
  children: ChildrenOfType<'Item', AccordionItemProps>;
  /** Heading level */
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
        <AllowedChildren
          errorMessage="Only `Accordion.Item` components are allowed as children of `Accordion.Root`"
          types={[Item]}
        >
          {children}
        </AllowedChildren>
      </AccordionContext.Provider>
    </RadixAccordion.Root>
  );
};

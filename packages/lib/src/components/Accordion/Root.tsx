import { ComponentPropsWithoutRef, PropsWithChildren, createContext } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';

import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Item } from './Item';

import { ContrastVariant } from '../../types';

import * as styles from './Accordion.css';

export type AccordionRootProps = (RadixAccordion.AccordionSingleProps | RadixAccordion.AccordionMultipleProps) &
  ComponentPropsWithoutRef<'div'> & {
    // /** Accordion type - single allows only one item open at a time*/
    // type: 'single' | 'multiple';
    /** Contrast variant for dark/light UI */
    variant?: ContrastVariant;
    /** Heading level */
    headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
  };

export const AccordionContext = createContext<{ headingLevel: number; variant: 'light' | 'dark' }>({
  headingLevel: 3,
  variant: 'light',
});

/**
 * Expandable and collapsible content.
 *
 * This component is built on top of the Radix UI Accordion component.
 *
 * @constructor
 */
export const Root = ({
  variant = 'light',
  headingLevel,
  children,
  ...props
}: PropsWithChildren<AccordionRootProps>) => {
  return (
    <RadixAccordion.Root className={styles.root['light']} {...props}>
      <AccordionContext.Provider value={{ headingLevel, variant: 'light' }}>
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

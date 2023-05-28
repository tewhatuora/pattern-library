import { ComponentPropsWithoutRef, PropsWithChildren, createContext } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';

import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Item } from './Item';

import { ContrastVariant } from '../../types';

import * as styles from './Accordion.css';

export type AccordionRootProps = ComponentPropsWithoutRef<typeof RadixAccordion.Root> & {
  // /** Accordion type - single allows only one item open at a time*/
  // type: 'single' | 'multiple';
  /** Contrast variant for dark/light UI */
  variant?: ContrastVariant;
  /** Heading level */
  headingLevel: number;
};

export const AccordionContext = createContext({ headingLevel: 3 });

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
    <RadixAccordion.Root
      className={styles.root[variant]}
      // @ts-expect-error this is fine
      collapsible
      {...props}
    >
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

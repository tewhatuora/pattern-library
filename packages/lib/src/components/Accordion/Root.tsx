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
    /** @deprecated Dark variants have been removed; this prop is ignored. */
    variant?: ContrastVariant;
    /** Level of the heading element wrapping each `Accordion.Trigger`. Pick the level that follows the page's heading outline. */
    headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
  };

export const AccordionContext = createContext<{ headingLevel: number; variant: 'light' | 'dark' }>({
  headingLevel: 3,
  variant: 'light',
});

/**
 * Expandable and collapsible content. Built on the Radix UI Accordion, so `type`, `value`, `defaultValue`,
 * `onValueChange`, `collapsible` and `disabled` behave as they do there.
 * `type` is required: `"single"` keeps one item open (add `collapsible` to allow closing it), `"multiple"` allows several.
 * Pass `value` for controlled use or `defaultValue` for uncontrolled. These are a string for `"single"` and a string array for `"multiple"`.
 *
 * @example
 * <Accordion.Root defaultValue="one" headingLevel={3} type="single" collapsible>
 *   <Accordion.Item value="one">
 *     <Accordion.Trigger label="First question" />
 *     <Accordion.Content>First answer</Accordion.Content>
 *   </Accordion.Item>
 *   <Accordion.Item value="two">
 *     <Accordion.Trigger label="Second question" />
 *     <Accordion.Content>Second answer</Accordion.Content>
 *   </Accordion.Item>
 * </Accordion.Root>
 */
export const Root = ({
  // Pulled out so it isn't spread onto the DOM
  variant: _variant,
  headingLevel,
  children,
  ...props
}: PropsWithChildren<AccordionRootProps>) => {
  return (
    <RadixAccordion.Root className={styles.root.light} {...props}>
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

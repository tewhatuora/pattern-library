import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { ContrastVariant } from '../../types';
export declare type AccordionRootProps = ComponentPropsWithoutRef<typeof RadixAccordion.Root> & {
    /** Contrast variant for dark/light UI */
    variant?: ContrastVariant;
    /** Heading level */
    headingLevel: number;
};
export declare const AccordionContext: import("react").Context<{
    headingLevel: number;
}>;
/**
 * Expandable and collapsible content.
 *
 * This component is built on top of the Radix UI Accordion component.
 *
 * @constructor
 */
export declare const Root: ({ variant, headingLevel, children, ...props }: PropsWithChildren<AccordionRootProps>) => JSX.Element;

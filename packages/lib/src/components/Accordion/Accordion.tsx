import * as styles from './Accordion.css';
import * as RadixAccordion from '@radix-ui/react-accordion';

import { Text } from '../Text/Text';

export type AccordionProps = {
  variant: styles.Variant;
} & Pick<
  JSX.IntrinsicElements['button'],
  'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'children' | 'disabled' | 'type' | 'tabIndex'
>;

/**
 * Accordion
 * @constructor
 */
export const Accordion = ({}: AccordionProps) => {
  return (
    <RadixAccordion.Root type="single">
      <RadixAccordion.Item value="item-1">
        <RadixAccordion.Header>
          <Text>Header</Text>
          <RadixAccordion.Trigger />
        </RadixAccordion.Header>
        <RadixAccordion.Content>
          <Text>Hello this is some content</Text>
        </RadixAccordion.Content>
      </RadixAccordion.Item>
    </RadixAccordion.Root>
  );
};

Accordion.displayName = 'Accordion';

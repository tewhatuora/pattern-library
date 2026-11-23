import * as RadixAccordion from '@radix-ui/react-accordion';

import { ElementType, forwardRef, useContext } from 'react';

import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';

import * as styles from './Accordion.css';
import { Box } from '../Box/Box';
import { AccordionContext } from './Root';

export type AccordionTriggerProps = {
  /** Icon shown before the text. Decorative, so it is not announced. */
  icon?: IconType;
  /** Bold line shown above `label`. */
  header?: string;
  /** Text of the trigger button. Keep it descriptive: it is the accessible name of the button. */
  label: string;
};

/** Button that toggles its `Accordion.Item`. Rendered inside a heading whose level comes from `Accordion.Root`'s `headingLevel`. */
export const Trigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(({ icon, header, label }, ref) => {
  const { headingLevel } = useContext(AccordionContext);
  const boxElement = (`h${headingLevel?.toString()}` as ElementType<any>) || ('h6' as ElementType<any>);

  return (
    <RadixAccordion.Header asChild className={styles.header}>
      <Box as={boxElement}>
        <RadixAccordion.Trigger className={styles.trigger} ref={ref}>
          <div className={styles.headerContainer}>
            {!!icon && <Icon className={styles.icon({ variant: 'light' })} icon={icon} variant="functionalIcons" />}

            {/* Div to keep the header text vertical. */}
            <div>
              {!!header && (
                <Text align="left" as="div" weight="bold">
                  {header}
                </Text>
              )}
              <Text align="left" as="div">
                {label}
              </Text>
            </div>
          </div>

          <Icon className={styles.chevron({ variant: 'light' })} icon="chevron_down" variant="functionalIcons" />
        </RadixAccordion.Trigger>
      </Box>
    </RadixAccordion.Header>
  );
});

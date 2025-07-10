import * as RadixAccordion from '@radix-ui/react-accordion';

import { ElementType, forwardRef, useContext } from 'react';

import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';

import * as styles from './Accordion.css';
import { Box } from '../Box/Box';
import { AccordionContext } from './Root';

export type AccordionTriggerProps = {
  /** Optional icon to display in Accordion Trigger */
  icon?: IconType;
  /** Optional header label for Accordion Trigger */
  header?: string | React.ReactNode;
  /** Accordion Trigger label */
  label: string | React.ReactNode;
};

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
            <div style={{ width: 'inherit' }}>
              {!!header && typeof header === 'string' ? (
                <Text align="left" weight="bold">
                  {header}
                </Text>
              ) : (
                header
              )}

              {!!label && typeof label === 'string' ? (
                <Text align="left" as="div">
                  {label}
                </Text>
              ) : (
                label
              )}
            </div>
          </div>

          <Icon className={styles.chevron({ variant: 'light' })} icon="chevron_down" variant="functionalIcons" />
        </RadixAccordion.Trigger>
      </Box>
    </RadixAccordion.Header>
  );
});

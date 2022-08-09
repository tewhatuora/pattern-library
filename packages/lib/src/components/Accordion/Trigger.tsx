import * as RadixAccordion from '@radix-ui/react-accordion';

import { useContext } from 'react';

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
  header?: string;
  /** Accordion Trigger label */
  label: string;
};

export const Trigger = ({ icon, header, label }: AccordionTriggerProps) => {
  const { headingLevel } = useContext(AccordionContext);

  return (
    <RadixAccordion.Header asChild className={styles.header}>
      <Box as={`h${headingLevel}`}>
        <RadixAccordion.Trigger className={styles.trigger}>
          <div className={styles.headerContainer}>
            {!!icon && <Icon className={styles.icon} icon={icon} variant="functionalIcons" />}

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

          <Icon className={styles.chevron} icon="chevron_down" variant="functionalIcons" />
        </RadixAccordion.Trigger>
      </Box>
    </RadixAccordion.Header>
  );
};

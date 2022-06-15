import * as RadixAccordion from '@radix-ui/react-accordion';

import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';

import * as styles from './Accordion.css';
import { Box } from '../Box/Box';

export type AccordionTriggerProps = {
  icon?: IconType;
  header?: string;
  label: string;
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Trigger = ({ icon, header, label, headingLevel }: AccordionTriggerProps) => {
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

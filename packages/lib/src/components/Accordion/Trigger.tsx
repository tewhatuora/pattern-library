import * as RadixAccordion from '@radix-ui/react-accordion';

import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';

import * as styles from './Accordion.css';

export type AccordionTriggerProps = {
  icon?: IconType;
  header?: string;
  label: string;
};

export const Trigger = ({ icon, header, label }: AccordionTriggerProps) => {
  return (
    // @TODO: Update `asChild` to allow heading levels
    <RadixAccordion.Header className={styles.header}>
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
    </RadixAccordion.Header>
  );
};

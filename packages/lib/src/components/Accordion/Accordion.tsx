import * as styles from './Accordion.css';
import * as RadixAccordion from '@radix-ui/react-accordion';

import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';
import { PropsWithChildren } from 'react';

export type AccordionProps = {
  // icon?: IconType;
  icon?: string;
  header?: string;
  label: string;
  divider?: 'top' | 'bottom' | 'both' | 'none';
  variant?: 'light' | 'dark';
};

/**
 * Accordion
 * @constructor
 */
export const Accordion = ({
  icon,
  header,
  label,
  divider = 'none',
  variant = 'dark',
  children,
}: PropsWithChildren<AccordionProps>) => {
  return (
    <RadixAccordion.Root type="single" collapsible className={styles.root({ divider, variant })}>
      <RadixAccordion.Item value="item-1">
        <RadixAccordion.Header className={styles.header}>
          <RadixAccordion.Trigger className={styles.trigger}>
            <div className={styles.headerContainer}>
              {!!icon && <Icon icon={icon} variant="functionalIcons" className={styles.icon} />}

              <div className={styles.headingText}>
                {!!header && (
                  <Text as="div" weight="bold">
                    {header}
                  </Text>
                )}
                <Text as="div">{label}</Text>
              </div>
            </div>

            <Icon icon="chevron_down" variant="functionalIcons" className={styles.chevron} />
          </RadixAccordion.Trigger>
        </RadixAccordion.Header>

        <RadixAccordion.Content className={styles.content}>
          <div className={styles.contentWrapper}>{children}</div>
        </RadixAccordion.Content>
      </RadixAccordion.Item>
    </RadixAccordion.Root>
  );
};

Accordion.displayName = 'Accordion';

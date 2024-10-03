import * as RadixTabs from '@radix-ui/react-tabs';
import clsx from 'clsx';
import { RefAttributes } from 'react';

import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';
import { Text } from '../Text/Text';

import * as styles from './Tabs.css';

export type TabsTriggerProps = {
  /** Trigger label/content */
  children: string;
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
  className?: string;
  /** Optional icon to display on the Trigger */
  icon?: IconType;
  /** Icon position relative to the Trigger label */
  iconPosition?: 'left' | 'right';
} & RadixTabs.TabsTriggerProps &
  RefAttributes<HTMLButtonElement>;

export const Trigger = ({ children, value, className, icon, iconPosition = 'left', ...rest }: TabsTriggerProps) => {
  return (
    <RadixTabs.Trigger className={styles.button} key={`tab-key-${value}`} value={value} {...rest}>
      <div className={styles.iconContainer[iconPosition]}>
        {!!icon && <Icon icon={icon} variant="functionalIcons" />}
        <Text as="span" className={clsx(styles.label, className)} size="medium">
          {children}
        </Text>
      </div>
    </RadixTabs.Trigger>
  );
};

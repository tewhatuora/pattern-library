import * as RadixTabs from '@radix-ui/react-tabs';
import { clsx } from 'clsx';
import { RefAttributes } from 'react';

import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';
import { Text } from '../Text/Text';

import * as styles from './Tabs.css';

export type TabsTriggerProps = {
  /** Label text. Must be a plain string. */
  children: string;
  /** Applied to the label text, not the button. */
  className?: string;
  icon?: IconType;
  /**
   * Which side of the label the icon is on.
   * @default 'left'
   */
  iconPosition?: 'left' | 'right';
} & RadixTabs.TabsTriggerProps &
  RefAttributes<HTMLButtonElement>;

/** Tab button. Its `value` must match the `value` of a `Tabs.Content`. */
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

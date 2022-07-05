import * as RadixTabs from '@radix-ui/react-tabs';
import clsx from 'clsx';

import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';
import { Text } from '../Text/Text';

import * as styles from './Tabs.css';

export type TabsTriggerProps = {
  children: string;
  className?: string;
  icon?: IconType;
  iconPosition?: 'left' | 'right';
} & RadixTabs.TabsTriggerProps &
  React.RefAttributes<HTMLButtonElement>;

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

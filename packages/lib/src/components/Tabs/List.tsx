import * as RadixTabs from '@radix-ui/react-tabs';

import { RefAttributes } from 'react';

import clsx from 'clsx';

import { ChildrenOfType } from '../../types/index';

import * as styles from './Tabs.css';
import { TabsTriggerProps, Trigger } from './Trigger';
import { AllowedChildren } from '../AllowedChildren/AllowedChildren';

export type TabsListProps = {
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
  className?: string;
  /** Only `Tabs.Trigger` components are allowed as children of `Tabs.List` */
  children: ChildrenOfType<'Trigger', TabsTriggerProps>;
} & RadixTabs.TabsListProps &
  RefAttributes<HTMLDivElement>;

export const List = ({ className, children, ...rest }: TabsListProps) => {
  return (
    <div className={clsx(styles.container, className)}>
      <RadixTabs.List className={styles.list} {...rest}>
        <AllowedChildren
          errorMessage="Only `Tabs.Trigger` components are allowed as children of `Tabs.List`."
          types={[Trigger]}
        >
          {children}
        </AllowedChildren>
      </RadixTabs.List>
    </div>
  );
};

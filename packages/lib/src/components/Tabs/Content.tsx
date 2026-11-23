import * as RadixTabs from '@radix-ui/react-tabs';

import { PropsWithChildren, RefAttributes } from 'react';

export type TabsContentProps = PropsWithChildren<{
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
  className?: string;
}> &
  RadixTabs.TabsContentProps &
  RefAttributes<HTMLDivElement>;

/** Panel shown while the trigger with the same `value` is active. */
export const Content = ({ className, children, value, ...rest }: TabsContentProps) => {
  return (
    <RadixTabs.Content className={className} key={`tab-content-${value}`} value={value} {...rest}>
      {children}
    </RadixTabs.Content>
  );
};

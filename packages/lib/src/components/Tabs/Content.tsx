import * as RadixTabs from '@radix-ui/react-tabs';

import { PropsWithChildren, RefAttributes } from 'react';

export type TabsContentProps = PropsWithChildren<{
  className?: string;
}> &
  RadixTabs.TabsContentProps &
  RefAttributes<HTMLDivElement>;

export const Content = ({ className, children, value, ...rest }: TabsContentProps) => {
  return (
    <RadixTabs.Content className={className} key={`tab-content-${value}`} value={value} {...rest}>
      {children}
    </RadixTabs.Content>
  );
};

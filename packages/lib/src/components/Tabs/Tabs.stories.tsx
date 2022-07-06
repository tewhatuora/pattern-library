import { useState } from 'react';

import { TabsRootProps } from './Root';
import { Tabs } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs.Root,
  argTypes: {
    onValueChange: {
      control: { type: 'function' },
    },
    value: {
      control: { type: 'string' },
    },
    className: {
      control: { type: 'string' },
    },
    children: {
      control: {
        type: 'array',
        control: { type: 'array-element' },
      },
    },
    defaultValue: {
      control: { type: 'string' },
    },
    activationMode: {
      control: {
        type: 'radio',
        options: ['automatic', 'manual'],
      },
    },
  },
};

export const Uncontrolled = (args: TabsRootProps) => (
  <Tabs.Root {...args}>
    <Tabs.List>
      <Tabs.Trigger value="tab-1">Tab 1</Tabs.Trigger>
      <Tabs.Trigger icon="tick" iconPosition="left" value="tab-2">
        Tab 2
      </Tabs.Trigger>
      <Tabs.Trigger icon="document" iconPosition="right" value="tab-3">
        Tab 3
      </Tabs.Trigger>
    </Tabs.List>

    <Tabs.Content value="tab-1">
      <p>Tab 1 content</p>
    </Tabs.Content>
    <Tabs.Content value="tab-2">
      <p>Tab 2 content</p>
    </Tabs.Content>
    <Tabs.Content value="tab-3">
      <p>Tab 3 content</p>
    </Tabs.Content>
  </Tabs.Root>
);

export const Controlled = (args: TabsRootProps) => {
  const [currentTab, setCurrentTab] = useState('tab-1');

  return (
    <Tabs.Root {...args} value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List>
        <Tabs.Trigger value="tab-1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger icon="tick" iconPosition="left" value="tab-2">
          Tab 2
        </Tabs.Trigger>
        <Tabs.Trigger icon="document" iconPosition="right" value="tab-3">
          Tab 3
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="tab-1">
        <p>Tab 1 content</p>
      </Tabs.Content>
      <Tabs.Content value="tab-2">
        <p>Tab 2 content</p>
      </Tabs.Content>
      <Tabs.Content value="tab-3">
        <p>Tab 3 content</p>
      </Tabs.Content>
    </Tabs.Root>
  );
};

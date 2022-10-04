import { useState } from 'react';

import { TabsRootProps } from './Root';
import { Tabs } from './Tabs';
import { Text } from '../Text/Text';

import Docs from './Tabs.docs.mdx';
import DocsPage from '../../../utils/DocsPage';
import { vars } from '../../themes/vars.css';

export default {
  title: 'Components/Tabs',
  component: Tabs.Root,
  subcomponents: {
    Root: Tabs.Root,
    List: Tabs.List,
    Content: Tabs.Content,
    Trigger: Tabs.Trigger,
  },
  argTypes: {
    onValueChange: {
      control: { type: 'function' },
    },
    value: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
    children: {
      control: false,
    },
    defaultValue: {
      control: { type: 'text' },
    },
    space: {
      defaultValue: 'medium',
      options: ['', ...Object.keys(vars.space)],
      control: { type: 'select' },
    },
    activationMode: {
      control: {
        type: 'radio',
        options: ['automatic', 'manual'],
      },
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Uncontrolled = (args: TabsRootProps) => (
  <Tabs.Root {...args}>
    <Tabs.List>
      <Tabs.Trigger value="tab-1">Lorem ipsum</Tabs.Trigger>
      <Tabs.Trigger icon="tick" iconPosition="left" value="tab-2">
        Dolor sit
      </Tabs.Trigger>
      <Tabs.Trigger icon="document" iconPosition="right" value="tab-3">
        Amet
      </Tabs.Trigger>
    </Tabs.List>

    <Tabs.Content value="tab-1">
      <Text as="p">Tab 1 content</Text>
    </Tabs.Content>
    <Tabs.Content value="tab-2">
      <Text as="p">Tab 2 content</Text>
    </Tabs.Content>
    <Tabs.Content value="tab-3">
      <Text as="p">Tab 3 content</Text>
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
        <Text as="p">Tab 1 content</Text>
      </Tabs.Content>
      <Tabs.Content value="tab-2">
        <Text as="p">Tab 2 content</Text>
      </Tabs.Content>
      <Tabs.Content value="tab-3">
        <Text as="p">Tab 3 content</Text>
      </Tabs.Content>
    </Tabs.Root>
  );
};

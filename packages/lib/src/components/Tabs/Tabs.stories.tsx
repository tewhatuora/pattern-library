import { useState } from 'react';

import { TabsRootProps } from './Root';
import { Tabs } from './Tabs';
import { Text } from '../Text/Text';

import Docs from './Tabs.docs.mdx';
import DocsPage from '../../../utils/DocsPage';
import { vars } from '../../themes/vars.css';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

export default {
  title: 'Transactional Components/Tabs',
  component: Tabs.Root,
  subcomponents: {
    Root: Tabs.Root,
    List: Tabs.List,
    Content: Tabs.Content,
    Trigger: Tabs.Trigger,
  },
  argTypes: {
    onValueChange: {
      control: false,
    },
    value: {
      control: { type: 'text' },
    },
    className: {
      control: false,
    },
    children: {
      control: false,
    },
    defaultValue: {
      control: { type: 'text' },
    },
    space: {
      options: ['', ...Object.keys(vars.space)],
      control: { type: 'select' },
    },
    activationMode: {
      options: ['automatic', 'manual'],
      control: {
        type: 'radio',
      },
    },
  },
  args: {
    space: 'medium',
    activationMode: 'automatic',
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="320px">
      <Variant label="Labels only">
        <Tabs.Root defaultValue="a" space="small">
          <Tabs.List aria-label="Labels only">
            <Tabs.Trigger value="a">Selected</Tabs.Trigger>
            <Tabs.Trigger value="b">Tab</Tabs.Trigger>
            <Tabs.Trigger value="c">Tab</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="a">
            <Text as="p">Content of the selected tab</Text>
          </Tabs.Content>
          <Tabs.Content value="b">
            <Text as="p">Second tab content</Text>
          </Tabs.Content>
          <Tabs.Content value="c">
            <Text as="p">Third tab content</Text>
          </Tabs.Content>
        </Tabs.Root>
      </Variant>
      <Variant label="Icon left and right">
        <Tabs.Root defaultValue="a" space="small">
          <Tabs.List aria-label="With icons">
            <Tabs.Trigger icon="tick" value="a">
              Left
            </Tabs.Trigger>
            <Tabs.Trigger icon="document" iconPosition="right" value="b">
              Right
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="a">
            <Text as="p">Icons sit on either side of the label</Text>
          </Tabs.Content>
          <Tabs.Content value="b">
            <Text as="p">Second tab content</Text>
          </Tabs.Content>
        </Tabs.Root>
      </Variant>
      <Variant label="Disabled tab">
        <Tabs.Root defaultValue="a" space="small">
          <Tabs.List aria-label="With a disabled tab">
            <Tabs.Trigger value="a">Available</Tabs.Trigger>
            <Tabs.Trigger disabled value="b">
              Disabled
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="a">
            <Text as="p">The second tab cannot be selected</Text>
          </Tabs.Content>
          <Tabs.Content value="b">
            <Text as="p">Disabled tab content</Text>
          </Tabs.Content>
        </Tabs.Root>
      </Variant>
    </Variants>
    <Variants minWidth="100%" title="Many tabs">
      <Variant label="More tabs than fit on a small screen scroll sideways">
        <Tabs.Root defaultValue="overview" space="medium">
          <Tabs.List aria-label="Many tabs">
            <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
            <Tabs.Trigger value="appointments">Appointments</Tabs.Trigger>
            <Tabs.Trigger value="prescriptions">Prescriptions</Tabs.Trigger>
            <Tabs.Trigger value="results">Test results</Tabs.Trigger>
            <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="overview">
            <Text as="p">Overview content</Text>
          </Tabs.Content>
          <Tabs.Content value="appointments">
            <Text as="p">Appointments content</Text>
          </Tabs.Content>
          <Tabs.Content value="prescriptions">
            <Text as="p">Prescriptions content</Text>
          </Tabs.Content>
          <Tabs.Content value="results">
            <Text as="p">Test results content</Text>
          </Tabs.Content>
          <Tabs.Content value="documents">
            <Text as="p">Documents content</Text>
          </Tabs.Content>
        </Tabs.Root>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

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

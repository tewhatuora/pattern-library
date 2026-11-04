import { Accordion } from './Accordion';
import { Text } from '../Text/Text';
import { ContrastWrapper } from '../Storybook/ContrastWrapper';

import { AccordionRootProps } from './Root';
import Docs from './Accordion.docs.mdx';

import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

export default {
  title: 'Transactional Components/Accordion',
  component: Accordion.Root,
  subcomponents: {
    Root: Accordion.Root,
    Item: Accordion.Item,
    Trigger: Accordion.Trigger,
    Content: Accordion.Content,
  },
  argTypes: {
    type: {
      options: ['single', 'multiple'],
      control: { type: 'radio' },
    },
    defaultValue: {
      control: 'text',
    },
    collapsible: {
      options: [true, false],
      control: { type: 'radio' },
    },
    headingLevel: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'select' },
    },
    dividers: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    orientation: {
      options: ['vertical', 'horizontal'],
      control: { type: 'radio' },
    },
    dir: {
      options: ['ltr', 'rtl'],
      control: { type: 'radio' },
    },
    // Deprecated and ignored by the component; the stories only use it to pick a background
    variant: {
      control: false,
    },
    value: {
      control: false,
    },
    onValueChange: {
      control: false,
    },
    className: {
      control: false,
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
  args: {
    type: 'multiple',
  },
};

const overviewItems = (style: string) => [
  <Accordion.Item key="icon-header" value="icon-header">
    <Accordion.Trigger header="Header" icon="document" label={`Icon and header, open (${style})`} />
    <Accordion.Content>
      <Text>Content of an open item.</Text>
    </Accordion.Content>
  </Accordion.Item>,
  <Accordion.Item key="icon" value="icon">
    <Accordion.Trigger icon="document" label="Icon, no header" />
    <Accordion.Content>
      <Text>Lorem ipsum</Text>
    </Accordion.Content>
  </Accordion.Item>,
  <Accordion.Item key="header" value="header">
    <Accordion.Trigger header="Header" label="Header, no icon" />
    <Accordion.Content>
      <Text>Lorem ipsum</Text>
    </Accordion.Content>
  </Accordion.Item>,
  <Accordion.Item key="label" value="label">
    <Accordion.Trigger label="Label only" />
    <Accordion.Content>
      <Text>Lorem ipsum</Text>
    </Accordion.Content>
  </Accordion.Item>,
  <Accordion.Item key="long" value="long">
    <Accordion.Trigger
      icon="document"
      label="A long label that wraps onto a second line when there isn't enough room for it on one line"
    />
    <Accordion.Content>
      <Text>Lorem ipsum</Text>
    </Accordion.Content>
  </Accordion.Item>,
];

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="320px">
      <Variant label="Cards (default)">
        <Accordion.Root defaultValue={['icon-header']} headingLevel={3} type="multiple">
          {overviewItems('cards')}
        </Accordion.Root>
      </Variant>
      <Variant label="dividers">
        <Accordion.Root defaultValue={['icon-header']} dividers headingLevel={3} type="multiple">
          {overviewItems('dividers')}
        </Accordion.Root>
      </Variant>
    </Variants>
    <Variants minWidth="320px" title="Disabled">
      <Variant label="disabled">
        <Accordion.Root disabled headingLevel={3} type="single">
          <Accordion.Item value="disabled">
            <Accordion.Trigger header="Header" icon="document" label="Can't be opened" />
            <Accordion.Content>
              <Text>Lorem ipsum</Text>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Default = (args: AccordionRootProps) => {
  return (
    <ContrastWrapper variant={args.variant}>
      <Accordion.Root {...args}>
        <Accordion.Item value="item-1">
          <Accordion.Trigger header="Header" icon="document" label="Label" />
          <Accordion.Content>
            <Text>Lorem ipsum</Text>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2">
          <Accordion.Trigger icon="document" label="Label" />
          <Accordion.Content>
            <Text>Lorem ipsum</Text>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-3">
          <Accordion.Trigger header="Header" label="Label" />
          <Accordion.Content>
            <Text>Lorem ipsum</Text>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-4">
          <Accordion.Trigger label="Label" />
          <Accordion.Content>
            <Text>Lorem ipsum</Text>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </ContrastWrapper>
  );
};
Default.args = {
  type: undefined,
  defaultValue: undefined,
  variant: 'light',
  headingLevel: 3,
};

export const Dividers = {
  render: Default,
  args: {
    ...Default.args,
    dividers: true,
  },
};

import { Accordion } from './Accordion';
import { Text } from '../Text/Text';
import { AccordionRootProps } from './Root';
import Docs from './Accordion.docs.mdx';

import DocsPage from '../../../utils/DocsPage';

export default {
  title: 'Components/Accordion',
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
      defaultValue: 'multiple',
      control: { type: 'radio' },
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: Omit<AccordionRootProps, 'children'>) => {
  return (
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
  );
};
Default.args = {
  type: 'multiple',
  variant: 'dark',
  headingLevel: 6,
};

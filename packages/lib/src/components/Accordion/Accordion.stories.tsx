import { Accordion } from './Accordion';
import { Text } from '../Text/Text';
import { AccordionRootProps } from './Root';

export default {
  title: 'Components/Accordion',
  component: Accordion.Root,
  argTypes: {
    type: {
      options: ['single', 'multiple'],
      defaultValue: 'multiple',
      control: { type: 'radio' },
    },
  },
};

export const Default = (args: Omit<AccordionRootProps, 'children'>) => {
  return (
    <Accordion.Root {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger header="Header" headingLevel={5} icon="document" label="Label" />
        <Accordion.Content>
          <Text>Lorem ipsum</Text>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger headingLevel={5} icon="document" label="Label" />
        <Accordion.Content>
          <Text>Lorem ipsum</Text>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Trigger header="Header" headingLevel={5} label="Label" />
        <Accordion.Content>
          <Text>Lorem ipsum</Text>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-4">
        <Accordion.Trigger headingLevel={5} label="Label" />
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
};

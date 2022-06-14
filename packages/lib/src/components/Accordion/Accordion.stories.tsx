import { Accordion, AccordionRootProps } from './Accordion';
import { Text } from '../Text/Text';

export default {
  title: 'Components/Accordion',
  component: Accordion.Root,
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
};

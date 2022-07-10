import { List } from './List';
import { ListRootProps } from './Root';

import { Text } from '../Text/Text';

export default {
  title: 'Components/List',
  component: List.Root,
  args: {
    type: 'ul',
  },
};

export const Default = (args: ListRootProps) => {
  return (
    <List.Root {...args}>
      <List.Item>
        Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1
      </List.Item>
      <List.Item>Item 2</List.Item>
      <List.Item>Item 3</List.Item>
    </List.Root>
  );
};

export const Headings = (args: ListRootProps) => {
  return (
    <List.Root {...args}>
      <List.Item icon="tick">
        <Text weight="bold">
          Heading Heading Heading Heading Heading Heading Heading Heading Heading Heading Heading Heading Heading
          Heading Heading Heading Heading Heading
        </Text>
        <div>
          Content Content Content Content Content Content Content Content Content Content Content Content Content
          Content Content Content Content Content Content
        </div>
      </List.Item>
      <List.Item icon="tick">Item 2</List.Item>
      <List.Item icon="cross">Item 3</List.Item>
    </List.Root>
  );
};

export const Icons = (args: ListRootProps) => {
  return (
    <List.Root {...args}>
      <List.Item icon="alert">
        Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1
      </List.Item>
      <List.Item icon="tick">Item 2</List.Item>
      <List.Item icon="cross">Item 3</List.Item>
    </List.Root>
  );
};

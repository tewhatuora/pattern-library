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
      <List.Root bulletStyle="number" type="ol">
        <List.Item>Item 1 in nested list</List.Item>
      </List.Root>
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

export const NormalList = () => (
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <ol>
      <li>Item 3</li>
      <ul>
        <li>Item 4</li>
      </ul>
    </ol>
  </ol>
);

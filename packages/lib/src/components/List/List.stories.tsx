import { List, ListProps } from './List';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {
    type: {
      defaultValue: 'ul',
    },
  },
};

export const Default = (args: ListProps) => {
  return (
    <List {...args}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </List>
  );
};

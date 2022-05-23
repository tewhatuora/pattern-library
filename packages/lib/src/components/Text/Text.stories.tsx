import { Text, TextProps } from './Text';

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    align: {
      options: ['left', 'center', 'right'],
    },
  },
};

export const Default = (args: TextProps) => (
  <Text {...args}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nisi pariatur ratione tempora. Adipisci commodi
    corporis, debitis dolores ducimus, enim ex explicabo harum impedit labore maiores nisi obcaecati omnis soluta.
  </Text>
);

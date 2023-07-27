import { Text, TextProps } from './Text';
import { TextLink } from '../TextLink/TextLink';
import { vars } from '../../themes/vars.css';

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    as: { control: false },
    id: { control: false },
    align: {
      options: ['left', 'center', 'right'],
    },
    color: {
      options: Object.keys(vars.color),
      control: { type: 'select' },
    },
    className: {
      control: {
        type: 'text',
      },
    },
  },
};

export const Default = (args: TextProps) => (
  <Text {...args}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nisi pariatur ratione tempora. Adipisci commodi
    corporis, debitis dolores ducimus, enim ex explicabo harum impedit labore maiores nisi obcaecati omnis soluta.
  </Text>
);

export const WithLink = (args: TextProps) => (
  <Text {...args}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nisi pariatur ratione tempora. Adipisci commodi
    corporis, debitis dolores ducimus,{' '}
    <TextLink icon="link" to="#">
      enim ex explicabo harum
    </TextLink>{' '}
    impedit labore maiores nisi obcaecati omnis soluta.
  </Text>
);

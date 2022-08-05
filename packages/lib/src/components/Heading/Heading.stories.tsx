import { Heading, HeadingProps } from './Heading';
import { vars } from '../../themes/vars.css';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {
    id: { control: false },
    variant: {
      level: ['1', '2', '3', '4'],
      control: { type: 'select' },
    },
    color: {
      options: Object.keys(vars.color),
      control: { type: 'select' },
    },
  },
};

export const Default = (args: HeadingProps) => <Heading {...args}>This is a heading</Heading>;

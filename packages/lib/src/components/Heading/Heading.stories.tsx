import { Heading, HeadingProps } from './Heading';
import { vars } from '../../themes/vars.css';
import { Stack } from '../Stack/Stack';

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

export const Default = (args: HeadingProps) => (
  <Stack space="small">
    <Heading {...args}>This is a heading</Heading>
  </Stack>
);

export const All = () => (
  <Stack space="small">
    <Heading level="1">Heading 1</Heading>
    <Heading level="2">Heading 2</Heading>
    <Heading level="3">Heading 3</Heading>
    <Heading level="4">Heading 4</Heading>
  </Stack>
);

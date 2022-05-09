// Heading.stories.js|jsx

import React from 'react';

import { Heading, HeadingProps } from './Heading';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {
    variant: {
      level: ['1', '2', '3', '4'],
      control: { type: 'select' },
    },
  },
};

export const Default = (args: HeadingProps) => <Heading {...args}>This is a heading</Heading>;

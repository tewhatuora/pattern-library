// Heading.stories.js|jsx

import React from 'react';

import { Heading } from './Heading';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Typography/Heading',
  component: Heading,
};

export const Primary = () => <Heading level="1">This is a heading</Heading>;

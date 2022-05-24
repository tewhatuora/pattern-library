import React from 'react';

import { Tag, TagProps } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    label: {
      defaultValue: 'Tag it!',
    },
  },
};

export const Default = (args: TagProps) => {
  const text = 'tag';
  const label = `${text.substr(0, 1).toUpperCase()}${text.substr(1, text.length)}`;

  return <Tag {...args}>{label}</Tag>;
};

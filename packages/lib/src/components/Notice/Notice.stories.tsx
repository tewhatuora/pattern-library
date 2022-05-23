import React from 'react';

import { Notice, NoticeProps } from './Notice';

export default {
  title: 'Components/Notice',
  component: Notice,
};

export const Default = (args: NoticeProps) => {
  const text = args.tone || 'banner';
  const label = `${text.substr(0, 1).toUpperCase()}${text.substr(1, text.length)}`;

  return <Notice {...args}>{label}</Notice>;
};

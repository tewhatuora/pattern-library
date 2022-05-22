import React from 'react';

import { Banner, BannerProps } from './Banner';

export default {
  title: 'Components/Banner',
  component: Banner,
};

export const Default = (args: BannerProps) => {
  const text = args.variant || 'banner';
  const label = `${text.substr(0, 1).toUpperCase()}${text.substr(1, text.length)}`;

  return <Banner {...args}>{label}</Banner>;
};

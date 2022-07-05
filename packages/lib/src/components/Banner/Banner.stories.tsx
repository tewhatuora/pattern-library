import { Banner, BannerProps } from './Banner';
import DocsPage from '../../../utils/DocsPage';

import Docs from './Banner.docs.mdx';

export default {
  title: 'Components/Banner',
  component: Banner,
  argTypes: {
    label: {
      defaultValue: 'Lorem ipsum dolor sit amet',
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: BannerProps) => {
  const text = args.variant || 'banner';
  const label = `${text.substr(0, 1).toUpperCase()}${text.substr(1, text.length)}`;

  return <Banner {...args}>{label}</Banner>;
};

export const OnClose = (args: BannerProps) => {
  return (
    <Banner
      {...args}
      onClose={() => {
        alert('Banner closed!');
      }}
    >
      Banner with onClose
    </Banner>
  );
};

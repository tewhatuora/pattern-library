import { Banner, BannerProps } from './Banner';
import DocsPage from '../../../utils/DocsPage';

import Docs from './Banner.docs.mdx';
import { Text } from '../Text/Text';

export default {
  title: 'Components/Banner',
  component: Banner,
  argTypes: {
    onClose: {
      control: false,
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

  return (
    <Banner {...args}>
      <Text size="medium" weight="regular">
        {label}
      </Text>
    </Banner>
  );
};

export const OnClose = (args: BannerProps) => {
  return (
    <Banner
      {...args}
      onClose={() => {
        alert('Banner closed!');
      }}
    >
      <Text size="medium" weight="regular">
        Banner with onClose
      </Text>
    </Banner>
  );
};

import { Banner, BannerProps } from './Banner';
import DocsPage from '../../../utils/DocsPage';

import Docs from './Banner.docs.mdx';
import { Text } from '../Text/Text';
import { TextLink } from '../TextLink/TextLink';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

export default {
  title: 'Transactional Components/Banner',
  component: Banner,
  argTypes: {
    variant: {
      options: ['informative', 'alert', 'urgent'],
      control: { type: 'select' },
    },
    tabIndex: {
      control: { type: 'number' },
    },
    children: {
      control: false,
    },
    onClose: {
      control: false,
    },
    onClick: {
      control: false,
    },
    onMouseEnter: {
      control: false,
    },
    onMouseLeave: {
      control: false,
    },
  },
  args: {
    variant: 'alert',
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

// Each Banner is an `aside` landmark named after its variant, so a page can only show each variant once
// without duplicate landmark names. The Overview shows each variant once, varying the content between them.
export const Overview = () => (
  <VariantSections>
    <Variants minWidth="100%">
      <Variant label="informative, with close button">
        <Banner variant="informative" onClose={() => {}}>
          <Text size="medium" weight="regular">
            Clinics are closed on public holidays.
          </Text>
        </Banner>
      </Variant>
      <Variant label="alert, with a link">
        <Banner variant="alert">
          <Text size="medium" weight="regular">
            Some services are busier than usual. <TextLink to="#wait-times">Check current wait times</TextLink>
          </Text>
        </Banner>
      </Variant>
      <Variant label="urgent, long message with close button">
        <Banner variant="urgent" onClose={() => {}}>
          <Text size="medium" weight="regular">
            Due to severe weather, several vaccination clinics in the region are closed today. If you had an
            appointment, we will contact you to rebook. Please do not travel unless it is safe to do so.
          </Text>
        </Banner>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

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

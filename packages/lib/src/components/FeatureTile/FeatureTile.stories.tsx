import { FeatureTile, FeatureTileProps } from './FeatureTile';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import Docs from './FeatureTile.docs.mdx';

export default {
  title: 'Patterns/FeatureTile',
  component: FeatureTile,
  argTypes: {
    // Each feature: title, description, badge, badgeVariant ('positive' | 'info' | 'neutral' | 'caution' |
    // 'critical'), buttonLabel, buttonIcon, buttonIconPosition ('left' | 'right'), buttonHref
    features: {
      control: { type: 'object' },
    },
    children: {
      control: false,
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

const badgeVariants = ['positive', 'info', 'neutral', 'caution', 'critical'] as const;

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="100%" title="Number of features">
      <Variant label="One">
        <FeatureTile
          features={[
            {
              title: 'Find a clinic',
              description: 'Search for clinics near you.',
              buttonLabel: 'Search clinics',
              buttonHref: '#',
              buttonIcon: 'chevron_right',
            },
          ]}
        />
      </Variant>
      <Variant label="Three">
        <FeatureTile
          features={[
            {
              title: 'Find a clinic',
              description: 'Search for clinics near you.',
              buttonLabel: 'Search clinics',
              buttonHref: '#',
              buttonIcon: 'chevron_right',
            },
            {
              title: 'Book a vaccination',
              description: 'Choose a time that suits you.',
              buttonLabel: 'Book now',
              buttonHref: '#',
              buttonIcon: 'chevron_right',
            },
            {
              title: 'Your records',
              description: 'See your vaccinations and test results.',
              buttonLabel: 'View records',
              buttonHref: '#',
              buttonIcon: 'chevron_right',
            },
          ]}
        />
      </Variant>
    </Variants>
    <Variants minWidth="100%" title="Badge variants">
      <Variant label="positive, info, neutral, caution, critical">
        <FeatureTile
          features={badgeVariants.map((badgeVariant) => ({
            title: 'Title',
            description: 'Description',
            badge: badgeVariant,
            badgeVariant,
            buttonLabel: `Open ${badgeVariant}`,
            buttonHref: '#',
          }))}
        />
      </Variant>
    </Variants>
    <Variants minWidth="100%" title="Button icon">
      <Variant label="No icon, icon right, icon left">
        <FeatureTile
          features={[
            { title: 'No icon', description: 'Description', buttonLabel: 'Label one', buttonHref: '#' },
            {
              title: 'Icon right',
              description: 'Description',
              buttonLabel: 'Label two',
              buttonHref: '#',
              buttonIcon: 'chevron_right',
              buttonIconPosition: 'right',
            },
            {
              title: 'Icon left',
              description: 'Description',
              buttonLabel: 'Label three',
              buttonHref: '#',
              buttonIcon: 'chevron_left',
              buttonIconPosition: 'left',
            },
          ]}
        />
      </Variant>
    </Variants>
    <Variants minWidth="100%" title="Long content">
      <Variant label="Wraps">
        <FeatureTile
          features={[
            {
              title: 'A long feature title that wraps onto a second line when space runs out',
              description:
                'A longer description of the feature, which wraps across several lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient sit consequat nisl, lectus sed sit.',
              badge: 'Beta',
              badgeVariant: 'info',
              buttonLabel: 'A long call to action that wraps',
              buttonHref: '#',
              buttonIcon: 'chevron_right',
            },
            {
              title: 'Short title',
              description: 'Short description.',
              buttonLabel: 'Label',
              buttonHref: '#',
            },
          ]}
        />
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Default = (args: FeatureTileProps) => <FeatureTile {...args} />;
Default.args = {
  features: [
    {
      title: 'Action title',
      description: 'Description',
      badge: 'Beta',
      badgeVariant: 'info',
      buttonLabel: 'Label',
      buttonIcon: 'chevron_right',
      buttonIconPosition: 'right',
      buttonHref: '#',
    },
    {
      title: 'Action title',
      description: 'Description',
      buttonLabel: 'Label',
      buttonHref: '#',
    },
  ],
};

export const Single = () => (
  <FeatureTile
    features={[
      {
        title: 'Action title',
        description: 'Description',
        badge: 'Beta',
        buttonLabel: 'Label',
      },
    ]}
  />
);

export const Multiple = () => (
  <FeatureTile
    features={[
      {
        title: 'Action title',
        description: 'Description',
        badge: 'Beta',
        buttonLabel: 'Label',
        buttonIcon: 'info',
        buttonIconPosition: 'right',
      },
      {
        title: 'Action title',
        description: 'Description',
        badge: 'Beta',
        buttonLabel: 'Label',
      },
      {
        title: 'Action title',
        description: 'Description',
        badge: 'Beta',
        buttonLabel: 'Label',
      },
    ]}
  />
);

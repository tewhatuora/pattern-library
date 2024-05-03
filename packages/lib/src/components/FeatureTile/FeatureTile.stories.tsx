import { FeatureTile } from './FeatureTile';
import DocsPage from '../../../utils/DocsPage';

import Docs from './FeatureTile.docs.mdx';

export default {
  title: 'Components/FeatureTile',
  component: FeatureTile,
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
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

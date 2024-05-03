import { HeroBlock, HeroBlockProps } from './HeroBlock';
import DocsPage from '../../../utils/DocsPage';

import Docs from './HeroBlock.docs.mdx';

export default {
  title: 'Components/HeroBlock',
  component: HeroBlock,
  argTypes: {
    children: {
      control: false,
    },
    className: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    badge: {
      control: {
        type: 'text',
      },
    },
    badgeVariant: {
      control: {
        type: 'radio',
        options: ['positive', 'info', 'neutral', 'caution', 'critical'],
      },
      defaultValue: 'info',
    },
    withPattern: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: HeroBlockProps) => {
  return <HeroBlock {...args} />;
};

export const WithChildren = (args: HeroBlockProps) => {
  return (
    <HeroBlock {...args}>
      <h3>Hello</h3>
    </HeroBlock>
  );
};

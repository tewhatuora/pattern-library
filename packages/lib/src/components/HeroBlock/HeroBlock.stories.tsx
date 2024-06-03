import { HeroBlock, HeroBlockProps } from './HeroBlock';
import { PersonSelector } from '../PersonSelector/PersonSelector';
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
      defaultValue: 'Page name',
    },
    description: {
      control: {
        type: 'text',
      },
      defaultValue: 'Page description',
    },
    badge: {
      control: {
        type: 'text',
      },
      defaultValue: 'badge',
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
  const people = [
    {
      nhi: '123456',
      name: 'Firstname L',
      birthDate: '1989-09-25T14:34:32.999Z',
      isUser: true,
    },
    {
      nhi: '987654',
      name: 'Lorem I',
      birthDate: '2015-05-15T14:34:32.999Z',
      isUser: true,
    },
    {
      nhi: '9876542',
      name: 'Dolor S',
      birthDate: '2017-06-02T14:34:32.999Z',
      isUser: false,
    },
    {
      nhi: '9876543',
      name: 'Amet S',
      birthDate: '2020-11-03T14:34:32.999Z',
      isUser: false,
    },
    {
      nhi: '9876544',
      name: 'Example E',
      birthDate: '2024-02-20T14:34:32.999Z',
      isUser: false,
    },
  ];

  return (
    <>
      <HeroBlock {...args}>
        <PersonSelector people={people} personSelectorLabel="View records for" />
      </HeroBlock>
      {/* for scrolling, to preview sticky PersonSelector */}
      <div style={{ height: 2000 }} />
    </>
  );
};

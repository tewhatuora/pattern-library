import { Meta } from '@storybook/react';

import { HeroBlock, HeroBlockProps } from './HeroBlock';
import { PersonSelector, PersonSelectorProps } from '../PersonSelector/PersonSelector';
import DocsPage from '../../../utils/DocsPage';

import Docs from './HeroBlock.docs.mdx';

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
] as const;

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
    },
    withPattern: {
      control: {
        type: 'boolean',
      },
    },
    value: {
      control: {
        type: 'select',
      },
      options: people.map((p) => p.nhi),
    },
  },
  args: {
    title: 'Page name',
    description: 'Page description',
    badge: 'badge',
    badgeVariant: 'info',
    withPattern: false,
    value: '123456',
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
} satisfies Meta<HeroBlockProps & Partial<PersonSelectorProps>>;

export const Default = (args: HeroBlockProps) => {
  return <HeroBlock {...args} />;
};

export const WithChildren = (args: HeroBlockProps & Partial<PersonSelectorProps>) => {
  return (
    <>
      <HeroBlock {...args}>
        <PersonSelector people={people} personSelectorLabel="View records for" value={args.value} />
      </HeroBlock>
      {/* for scrolling, to preview sticky PersonSelector */}
      <div style={{ height: 2000 }} />
    </>
  );
};

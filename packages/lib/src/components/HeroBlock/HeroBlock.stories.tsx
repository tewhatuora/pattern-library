import { useState } from 'react';
import { Meta } from '@storybook/react-vite';

import { HeroBlock, HeroBlockProps } from './HeroBlock';
import { PersonSelector, PersonSelectorProps } from '../PersonSelector/PersonSelector';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

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
  title: 'Patterns/HeroBlock',
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
    titleLevel: {
      options: ['1', '2', '3', '4', '5'],
      control: { type: 'select' },
    },
    badgeVariant: {
      options: ['positive', 'info', 'neutral', 'caution', 'critical'],
      control: {
        type: 'radio',
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
    titleLevel: '2',
    withPattern: false,
    value: '123456',
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
} satisfies Meta<HeroBlockProps & Partial<PersonSelectorProps>>;

const StatefulPersonSelector = () => {
  const [value, setValue] = useState('123456');
  return (
    <PersonSelector
      id="overview-person-selector"
      people={people}
      personSelectorLabel="View records for"
      value={value}
      onChange={setValue}
    />
  );
};

/** With children the selector bar sticks to the top of the viewport on scroll. */
export const Overview = () => (
  <VariantSections>
    <Variants minWidth="100%">
      <Variant label="Pale blue gradient (default), with badge">
        <HeroBlock badge="New" badgeVariant="info" description="Page description" title="Page name" />
      </Variant>
      <Variant label="withPattern">
        <HeroBlock description="Page description" title="Page name" withPattern />
      </Variant>
      <Variant label="With children (PersonSelector): flat background, no gradient or pattern">
        <HeroBlock description="Page description" title="Page name">
          <StatefulPersonSelector />
        </HeroBlock>
      </Variant>
      <Variant label="Long content">
        <HeroBlock
          badge="Beta"
          badgeVariant="caution"
          description="A longer page description that wraps across more than one line when space runs out"
          title="A long page name that wraps onto a second line when space runs out"
        />
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

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

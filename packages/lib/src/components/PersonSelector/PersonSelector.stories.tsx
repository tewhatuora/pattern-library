import { useState } from 'react';
import type { Meta } from '@storybook/react-vite';

import { PersonSelector, PersonSelectorProps } from './PersonSelector';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';
import Docs from './PersonSelector.docs.mdx';

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

export default {
  title: 'Patterns/PersonSelector',
  component: PersonSelector,
  argTypes: {
    people: {
      control: { type: 'object' },
    },
    personSelectorLabel: {
      control: {
        type: 'text',
      },
    },
    isLoading: {
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
    id: {
      control: { type: 'text' },
    },
    onChange: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  args: {
    people,
    value: '123456',
    personSelectorLabel: 'View records for:',
    isLoading: false,
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
} satisfies Meta<PersonSelectorProps>;

/** A selector that keeps its own value, so the overview's examples respond to clicks */
const Example = (props: Partial<PersonSelectorProps> & Pick<PersonSelectorProps, 'id'>) => {
  const [value, setValue] = useState(props.value ?? '123456');
  return (
    <PersonSelector
      people={people}
      personSelectorLabel="View records for"
      {...props}
      value={value}
      onChange={setValue}
    />
  );
};

/** Buttons from tablet up; a dropdown on mobile, or when the buttons don't fit. */
export const Overview = () => (
  <VariantSections>
    <Variants minWidth="100%">
      <Variant label="Signed-in user selected">
        <Example id="overview-user" />
      </Variant>
      <Variant label="A child selected">
        <Example id="overview-child" value="9876542" />
      </Variant>
      <Variant label="Two people">
        <Example id="overview-two" people={people.slice(0, 2)} />
      </Variant>
    </Variants>
    <Variants minWidth="280px">
      <Variant label="Dropdown, when the buttons don't fit">
        <div style={{ maxWidth: '320px' }}>
          <Example id="overview-narrow" />
        </div>
      </Variant>
      <Variant label="isLoading">
        <Example id="overview-loading" isLoading />
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Default = (args: PersonSelectorProps) => {
  return <PersonSelector {...args} />;
};

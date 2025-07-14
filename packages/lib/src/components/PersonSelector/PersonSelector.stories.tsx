import type { Meta } from '@storybook/react';

import { PersonSelector, PersonSelectorProps } from './PersonSelector';
import DocsPage from '../../../utils/DocsPage';
import Docs from './PersonSelector.docs.mdx';

export default {
  title: 'Components/PersonSelector',
  component: PersonSelector,
  argTypes: {
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
      options: ['123456', '987654', '9876542', '9876543', '9876544'],
    },
  },
  args: {
    value: '123456',
    personSelectorLabel: 'View records for:',
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
} satisfies Meta<PersonSelectorProps>;

export const Default = (args: PersonSelectorProps) => {
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

  return <PersonSelector {...args} people={people} />;
};

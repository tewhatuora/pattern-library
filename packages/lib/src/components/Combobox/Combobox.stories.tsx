import { Meta, StoryObj } from '@storybook/react';

import { Combobox } from './Combobox';
import DocsPage from '../../../utils/DocsPage';

import Docs from './Combobox.docs.mdx';

const meta: Meta<typeof Combobox> = {
  title: 'Forms/Combobox',
  component: Combobox,
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
  argTypes: {
    onChange: {
      action: '',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const options = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
  { label: 'Option D', value: 'd' },
  { label: 'Option E', value: 'e' },
  { label: 'Option F', value: 'f' },
  { label: 'Option G', value: 'g' },
  { label: 'Option H', value: 'h' },
  { label: 'Option I', value: 'i' },
  { label: 'Option J', value: 'j' },
  { label: 'Option K', value: 'k' },
  { label: 'Option L', value: 'l' },
  { label: 'Option M', value: 'm' },
  { label: 'Option N', value: 'n' },
  { label: 'Option O', value: 'o' },
];

const longOptions = [
  { label: '15 Stoke Street, Weston, New Plymouth 4310', value: 'a' },
  { label: '25 Stoke Street, Weston, New Plymouth 4310', value: 'b' },
  { label: '35 Stoke Street, Weston, New Plymouth 4310', value: 'c' },
];

export const SingleSelect: Story = {
  args: {
    placeholder: 'Placeholder',
    multiline: false,
    isMulti: false,
    isSearchable: true,
    isClearable: true,
    isLoading: false,
    isDisabled: false,
    error: false,
    options,
  },
};

export const SingleSelectMultiline: Story = {
  args: {
    ...SingleSelect.args,
    options: longOptions,
    multiline: true,
    defaultValue: [longOptions[0]],
  },
};

export const MultiSelect: Story = {
  args: {
    ...SingleSelect.args,
    isMulti: true,
    defaultValue: [options[0]],
  },
};

export const NoOptions: Story = {
  args: {
    ...SingleSelect.args,
    options: [],
  },
};

export const Error: Story = {
  args: {
    ...SingleSelect.args,
    error: true,
  },
};

import { Meta, StoryObj } from '@storybook/react';

import { Combobox } from './Combobox';

const meta: Meta<typeof Combobox> = {
  title: 'Forms/Combobox',
  component: Combobox,
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

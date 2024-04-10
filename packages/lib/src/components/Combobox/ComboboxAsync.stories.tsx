import { Meta, StoryObj } from '@storybook/react';

import { ComboboxAsync } from './ComboboxAsync';

const meta: Meta<typeof ComboboxAsync> = {
  title: 'Forms/ComboboxAsync',
  component: ComboboxAsync,
  argTypes: {
    onChange: {
      action: '',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ComboboxAsync>;

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

async function loadOptions(input: string): Promise<typeof options> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(input ? options.filter((option) => option.label.toLowerCase().includes(input.toLowerCase())) : options);
    }, 700);
  });
}

async function loadLongOptions(input: string): Promise<typeof longOptions> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        input ? longOptions.filter((option) => option.label.toLowerCase().includes(input.toLowerCase())) : longOptions,
      );
    }, 700);
  });
}

async function loadNoOptions(): Promise<typeof longOptions> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([]);
    }, 700);
  });
}

export const SingleSelect: Story = {
  args: {
    placeholder: 'Placeholder',
    cacheOptions: true,
    multiline: false,
    isMulti: false,
    isSearchable: true,
    isClearable: true,
    isLoading: false,
    isDisabled: false,
    error: false,
    loadOptions,
  },
};

export const SingleSelectMultiline: Story = {
  args: {
    ...SingleSelect.args,
    loadOptions: loadLongOptions,
    multiline: true,
  },
};

export const MultiSelect: Story = {
  args: {
    ...SingleSelect.args,
    isMulti: true,
  },
};

export const NoOptions: Story = {
  args: {
    ...SingleSelect.args,
    loadOptions: loadNoOptions,
  },
};

export const Error: Story = {
  args: {
    ...SingleSelect.args,
    error: true,
  },
};

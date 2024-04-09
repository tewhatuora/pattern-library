import { Meta, StoryObj } from '@storybook/react';

import { ComboBox } from './ComboBox';

const meta: Meta<typeof ComboBox> = {
  title: 'Forms/ComboBox',
  component: ComboBox,
};

export default meta;
type Story = StoryObj<typeof ComboBox>;

const options = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
  { label: 'Option D', value: 'd' },
  { label: 'Option E', value: 'e' },
];

export const Single: Story = {
  args: {
    isMulti: false,
    isSearchable: true,
    isClearable: true,
    isLoading: false,
    isDisabled: false,
    error: false,
    options,
  },
};

export const Multi: Story = {
  args: {
    ...Single.args,
    isMulti: true,
    defaultValue: [options[0]],
  },
};

export const NoOptions: Story = {
  args: {
    ...Single.args,
    options: [],
  },
};

export const Error: Story = {
  args: {
    ...Single.args,
    error: true,
  },
};

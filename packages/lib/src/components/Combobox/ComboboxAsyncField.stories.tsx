import { Meta, StoryObj } from '@storybook/react';

import { ComboboxAsyncField } from './ComboboxAsyncField';
import * as ComboboxAsyncStories from './ComboboxAsync.stories';
import icons from '../Icon/icons';
import DocsPage from '../../../utils/DocsPage';

import Docs from './ComboboxAsyncField.docs.mdx';

const meta: Meta<typeof ComboboxAsyncField> = {
  title: 'Forms/ComboboxAsyncField',
  component: ComboboxAsyncField,
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
  argTypes: {
    id: { control: false },
    name: { control: false },
    onChange: { control: false },
    onTertiaryLabelClick: { control: false },
    label: {
      defaultValue: 'Label',
      control: {
        type: 'text',
      },
    },
    subheading: {
      defaultValue: 'Subheading',
      control: {
        type: 'text',
      },
    },
    helperText: {
      defaultValue: 'Helper text',
      control: {
        type: 'text',
      },
    },
    placeholder: {
      defaultValue: 'Placeholder',
      control: {
        type: 'text',
      },
    },
    defaultValue: {
      control: {
        type: 'text',
      },
    },
    value: {
      control: {
        type: 'text',
      },
      defaultValue: undefined,
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
    showRequiredAsterisk: {
      control: {
        type: 'boolean',
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
    isSearchable: {
      control: {
        type: 'boolean',
      },
    },
    isClearable: {
      control: {
        type: 'boolean',
      },
    },
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
    multiline: {
      control: {
        type: 'boolean',
      },
    },
    tertiaryLabel: {
      defaultValue: 'Tertiary label',
    },
    tertiaryLabelAs: {
      defaultValue: 'button',
    },
    href: {
      if: { arg: 'tertiaryLabelAs', eq: 'a' },
    },
    tertiaryLabelIcon: {
      options: ['', ...Object.keys(icons)],
      control: { type: 'select' },
    },
    tertiaryLabelIconPosition: {
      control: {
        type: 'radio',
        options: ['left', 'right'],
      },
      defaultValue: 'left',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ComboboxAsyncField>;

export const SingleSelect: Story = {
  args: {
    ...ComboboxAsyncStories.SingleSelect.args,
  },
};

export const SingleSelectMultiline: Story = {
  args: {
    ...ComboboxAsyncStories.SingleSelectMultiline.args,
  },
};

export const MultiSelect: Story = {
  args: {
    ...ComboboxAsyncStories.MultiSelect.args,
  },
};

export const NoOptions: Story = {
  args: {
    ...ComboboxAsyncStories.NoOptions.args,
  },
};

export const Error: Story = {
  args: {
    ...ComboboxAsyncStories.Error.args,
    errorMessage: 'Error message',
  },
};

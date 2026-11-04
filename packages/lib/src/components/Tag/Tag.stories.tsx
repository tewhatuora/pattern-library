import type { Meta, StoryObj } from '@storybook/react-vite';

import Docs from './Tag.docs.mdx';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Transactional Components/Tag',
  component: Tag,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    isClearable: {
      control: { type: 'boolean' },
    },
    onClear: {
      control: false,
    },
  },
  args: {
    isClearable: false,
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Overview: Story = {
  render: () => (
    <VariantSections>
      <Variants minWidth="160px">
        <Variant label="Default">
          <Tag label="Auckland" />
        </Variant>
        <Variant label="Clearable">
          <Tag isClearable label="Auckland" />
        </Variant>
      </Variants>
      <Variants minWidth="240px" title="Long label">
        <Variant label="Default">
          <Tag label="Auckland, Waikato, Bay of Plenty and Northland regions" />
        </Variant>
        <Variant label="Clearable">
          <Tag isClearable label="Auckland, Waikato, Bay of Plenty and Northland regions" />
        </Variant>
      </Variants>
    </VariantSections>
  ),
  parameters: { controls: { disable: true } },
};

export const Default: Story = {
  args: {
    label: 'Tag Component',
  },
};

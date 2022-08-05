import { Tag, TagProps } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    label: {
      defaultValue: 'Tag Component',
    },
    onClear: {
      control: false,
    },
  },
};

export const Default = (args: TagProps) => {
  return (
    <Tag
      {...args}
      onClear={() => {
        alert('Tag closed!');
      }}
    />
  );
};

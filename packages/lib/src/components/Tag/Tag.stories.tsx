import { Tag, TagProps } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    label: {
      defaultValue: 'Tag Component',
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
    >
      Tag with onClear
    </Tag>
  );
};

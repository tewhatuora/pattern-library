import { Notice, NoticeProps } from './Notice';

export default {
  title: 'Components/Notice',
  component: Notice,
  argTypes: {
    variant: {
      defaultValue: 'positive',
    },
    label: {
      defaultValue: 'A static message with a lighter visual treatment than alert',
    },
  },
};

export const Default = (args: NoticeProps) => {
  const text = args.variant || 'notice';
  const label = `${text.substr(0, 1).toUpperCase()}${text.substr(1, text.length)}`;

  return <Notice {...args}>{label}</Notice>;
};

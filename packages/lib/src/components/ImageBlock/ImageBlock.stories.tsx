import { ImageBlock, ImageBlockProps } from './ImageBlock';

export default {
  title: 'Components/ImageBlock',
  component: ImageBlock,
  argTypes: {
    helperText: {
      defaultValue: 'Helper text',
    },
    errorMessage: {
      defaultValue: 'Error message',
    },
  },
};

export const Default = (args: ImageBlockProps) => {
  return <ImageBlock {...args} />;
};

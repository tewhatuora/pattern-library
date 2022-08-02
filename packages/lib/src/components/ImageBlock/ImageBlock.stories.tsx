import { ImageBlock, ImageBlockProps } from './ImageBlock';
import { Text } from '../Text/Text';

export default {
  title: 'Components/ImageBlock',
  component: ImageBlock,
  argTypes: {
    heading: {
      defaultValue: 'Heading',
    },
    subheading: {
      defaultValue: 'Subheading',
    },
    headingLevel: {
      defaultValue: '1',
    },
    headingAs: {
      defaultValue: 'h1',
    },
    primaryButtonLabel: {
      defaultValue: 'Primary',
    },
    secondaryButtonLabel: {
      defaultValue: 'Secondary',
    },
    src: {
      defaultValue: 'https://via.placeholder.com/600x400/404040/ffffff.png',
    },
    shape: {
      defaultValue: 'square',
    },
    width: {
      defaultValue: 'full',
    },
    imagePosition: {
      defaultValue: 'right',
      control: {
        type: 'radio',
        options: ['left', 'right'],
      },
    },
  },
};

export const Default = (args: ImageBlockProps) => {
  return (
    <ImageBlock {...args}>
      <Text as="p">Content</Text>
    </ImageBlock>
  );
};

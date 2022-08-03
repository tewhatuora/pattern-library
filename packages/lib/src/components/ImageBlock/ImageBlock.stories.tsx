import { ImageBlock, ImageBlockProps } from './ImageBlock';
import { Text } from '../Text/Text';

import { Container } from '../Container/Container';
import { Column } from '../Columns/Column';
import { Row } from '../Columns/Row';

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
      defaultValue: 'after',
      control: {
        type: 'radio',
        options: ['before', 'after'],
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

export const TwoHalves = (args: ImageBlockProps) => {
  return (
    <Container>
      <Row>
        <Column columns={6} desktop={6} mobile={12} tablet={12}>
          <ImageBlock {...args} width="half">
            <Text as="p">Content</Text>
          </ImageBlock>
        </Column>
        <Column columns={6} desktop={6} mobile={12} tablet={12}>
          <ImageBlock {...args} width="half">
            <Text as="p">Content</Text>
          </ImageBlock>
        </Column>
      </Row>
    </Container>
  );
};

export const ThreeThirds = (args: ImageBlockProps) => {
  return (
    <Container>
      <Row>
        <Column columns={4} desktop={12} mobile={12} tablet={12} wide={4}>
          <ImageBlock {...args} width="third">
            <Text as="p">Content</Text>
          </ImageBlock>
        </Column>
        <Column columns={4} desktop={12} mobile={12} tablet={12} wide={4}>
          <ImageBlock {...args} width="third">
            <Text as="p">Content</Text>
          </ImageBlock>
        </Column>
        <Column columns={4} desktop={12} mobile={12} tablet={12} wide={4}>
          <ImageBlock {...args} width="third">
            <Text as="p">Content</Text>
          </ImageBlock>
        </Column>
      </Row>
    </Container>
  );
};

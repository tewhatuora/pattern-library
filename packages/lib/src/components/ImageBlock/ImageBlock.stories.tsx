import { ImageBlock, ImageBlockProps } from './ImageBlock';
import { Text } from '../Text/Text';

import { Container } from '../Container/Container';
import { Column } from '../Columns/Column';
import { Row } from '../Columns/Row';
import Docs from './ImageBlock.docs.mdx';

import DocsPage from '../../../utils/DocsPage';

export default {
  title: 'Components/ImageBlock',
  component: ImageBlock,
  argTypes: {
    headingLevel: {
      control: {
        type: 'number',
      },
    },
    primaryButton: {
      control: {
        type: 'object',
      },
    },
    secondaryButton: {
      control: {
        type: 'object',
      },
    },
    imagePosition: {
      control: {
        type: 'radio',
        options: ['before', 'after'],
      },
    },
  },
  args: {
    heading: 'Heading',
    subheading: 'Subheading',
    headingLevel: 1,
    primaryButton: {
      label: 'Primary',
      as: 'button',
      href: undefined,
      onClick: () => {
        alert('Primary button clicked');
      },
    },
    secondaryButton: {
      label: 'Secondary',
      as: 'button',
      href: undefined,
      onClick: () => {
        alert('Secondary button clicked');
      },
    },
    src: 'https://placehold.jp/404040/ffffff/500x500.png?text=ImageBlock',
    shape: 'square',
    width: 'full',
    imagePosition: 'after',
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
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
        <Column columns={4} desktop={4} mobile={12} tablet={12}>
          <ImageBlock {...args} width="third">
            <Text as="p">Content</Text>
          </ImageBlock>
        </Column>
        <Column columns={4} desktop={4} mobile={12} tablet={12}>
          <ImageBlock {...args} width="third">
            <Text as="p">Content</Text>
          </ImageBlock>
        </Column>
        <Column columns={4} desktop={4} mobile={12} tablet={12}>
          <ImageBlock {...args} width="third">
            <Text as="p">Content</Text>
          </ImageBlock>
        </Column>
      </Row>
    </Container>
  );
};

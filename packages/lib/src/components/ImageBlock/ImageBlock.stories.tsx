import { ImageBlock, ImageBlockProps } from './ImageBlock';
import { Text } from '../Text/Text';

import { Container } from '../Container/Container';
import { Column } from '../Columns/Column';
import { Row } from '../Columns/Row';
import Docs from './ImageBlock.docs.mdx';

import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

export default {
  title: 'Content Components/ImageBlock',
  component: ImageBlock,
  argTypes: {
    heading: {
      control: { type: 'text' },
    },
    subheading: {
      control: { type: 'text' },
    },
    headingLevel: {
      options: ['1', '2', '3', '4', '5'],
      control: { type: 'select' },
    },
    headingAs: {
      options: ['div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    alt: {
      control: { type: 'text' },
    },
    src: {
      control: { type: 'text' },
    },
    shape: {
      options: ['square', 'rectangle'],
      control: { type: 'radio' },
    },
    width: {
      options: ['full', 'half', 'third'],
      control: { type: 'radio' },
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
      options: ['before', 'after'],
      control: {
        type: 'radio',
      },
    },
    children: {
      control: false,
    },
  },
  args: {
    heading: 'Heading',
    subheading: 'Subheading',
    headingLevel: '1',
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
    alt: 'Placeholder image',
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

// Inline placeholder, so the overview doesn't depend on an external image service
const placeholder = (width: number, height: number) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="#404040"/><text x="50%" y="50%" fill="#fff" font-family="sans-serif" font-size="32" text-anchor="middle" dominant-baseline="middle">${width}×${height}</text></svg>`,
  )}`;

const buttons = {
  primaryButton: { as: 'a', href: '#', label: 'Primary' },
  secondaryButton: { as: 'a', href: '#', label: 'Secondary' },
} as const;

// Headings render as `p`, so the overview doesn't add many headings to the page outline
const example = {
  alt: '',
  heading: 'Heading',
  headingAs: 'p',
  headingLevel: '2',
  subheading: 'Subheading',
} as const;

/** On mobile a full-width block always shows the image first. */
export const Overview = () => (
  <VariantSections>
    <Variants minWidth="100%" title="Full width">
      <Variant label='imagePosition="after", shape="rectangle", two buttons'>
        <ImageBlock {...example} {...buttons} imagePosition="after" shape="rectangle" src={placeholder(800, 500)}>
          <Text as="p">Body text.</Text>
        </ImageBlock>
      </Variant>
      <Variant label='imagePosition="before", shape="square", primary button only'>
        <ImageBlock
          {...example}
          imagePosition="before"
          primaryButton={buttons.primaryButton}
          shape="square"
          src={placeholder(500, 500)}
        >
          <Text as="p">Body text.</Text>
        </ImageBlock>
      </Variant>
      <Variant label="No buttons or subheading, long content">
        <ImageBlock
          alt=""
          heading="A long heading that wraps onto a second line when space runs out"
          headingAs="p"
          headingLevel="2"
          src={placeholder(800, 500)}
        >
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient sit consequat nisl, lectus sed sit. Dui
            turpis vestibulum, scelerisque tristique amet augue facilisis. Turpis dignissim duis maecenas facilisis.
          </Text>
        </ImageBlock>
      </Variant>
    </Variants>
    <Variants minWidth="100%" title='width="half", imagePosition after and before'>
      <Container>
        <Row>
          {(['after', 'before'] as const).map((imagePosition) => (
            <Column columns={6} desktop={6} key={imagePosition} mobile={12} tablet={12}>
              <ImageBlock
                {...example}
                {...buttons}
                imagePosition={imagePosition}
                src={placeholder(800, 500)}
                width="half"
              >
                <Text as="p">Body text.</Text>
              </ImageBlock>
            </Column>
          ))}
        </Row>
      </Container>
    </Variants>
    <Variants minWidth="100%" title='width="third", rectangle and square'>
      <Container>
        <Row>
          {(['rectangle', 'square', 'rectangle'] as const).map((shape, i) => (
            // Never reordered
            // eslint-disable-next-line react/no-array-index-key
            <Column columns={4} desktop={4} key={i} mobile={12} tablet={12}>
              <ImageBlock
                {...example}
                primaryButton={buttons.primaryButton}
                shape={shape}
                src={shape === 'square' ? placeholder(500, 500) : placeholder(800, 500)}
                width="third"
              >
                <Text as="p">Body text.</Text>
              </ImageBlock>
            </Column>
          ))}
        </Row>
      </Container>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

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

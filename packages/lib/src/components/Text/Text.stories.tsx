import { Text, TextProps } from './Text';
import { TextLink } from '../TextLink/TextLink';
import { vars } from '../../themes/vars.css';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

// `semantic` is a group of tokens, not a colour
const colors = Object.keys(vars.color).filter((color) => color !== 'semantic');

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    as: {
      options: ['span', 'p', 'div', 'label', 'strong', 'em'],
      control: { type: 'select' },
    },
    id: { control: false },
    size: {
      options: Object.keys(vars.textSize),
      control: { type: 'select' },
    },
    weight: {
      options: Object.keys(vars.textWeight),
      control: { type: 'select' },
    },
    align: {
      options: ['left', 'center', 'right'],
      control: { type: 'radio' },
    },
    display: {
      options: ['block', 'inline', 'inlineBlock', 'flex', 'none'],
      control: { type: 'select' },
    },
    color: {
      options: colors,
      control: { type: 'select' },
    },
    className: {
      control: false,
    },
  },
  args: {
    as: 'span',
    size: 'medium',
    weight: 'regular',
    display: 'block',
  },
};

const sizes = Object.keys(vars.textSize) as (keyof typeof vars.textSize)[];
const weights = Object.keys(vars.textWeight) as (keyof typeof vars.textWeight)[];

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="140px" title="Size">
      {sizes.map((size) => (
        <Variant key={size} label={size}>
          <Text size={size}>The quick brown fox</Text>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="140px" title="Weight">
      {weights.map((weight) => (
        <Variant key={weight} label={weight}>
          <Text weight={weight}>The quick brown fox</Text>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="200px" title="Align">
      {(['left', 'center', 'right'] as const).map((align) => (
        <Variant key={align} label={align}>
          <Text align={align}>Aligned text</Text>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="280px" title="Display">
      <Variant label="block (default)">
        <Text>First</Text>
        <Text>Second</Text>
      </Variant>
      <Variant label="inline">
        <Text display="inline">First</Text> <Text display="inline">Second</Text>
      </Variant>
    </Variants>
    <Variants minWidth="140px" title="Colour">
      <Variant label="Default">
        <Text>Body text</Text>
      </Variant>
      <Variant label="primary100">
        <Text color="primary100">Body text</Text>
      </Variant>
      <Variant label="error100">
        <Text color="error100">Body text</Text>
      </Variant>
      <Variant label="neutral75">
        <Text color="neutral75">Body text</Text>
      </Variant>
    </Variants>
    <Variants dark minWidth="140px" title="On a dark background">
      <Variant label="neutral0">
        <Text color="neutral0">Body text</Text>
      </Variant>
    </Variants>
    <Variants minWidth="100%" title="Paragraph with a link">
      <Variant label='as="p"'>
        <Text as="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nisi pariatur ratione tempora.{' '}
          <TextLink to="#">Links inside text are underlined</TextLink>, and long text wraps onto as many lines as it
          needs.
        </Text>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Default = (args: TextProps) => (
  <Text {...args}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nisi pariatur ratione tempora. Adipisci commodi
    corporis, debitis dolores ducimus, enim ex explicabo harum impedit labore maiores nisi obcaecati omnis soluta.
  </Text>
);

export const WithLink = (args: TextProps) => (
  <Text {...args}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nisi pariatur ratione tempora. Adipisci commodi
    corporis, debitis dolores ducimus,{' '}
    <TextLink icon="link" to="#">
      enim ex explicabo harum
    </TextLink>{' '}
    impedit labore maiores nisi obcaecati omnis soluta.
  </Text>
);

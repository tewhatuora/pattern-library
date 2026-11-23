import { Heading, HeadingProps } from './Heading';
import { vars } from '../../themes/vars.css';
import { Stack } from '../Stack/Stack';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

// `semantic` is a group of tokens, not a colour
const colors = Object.keys(vars.color).filter((color) => color !== 'semantic');

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {
    id: { control: false },
    className: { control: false },
    level: {
      options: ['1', '2', '3', '4'],
      control: { type: 'select' },
    },
    weight: {
      options: Object.keys(vars.headingWeight),
      control: { type: 'radio' },
    },
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'legend', 'p'],
      control: { type: 'select' },
    },
    align: {
      options: ['left', 'center', 'right'],
      control: { type: 'radio' },
    },
    color: {
      options: colors,
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    level: '1',
    weight: 'regular',
    children: 'This is a heading',
  },
};

const levels = ['1', '2', '3', '4'] as const;

// The examples render as `p` so they don't add to the docs page's heading outline; `level` sets the look
export const Overview = () => (
  <VariantSections>
    <Variants minWidth="100%" title="Level">
      {levels.map((level) => (
        <Variant key={level} label={`level ${level}`}>
          <Heading as="p" level={level}>
            Heading level {level}
          </Heading>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="240px" title="Weight">
      {Object.keys(vars.headingWeight).map((weight) => (
        <Variant key={weight} label={weight}>
          <Heading as="p" level="2" weight={weight as HeadingProps['weight']}>
            Heading
          </Heading>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="200px" title="Align">
      {(['left', 'center', 'right'] as const).map((align) => (
        <Variant key={align} label={align}>
          <Heading align={align} as="p" level="3">
            Heading
          </Heading>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="200px" title="Colour">
      <Variant label="Default">
        <Heading as="p" level="3">
          Heading
        </Heading>
      </Variant>
      <Variant label="primary100">
        <Heading as="p" color="primary100" level="3">
          Heading
        </Heading>
      </Variant>
    </Variants>
    <Variants dark minWidth="200px" title="On a dark background">
      <Variant label="neutral0">
        <Heading as="p" color="neutral0" level="3">
          Heading
        </Heading>
      </Variant>
    </Variants>
    <Variants minWidth="100%" title="Long heading">
      <Variant label="Wraps">
        <Heading as="p" level="1">
          A long heading that wraps onto a second line when there is no room for it on one line
        </Heading>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Default = (args: HeadingProps) => (
  <Stack space="small">
    <Heading {...args}>{args.children || 'This is a heading'}</Heading>
  </Stack>
);

export const All = () => (
  <Stack space="small">
    <Heading level="1">Heading 1</Heading>
    <Heading level="2">Heading 2</Heading>
    <Heading level="3">Heading 3</Heading>
    <Heading level="4">Heading 4</Heading>
  </Stack>
);

import { Stack, StackProps, validStackComponents } from './Stack';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Space } from '../../css/atoms/atoms';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

const spaces: Space[] = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'];

export default {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    controls: {
      include: ['as', 'childWrapperAs', 'space', 'horizontal', 'alignItems', 'justifyContent', 'className'],
    },
  },
  argTypes: {
    as: {
      options: validStackComponents,
      control: { type: 'select' },
    },
    childWrapperAs: {
      options: ['div', 'span', 'li'],
      control: { type: 'select' },
    },
    space: {
      options: spaces,
      control: { type: 'select' },
    },
    horizontal: {
      control: { type: 'boolean' },
    },
    alignItems: {
      options: ['flexStart', 'center', 'flexEnd'],
      control: { type: 'select' },
    },
    justifyContent: {
      options: ['flexStart', 'center', 'flexEnd', 'spaceBetween'],
      control: { type: 'select' },
    },
    className: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    as: 'div',
    childWrapperAs: 'div',
    space: 'medium',
    horizontal: false,
  },
};

const Item = ({ children }: { children: string }) => (
  <Box
    alignItems="center"
    backgroundColor="primary25"
    borderColor="primary100"
    borderWidth="small"
    color="primary110"
    display="flex"
    justifyContent="center"
    paddingX="small"
    paddingY="xsmall"
  >
    <Text>{children}</Text>
  </Box>
);

const items = ['Item 1', 'Item 2', 'Item 3'];

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="140px" title="Space (vertical)">
      {spaces.map((space) => (
        <Variant key={space} label={space}>
          <Stack space={space}>
            {items.map((item) => (
              <Item key={item}>{item}</Item>
            ))}
          </Stack>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="100%" title="Horizontal">
      {spaces.map((space) => (
        <Variant key={space} label={space}>
          <Stack horizontal space={space}>
            {items.map((item) => (
              <Item key={item}>{item}</Item>
            ))}
          </Stack>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="200px" title="Alignment">
      <Variant label='alignItems="center"'>
        <Stack alignItems="center" space="small">
          <Item>Short</Item>
          <Item>A longer item</Item>
        </Stack>
      </Variant>
      <Variant label='alignItems="flexEnd"'>
        <Stack alignItems="flexEnd" space="small">
          <Item>Short</Item>
          <Item>A longer item</Item>
        </Stack>
      </Variant>
      <Variant label='horizontal, justifyContent="spaceBetween"'>
        <Stack horizontal justifyContent="spaceBetween" space="small">
          <Item>One</Item>
          <Item>Two</Item>
        </Stack>
      </Variant>
    </Variants>
    <Variants minWidth="200px" title="List and falsy children">
      <Variant label='as="ul", childWrapperAs="li"'>
        <Stack as="ul" childWrapperAs="li" space="small">
          {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Stack>
      </Variant>
      <Variant label="null and false children leave no gap">
        <Stack space="small">
          <Item>Item 1</Item>
          {null}
          {false}
          <Item>Item 2</Item>
        </Stack>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Default = (args: StackProps) => (
  <Stack {...args}>
    {[...Array(5)].map((x, i) => (
      <Box
        alignItems="center"
        backgroundColor="primary25"
        borderColor="primary100"
        borderWidth="small"
        color="primary110"
        display="flex"
        justifyContent="center"
        // The items never change order
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        padding="medium"
      >
        <Text>Item {i + 1}</Text>
      </Box>
    ))}
  </Stack>
);

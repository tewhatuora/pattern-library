import { vars } from '../../themes/vars.css';

import { Column } from '../Columns/Column';
import { Row } from '../Columns/Row';
import { Card, CardProps } from './Card';
import { Text } from '../Text/Text';
import { Stack } from '../Stack/Stack';

import { Container } from '../Container/Container';
import DocsPage from '../../../utils/DocsPage';

import Docs from './Card.docs.mdx';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

export default {
  title: 'Transactional Components/Card',
  component: Card,
  argTypes: {
    noShadow: {
      control: { type: 'boolean' },
    },
    children: {
      control: false,
    },
    className: {
      control: {
        type: 'text',
      },
    },
    border: {
      control: {
        type: 'select',
      },
      options: [undefined, ...Object.keys(vars.color)].filter((color) => color !== 'semantic'),
    },
  },
  args: {
    noShadow: false,
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

const shortText = <Text>Card content groups related information together.</Text>;

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="240px">
      <Variant label="Default">
        <Card>{shortText}</Card>
      </Variant>
      <Variant label="No shadow">
        <Card noShadow>{shortText}</Card>
      </Variant>
    </Variants>
    <Variants minWidth="240px" title="Border colour">
      {(['primary25', 'primary100', 'secondary100', 'tertiary100'] as const).map((border) => (
        <Variant key={border} label={`border="${border}"`}>
          <Card border={border}>{shortText}</Card>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="240px" title="Long content">
      <Variant label="Several paragraphs">
        <Card>
          <Stack space="small">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit nisi, rhoncus non nisi eu, gravida
              dictum ex. Nam posuere erat eu dui fringilla congue.
            </Text>
            <Text>
              Aliquam erat volutpat. Pellentesque consequat erat ante, sed cursus augue dapibus at. Donec mauris nisl,
              euismod eu arcu vel, rutrum suscipit massa.
            </Text>
          </Stack>
        </Card>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Single = (args: CardProps) => {
  return (
    <Card {...args}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit nisi, rhoncus non nisi eu, gravida dictum ex.
        Nam posuere erat eu dui fringilla congue. Sed nunc magna, placerat in vehicula ut, lobortis a mauris. Morbi
        lacinia ex eu tortor vulputate ultricies. In lectus nulla, mattis at neque id, imperdiet fringilla arcu. In in
        risus pulvinar enim sollicitudin tempus.
      </Text>
      <Text>
        Aliquam erat volutpat. Pellentesque consequat erat ante, sed cursus augue dapibus at. Donec mauris nisl, euismod
        eu arcu vel, rutrum suscipit massa. Duis placerat bibendum lobortis. Integer mollis erat a odio facilisis, ac
        tempor nunc posuere. Phasellus tristique arcu id nulla scelerisque, non vestibulum velit venenatis.
      </Text>
    </Card>
  );
};

export const GridLayout = (args: CardProps) => {
  const child = (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit nisi, rhoncus non nisi eu, gravida dictum ex.
      Nam posuere erat eu dui fringilla congue.
    </Text>
  );

  return (
    <Container>
      <Stack space="medium">
        <Row>
          <Column columns={12}>
            <Card {...args}>{child}</Card>
          </Column>
        </Row>
        <Row>
          <Column columns={6}>
            <Card {...args}>{child}</Card>
          </Column>
          <Column columns={6}>
            <Card {...args}>{child}</Card>
          </Column>
        </Row>
        <Row>
          <Column columns={4}>
            <Card {...args}>{child}</Card>
          </Column>
          <Column columns={4}>
            <Card {...args}>{child}</Card>
          </Column>
          <Column columns={4}>
            <Card {...args}>{child}</Card>
          </Column>
        </Row>
        <Row>
          <Column columns={3}>
            <Card {...args}>{child}</Card>
          </Column>
          <Column columns={3}>
            <Card {...args}>{child}</Card>
          </Column>
          <Column columns={3}>
            <Card {...args}>{child}</Card>
          </Column>
          <Column columns={3}>
            <Card {...args}>{child}</Card>
          </Column>
        </Row>
      </Stack>
    </Container>
  );
};

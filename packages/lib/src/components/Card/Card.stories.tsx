import { vars } from '../../themes/vars.css';

import { Column } from '../Columns/Column';
import { Row } from '../Columns/Row';
import { Card, CardProps } from './Card';
import { Text } from '../Text/Text';
import { Stack } from '../Stack/Stack';

import { Container } from '../Container/Container';
import DocsPage from '../../../utils/DocsPage';

import Docs from './Card.docs.mdx';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
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
    variant: {
      control: {
        type: 'radio',
        options: ['light', 'dark'],
      },
      options: ['light', 'dark'],
      defaultValue: 'light',
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

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

import React from 'react';

import { Columns, ColumnsProps } from './Columns';
import { Column, ColumnProps } from './Column';
import { Text } from '../Text/Text';
import { Heading } from '../Heading/Heading';

export default {
  title: 'Layout/Columns',
  component: Columns,
};

const Example = (props) => (
  <div
    style={{
      padding: '2rem 0',
      backgroundColor: '#eaeaea',
    }}
  >
    <Text align="center" as="div">
      {props.children}
    </Text>
  </div>
);

export const Grid = (args: ColumnsProps) => {
  return (
    <div style={{ paddingTop: '2rem', paddingBottom: '2rem', backgroundColor: '#ccc' }}>
      <Columns {...args}>
        <Column columns={12}>
          <Example>12</Example>
        </Column>
      </Columns>

      <Columns {...args}>
        <Column columns={6}>
          <Example>6</Example>
        </Column>
        <Column columns={6}>
          <Example>6</Example>
        </Column>
      </Columns>

      <Columns {...args}>
        <Column columns={4}>
          <Example>4</Example>
        </Column>
        <Column columns={4}>
          <Example>4</Example>
        </Column>
        <Column columns={4}>
          <Example>4</Example>
        </Column>
      </Columns>

      <Columns {...args}>
        <Column columns={3}>
          <Example>3</Example>
        </Column>
        <Column columns={3}>
          <Example>3</Example>
        </Column>
        <Column columns={3}>
          <Example>3</Example>
        </Column>
        <Column columns={3}>
          <Example>3</Example>
        </Column>
      </Columns>
    </div>
  );
};

export const NoGutters = (args: ColumnsProps) => {
  return (
    <div style={{ paddingTop: '2rem', paddingBottom: '2rem', backgroundColor: '#ccc' }}>
      <Columns {...args}>
        <Column columns={12} noGutters>
          <Example>12</Example>
        </Column>
      </Columns>

      <Columns {...args}>
        <Column columns={6} noGutters>
          <Example>6</Example>
        </Column>
        <Column columns={6} noGutters>
          <Example>6</Example>
        </Column>
      </Columns>

      <Columns {...args}>
        <Column columns={4} noGutters>
          <Example>4</Example>
        </Column>
        <Column columns={4} noGutters>
          <Example>4</Example>
        </Column>
        <Column columns={4} noGutters>
          <Example>4</Example>
        </Column>
      </Columns>

      <Columns {...args}>
        <Column columns={3} noGutters>
          <Example>3</Example>
        </Column>
        <Column columns={3} noGutters>
          <Example>3</Example>
        </Column>
        <Column columns={3} noGutters>
          <Example>3</Example>
        </Column>
        <Column columns={3} noGutters>
          <Example>3</Example>
        </Column>
      </Columns>
    </div>
  );
};

const Card = (props) => (
  <div
    style={{
      padding: '2rem 0',
      borderRadius: '0.8rem',
      boxShadow: '0rem 0.4rem 3rem 0rem #4040401a',
      backgroundColor: '#fff',
    }}
  >
    {props.children}
  </div>
);
export const LayoutExample = () => {
  return (
    <div style={{ padding: '10rem 0', backgroundColor: '#f8f7ff' }}>
      <Columns>
        <Column columns={8}>
          <Heading level={2}>Heading</Heading>
          <Card>
            <Columns>
              <Column center columns={6}>
                <Heading level={3}>Heading</Heading>
                <Text as="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient sit consequat nisl, lectus sed
                  sit. Dui turpis vestibulum, scelerisque tristique amet augue facilisis. Turpis dignissim duis maecenas
                  facilisis. Dictumst quam orci eu venenatis in et faucibus ut diam. Pharetra turpis arcu, sed imperdiet
                  volutpat.
                </Text>
              </Column>
            </Columns>
          </Card>
          <Column center columns={6}>
            <Text as="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient sit consequat nisl, lectus sed sit.
              Dui turpis vestibulum, scelerisque tristique amet augue facilisis. Turpis dignissim duis maecenas
              facilisis. Dictumst quam orci eu venenatis in et faucibus ut diam. Pharetra turpis arcu, sed imperdiet
              volutpat.
            </Text>
          </Column>
        </Column>
        <Column columns={4}>
          <Heading level={2}>Heading</Heading>
          <Card>
            <Text align="center" as="div">
              Lorem ipsum dolor sit amet,
            </Text>
          </Card>
        </Column>
      </Columns>
      <hr />

      <Columns>
        <Column columns={6} push={1}>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient sit consequat nisl, lectus sed sit. Dui
            turpis vestibulum, scelerisque tristique amet augue facilisis. Turpis dignissim duis maecenas facilisis.
            Dictumst quam orci eu venenatis in et faucibus ut diam. Pharetra turpis arcu, sed imperdiet volutpat.
          </Text>
        </Column>
      </Columns>
    </div>
  );
};

`






























`;

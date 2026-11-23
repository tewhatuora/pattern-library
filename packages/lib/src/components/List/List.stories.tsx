import { List } from './List';
import { ListRootProps } from './Root';
import { ContrastWrapper } from '../Storybook/ContrastWrapper';
import Docs from './List.docs.mdx';

import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

export default {
  title: 'Patterns/List',
  component: List.Root,
  subcomponents: {
    Root: List.Root,
    Item: List.Item,
    Link: List.Link,
  },
  argTypes: {
    type: {
      options: ['ul', 'ol'],
      control: { type: 'radio' },
    },
    noMarkers: {
      control: { type: 'boolean' },
    },
    dividers: {
      control: { type: 'boolean' },
    },
    dividersNoTop: {
      control: { type: 'boolean' },
      if: { arg: 'dividers' },
    },
    dividersNoBottom: {
      control: { type: 'boolean' },
      if: { arg: 'dividers' },
    },
    className: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  args: {
    type: 'ul',
    noMarkers: false,
    dividers: false,
    dividersNoTop: false,
    dividersNoBottom: false,
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

// An array rather than a component, since List.Root passes its divider classes to each direct child
const items = ['First item', 'Second item', 'Third item'].map((item) => <List.Item key={item}>{item}</List.Item>);

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="150px" title="Type and markers">
      <Variant label='type="ul"'>
        <List.Root type="ul">{items}</List.Root>
      </Variant>
      <Variant label='type="ol"'>
        <List.Root type="ol">{items}</List.Root>
      </Variant>
      <Variant label="noMarkers">
        <List.Root noMarkers type="ul">
          {items}
        </List.Root>
      </Variant>
      <Variant label="Nested">
        <List.Root type="ul">
          <List.Item>Item</List.Item>
          <List.Root type="ol">
            <List.Item>Nested item</List.Item>
            <List.Item>Nested item</List.Item>
          </List.Root>
          <List.Item>Item</List.Item>
        </List.Root>
      </Variant>
    </Variants>
    <Variants minWidth="150px" title="Dividers">
      <Variant label="dividers">
        <List.Root dividers type="ul">
          {items}
        </List.Root>
      </Variant>
      <Variant label="dividersNoTop">
        <List.Root dividers dividersNoTop type="ul">
          {items}
        </List.Root>
      </Variant>
      <Variant label="dividersNoBottom">
        <List.Root dividers dividersNoBottom type="ul">
          {items}
        </List.Root>
      </Variant>
      <Variant label="dividers, ol">
        <List.Root dividers type="ol">
          {items}
        </List.Root>
      </Variant>
    </Variants>
    <Variants minWidth="260px" title="Items">
      <Variant label="Icon left">
        <List.Root noMarkers type="ul">
          <List.Item icon="tick">Included</List.Item>
          <List.Item icon="cross">Not included</List.Item>
        </List.Root>
      </Variant>
      <Variant label="Icon right">
        <List.Root noMarkers type="ul">
          <List.Item icon="tick" iconPosition="right">
            Included
          </List.Item>
          <List.Item icon="cross" iconPosition="right">
            Not included
          </List.Item>
        </List.Root>
      </Variant>
      <Variant label="Heading">
        <List.Root noMarkers type="ul">
          <List.Item heading="Heading" icon="tick">
            Content
          </List.Item>
          <List.Item heading="Heading">Content without an icon</List.Item>
        </List.Root>
      </Variant>
      <Variant label="Long content wraps">
        <List.Root type="ul">
          <List.Item>A long list item that wraps onto more lines when there is no room for it on one line</List.Item>
          <List.Item>Short item</List.Item>
        </List.Root>
      </Variant>
    </Variants>
    <Variants minWidth="260px" title="Links (List.Link)">
      <Variant label="Links">
        <List.Root noMarkers type="ul">
          <List.Link href="#" icon="chevron_right">
            Link with icon
          </List.Link>
          <List.Link href="#">Link without icon</List.Link>
        </List.Root>
      </Variant>
      <Variant label="Links with dividers and headings">
        <List.Root dividers dividersNoBottom dividersNoTop noMarkers type="ul">
          <List.Link heading="Heading" href="#" icon="chevron_right">
            Link with heading
          </List.Link>
          <List.Link href="#" icon="chevron_right">
            A longer link that wraps onto a second line when space runs out
          </List.Link>
        </List.Root>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Basic = (args: ListRootProps) => {
  return (
    <ContrastWrapper>
      <List.Root {...args}>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
        <List.Item>Item 3</List.Item>
        <List.Item>Item 4</List.Item>
        <List.Item>Item 5</List.Item>
      </List.Root>
    </ContrastWrapper>
  );
};

export const NestedList = (args: ListRootProps) => {
  return (
    <ContrastWrapper>
      <List.Root {...args}>
        <List.Item>Item</List.Item>
        <List.Item>Item</List.Item>
        <List.Root dividers type="ol">
          <List.Item>Item</List.Item>
          <List.Item>Item</List.Item>
          <List.Root dividers type="ul">
            <List.Item>Item</List.Item>
            <List.Item>Item</List.Item>
            <List.Item>Item</List.Item>
            <List.Root type="ol">
              <List.Item>Item</List.Item>
              <List.Item>Item</List.Item>
              <List.Item>Item</List.Item>
              <List.Item>Item</List.Item>
              <List.Item>Item</List.Item>
            </List.Root>
            <List.Item>Item</List.Item>
          </List.Root>
          <List.Item>Item</List.Item>
        </List.Root>
        <List.Item>Item</List.Item>
        <List.Item>Item</List.Item>
      </List.Root>
    </ContrastWrapper>
  );
};

export const Headings = (args: ListRootProps) => {
  return (
    <ContrastWrapper>
      <List.Root {...args}>
        <List.Item heading="Heading" icon="tick">
          Content
        </List.Item>
        <List.Item heading="A decently long heading that shows what a long heading would look like" icon="tick">
          Item 2 that is also longer to show long content
        </List.Item>
        <List.Item heading="Heading" icon="cross">
          Item 3
        </List.Item>
      </List.Root>
    </ContrastWrapper>
  );
};
Headings.args = { noMarkers: true };

export const Icons = (args: ListRootProps) => {
  return (
    <ContrastWrapper>
      <List.Root {...args}>
        <List.Item icon="alert">Item</List.Item>
        <List.Item icon="tick">Item</List.Item>
        <List.Item icon="cross">Item</List.Item>
      </List.Root>
    </ContrastWrapper>
  );
};
Icons.args = { noMarkers: true };

export const WrappingLines = (args: ListRootProps) => {
  return (
    <ContrastWrapper>
      <List.Root {...args}>
        <List.Item
          heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis massa sit amet velit ultrices accumsan a sed purus. Ut varius ipsum a purus commodo accumsan. Ut sem quam, dapibus sit amet accumsan in, rutrum eget felis. Etiam pulvinar tempor interdum. In elementum lorem in ornare ullamcorper. Nulla facilisi. Suspendisse."
          icon="tick"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis massa sit amet velit ultrices accumsan a
          sed purus. Ut varius ipsum a purus commodo accumsan. Ut sem quam, dapibus sit amet accumsan in, rutrum eget
          felis. Etiam pulvinar tempor interdum. In elementum lorem in ornare ullamcorper. Nulla facilisi. Suspendisse.
        </List.Item>
        <List.Item icon="tick">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis massa sit amet velit ultrices accumsan a
          sed purus. Ut varius ipsum a purus commodo accumsan. Ut sem quam, dapibus sit amet accumsan in, rutrum eget
          felis. Etiam pulvinar tempor interdum. In elementum lorem in ornare ullamcorper. Nulla facilisi. Suspendisse.
        </List.Item>
        <List.Root dividers type="ol">
          <List.Item>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis massa sit amet velit ultrices accumsan a
            sed purus. Ut varius ipsum a purus commodo accumsan. Ut sem quam, dapibus sit amet accumsan in, rutrum eget
            felis. Etiam pulvinar tempor interdum. In elementum lorem in ornare ullamcorper. Nulla facilisi.
            Suspendisse.
          </List.Item>
        </List.Root>
      </List.Root>
    </ContrastWrapper>
  );
};

export const LinkLists = (args: ListRootProps) => {
  return (
    <ContrastWrapper>
      <List.Root {...args}>
        <List.Link href="#" icon="tick">
          First link
        </List.Link>
        <List.Link href="#" icon="alert">
          Secondary link
        </List.Link>
        <List.Link href="#" icon="tick">
          Third link that is a bit longer lorem ipsum dolor set amet
        </List.Link>
        <List.Link href="#">Forth link with no icon</List.Link>
      </List.Root>
    </ContrastWrapper>
  );
};

export const LinkListsDivider = (args: ListRootProps) => {
  return (
    <ContrastWrapper>
      <List.Root dividers dividersNoBottom dividersNoTop noMarkers {...args}>
        <List.Link href="#" icon="tick">
          First link
        </List.Link>
        <List.Link href="#" icon="alert">
          Secondary link
        </List.Link>
        <List.Link href="#" icon="tick">
          Third link that is a bit longer lorem ipsum dolor set amet
        </List.Link>
        <List.Link href="#">Forth link with no icon</List.Link>
      </List.Root>
    </ContrastWrapper>
  );
};
WrappingLines.args = { noMarkers: true };

import { List } from './List';
import { ListRootProps } from './Root';
import Docs from './List.docs.mdx';

import DocsPage from '../../../utils/DocsPage';

export default {
  title: 'Components/List',
  component: List.Root,
  subcomponents: {
    Root: List.Root,
    Item: List.Item,
  },
  args: {
    type: 'ul',
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Basic = (args: ListRootProps) => {
  return (
    <List.Root {...args}>
      <List.Item>Item 1</List.Item>
      <List.Item>Item 2</List.Item>
      <List.Item>Item 3</List.Item>
      <List.Item>Item 4</List.Item>
      <List.Item>Item 5</List.Item>
    </List.Root>
  );
};

export const NestedList = (args: ListRootProps) => {
  return (
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
  );
};

export const Headings = (args: ListRootProps) => {
  return (
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
  );
};
Headings.args = { noMarkers: true };

export const Icons = (args: ListRootProps) => {
  return (
    <List.Root {...args}>
      <List.Item icon="alert">Item</List.Item>
      <List.Item icon="tick">Item</List.Item>
      <List.Item icon="cross">Item</List.Item>
    </List.Root>
  );
};
Icons.args = { noMarkers: true };

export const WrappingLines = (args: ListRootProps) => {
  return (
    <List.Root {...args}>
      <List.Item
        heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis massa sit amet velit ultrices accumsan a sed purus. Ut varius ipsum a purus commodo accumsan. Ut sem quam, dapibus sit amet accumsan in, rutrum eget felis. Etiam pulvinar tempor interdum. In elementum lorem in ornare ullamcorper. Nulla facilisi. Suspendisse."
        icon="tick"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis massa sit amet velit ultrices accumsan a sed
        purus. Ut varius ipsum a purus commodo accumsan. Ut sem quam, dapibus sit amet accumsan in, rutrum eget felis.
        Etiam pulvinar tempor interdum. In elementum lorem in ornare ullamcorper. Nulla facilisi. Suspendisse.
      </List.Item>
      <List.Item icon="tick">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis massa sit amet velit ultrices accumsan a sed
        purus. Ut varius ipsum a purus commodo accumsan. Ut sem quam, dapibus sit amet accumsan in, rutrum eget felis.
        Etiam pulvinar tempor interdum. In elementum lorem in ornare ullamcorper. Nulla facilisi. Suspendisse.
      </List.Item>
      <List.Root dividers type="ol">
        <List.Item>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis massa sit amet velit ultrices accumsan a
          sed purus. Ut varius ipsum a purus commodo accumsan. Ut sem quam, dapibus sit amet accumsan in, rutrum eget
          felis. Etiam pulvinar tempor interdum. In elementum lorem in ornare ullamcorper. Nulla facilisi. Suspendisse.
        </List.Item>
      </List.Root>
    </List.Root>
  );
};
WrappingLines.args = { noMarkers: true };

import { useState } from 'react';

import { DialogProps } from './Root';
import { Dialog } from './Dialog';

import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import icons from '../Icon/icons';
import Docs from './Dialog.docs.mdx';

import DocsPage from '../../../utils/DocsPage';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  subcomponents: {
    Root: Dialog.Root,
    Content: Dialog.Content,
    Actions: Dialog.Actions,
    Action: Dialog.Action,
  },
  argTypes: {
    icon: {
      options: ['', ...Object.keys(icons)],
      control: { type: 'select' },
    },
    heading: {
      control: {
        type: 'text',
      },
    },
    subheading: {
      control: {
        type: 'text',
      },
    },
    trigger: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  args: {
    icon: 'alert',
    heading: 'Heading',
    subheading: 'Subheading',
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

const content = (
  <Dialog.Content>
    <Text as="p">This is some dialog content</Text>
  </Dialog.Content>
);
const actions = (
  <Dialog.Actions>
    <Dialog.Action variant="secondary">Secondary</Dialog.Action>
    <Dialog.Action variant="tertiary">Tertiary</Dialog.Action>
    <Dialog.Action variant="primary">Primary</Dialog.Action>
  </Dialog.Actions>
);

export const Uncontrolled = (args: DialogProps) => (
  <Dialog.Root
    {...args}
    trigger={<Button>Open</Button>}
    onOpenChange={(open) => {
      alert(`Dialog open = ${open}`);
    }}
  >
    {content}
    {actions}
  </Dialog.Root>
);

export const Controlled = (args: DialogProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Dialog.Root
        {...args}
        open={open}
        onOpenChange={(open: boolean) => {
          setOpen(open);
        }}
      >
        {content}
        {actions}
      </Dialog.Root>
      <Checkbox checked={open} id="trigger" label="Trigger" onCheckedChange={() => setOpen(!open)} />
    </div>
  );
};

export const DefaultOpen = (args: DialogProps) => {
  return (
    <Dialog.Root {...args} defaultOpen trigger={<Button>Open</Button>}>
      {content}
      {actions}
    </Dialog.Root>
  );
};

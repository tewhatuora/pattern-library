import { useState } from 'react';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { DialogProps } from './Root';
import { Dialog } from './Dialog';
import * as styles from './Dialog.css';

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

const onTriggerPress = fn();
const onOpenChange = fn();
const showExtraContent = false;

/**
 * The trigger keeps its own onPress, each open and close is reported once,
 * and a conditional child that isn't rendered doesn't break the dialog
 */
export const TriggerCallbacks = (args: DialogProps) => (
  <Dialog.Root {...args} trigger={<Button onPress={onTriggerPress}>Open</Button>} onOpenChange={onOpenChange}>
    {content}
    {showExtraContent && <Dialog.Content>Extra content</Dialog.Content>}
    {actions}
  </Dialog.Root>
);

TriggerCallbacks.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  onTriggerPress.mockClear();
  onOpenChange.mockClear();
  const body = within(canvasElement.ownerDocument.body);

  await userEvent.click(within(canvasElement).getByRole('button', { name: 'Open' }));
  await expect(await body.findByRole('dialog')).toBeInTheDocument();
  await expect(onTriggerPress).toHaveBeenCalledTimes(1);
  await expect(onOpenChange).toHaveBeenCalledTimes(1);
  await expect(onOpenChange).toHaveBeenLastCalledWith(true);

  // Clicking outside the dialog (on the overlay) closes it, reporting the change once
  await userEvent.click(canvasElement.ownerDocument.querySelector(`.${styles.overlay}`) as HTMLElement);
  await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
  await expect(onOpenChange).toHaveBeenCalledTimes(2);
  await expect(onOpenChange).toHaveBeenLastCalledWith(false);
};

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
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

export default {
  title: 'Patterns/Dialog',
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
    closeLabel: {
      control: { type: 'text' },
    },
    open: {
      control: { type: 'boolean' },
    },
    defaultOpen: {
      control: { type: 'boolean' },
    },
    modal: {
      control: { type: 'boolean' },
    },
    onOpenChange: {
      control: false,
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
    closeLabel: 'Close',
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

/**
 * A dialog renders in a portal over the page, so only one can be seen at a time. The first example opens on load;
 * close it to open the others from their buttons. On the docs page it renders in an iframe, so it doesn't cover the
 * docs.
 */
export const Overview = () => (
  <VariantSections>
    <Variants minWidth="240px" title="Press a button to open each dialog">
      <Variant label="Icon, heading, subheading, content and actions">
        <Dialog.Root
          defaultOpen
          heading="Heading"
          icon="alert"
          subheading="Subheading"
          trigger={<Button variant="secondary">Open full dialog</Button>}
        >
          {content}
          {actions}
        </Dialog.Root>
      </Variant>
      <Variant label="Heading and content, no icon or actions">
        <Dialog.Root heading="Heading" trigger={<Button variant="secondary">Open minimal dialog</Button>}>
          {content}
        </Dialog.Root>
      </Variant>
      <Variant label="Action that closes the dialog">
        <Dialog.Root
          heading="Delete this record?"
          icon="alert"
          trigger={<Button variant="secondary">Open confirmation</Button>}
        >
          <Dialog.Content>
            <Text as="p">This cannot be undone.</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Dialog.Action close variant="tertiary">
              Cancel
            </Dialog.Action>
            <Dialog.Action variant="primary">Delete</Dialog.Action>
          </Dialog.Actions>
        </Dialog.Root>
      </Variant>
      <Variant label="Long content">
        <Dialog.Root
          heading="A long heading that wraps onto a second line when space runs out"
          subheading="A long subheading that also wraps onto another line"
          trigger={<Button variant="secondary">Open long dialog</Button>}
        >
          <Dialog.Content>
            <Text as="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient sit consequat nisl, lectus sed sit.
              Dui turpis vestibulum, scelerisque tristique amet augue facilisis. Turpis dignissim duis maecenas
              facilisis. Dictumst quam orci eu venenatis in et faucibus ut diam. Pharetra turpis arcu, sed imperdiet
              volutpat.
            </Text>
          </Dialog.Content>
          {actions}
        </Dialog.Root>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = {
  controls: { disable: true },
  // In an iframe on the docs page, so the open dialog covers the example rather than the docs
  docs: { story: { inline: false, iframeHeight: 640 } },
};

export const Default = (args: DialogProps) => (
  <Dialog.Root {...args} trigger={<Button>Open</Button>}>
    {content}
    {actions}
  </Dialog.Root>
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

const onCancelPress = fn();
const onCloseActionOpenChange = fn();

/** An action with `close` closes the dialog, and its own `onPress` still runs. `closeLabel` names the close button. */
export const CloseAction = (args: DialogProps) => (
  <Dialog.Root
    {...args}
    closeLabel="Close dialog"
    trigger={<Button>Open</Button>}
    onOpenChange={onCloseActionOpenChange}
  >
    {content}
    <Dialog.Actions>
      <Dialog.Action variant="primary">Save</Dialog.Action>
      <Dialog.Action close variant="tertiary" onPress={onCancelPress}>
        Cancel
      </Dialog.Action>
    </Dialog.Actions>
  </Dialog.Root>
);

CloseAction.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  onCancelPress.mockClear();
  onCloseActionOpenChange.mockClear();
  const body = within(canvasElement.ownerDocument.body);

  await userEvent.click(within(canvasElement).getByRole('button', { name: 'Open' }));
  const dialog = await body.findByRole('dialog');
  await expect(within(dialog).getByRole('button', { name: 'Close dialog' })).toBeInTheDocument();

  // An action without `close` leaves the dialog open
  await userEvent.click(within(dialog).getByRole('button', { name: 'Save' }));
  await expect(body.getByRole('dialog')).toBeInTheDocument();

  await userEvent.click(within(dialog).getByRole('button', { name: 'Cancel' }));
  await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
  await expect(onCancelPress).toHaveBeenCalledTimes(1);
  await expect(onCloseActionOpenChange).toHaveBeenLastCalledWith(false);
};

import { expect, within } from 'storybook/test';

import { Tooltip, TooltipProps } from './Tooltip';
import { Notice } from '../Notice/Notice';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import { InputLabel } from '../InputLabel/InputLabel';
import { AnchorLink } from '../AnchorLink/AnchorLink';
import { Accordion } from '../Accordion/Accordion';
import { Dialog } from '../Dialog/Dialog';
import DocsPage from '../../../utils/DocsPage';
import { ContrastWrapper } from '../Storybook/ContrastWrapper';

import Docs from './Tooltip.docs.mdx';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    content: {
      control: 'text',
    },
    onOpenChange: {
      control: false,
    },
    open: {
      control: 'boolean',
    },
    defaultOpen: {
      control: 'boolean',
    },

    delayDuration: {
      control: 'number',
    },
    skipDelayDuration: {
      control: 'number',
    },
    triggerOpenOnClick: {
      control: 'boolean',
    },
  },
  args: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
    layout: 'padded',
  },
};

export const Default = (args: TooltipProps) => (
  <Tooltip {...args}>
    <Text>Trigger tooltip</Text>
  </Tooltip>
);
Default.parameters = {
  layout: 'centered',
};

export const Trigger = (args: TooltipProps) => (
  <Text weight="bold">
    Tooltip Example
    <Tooltip {...args}>
      <Icon alt="More information" color="primary100" icon="info" variant="functionalIcons" />
    </Tooltip>
  </Text>
);

export const Below = (args: TooltipProps) => (
  <Tooltip {...args}>
    <Text>Trigger tooltip</Text>
  </Tooltip>
);

export const Left = (args: TooltipProps) => (
  <Text align="right">
    <Tooltip {...args}>
      <Text align="right">Trigger tooltip</Text>
    </Tooltip>
  </Text>
);

export const InputLabelExample = () => (
  <InputLabel
    label="Heading"
    subheading="Subheading"
    tertiaryLabel="Tooltip Example"
    tertiaryLabelTooltip="Lorem ipsum dolor sit amet, consectetur adipiscing"
  />
);

export const NoticeExample = (args: TooltipProps) => (
  <Tooltip {...args}>
    <Notice label="Heading" variant="positive" />
  </Tooltip>
);

export const BadgeExample = (args: TooltipProps) => (
  <Tooltip {...args}>
    <Badge variant="positive">badge</Badge>
  </Tooltip>
);

export const ButtonExample = (args: TooltipProps) => (
  <Tooltip {...args} triggerAsChild>
    <Button variant="primary">Trigger tooltip</Button>
  </Tooltip>
);

export const AnchorLinkExample = (args: TooltipProps) => (
  <Tooltip {...args} triggerAsChild>
    <AnchorLink to="#">Trigger tooltip</AnchorLink>
  </Tooltip>
);

/** The link forwards its ref, so the tooltip is positioned next to it rather than at the top left of the page */
AnchorLinkExample.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const link = within(canvasElement).getByRole('link', { name: 'Trigger tooltip' });
  link.focus();
  const tooltip = await within(canvasElement.ownerDocument.body).findByRole('tooltip');
  // Radix renders the visible content beside the trigger; the role="tooltip" element is visually hidden inside it
  const content = tooltip.parentElement as HTMLElement;
  const gap = (a: DOMRect, b: DOMRect) =>
    Math.max(a.top - b.bottom, b.top - a.bottom, a.left - b.right, b.left - a.right);
  await expect(gap(content.getBoundingClientRect(), link.getBoundingClientRect())).toBeLessThan(40);
};

export const AccordionExample = (args: TooltipProps) => (
  <ContrastWrapper variant="light">
    <Accordion.Root headingLevel={3} type="single" variant="light">
      <Accordion.Item value="item-1">
        <Accordion.Trigger header="Header" icon="document" label="Label" />
        <Accordion.Content>
          <Tooltip {...args} content="This is a tooltip" side="bottom">
            <Text>Hover for tooltip</Text>
          </Tooltip>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  </ContrastWrapper>
);

export const DialogExample = (args: TooltipProps) => {
  return (
    <Dialog.Root defaultOpen heading="Dialog heading" trigger={<Button>Open</Button>}>
      <Dialog.Content>
        <Tooltip {...args}>
          <Text>This is a tooltip</Text>
        </Tooltip>
      </Dialog.Content>
    </Dialog.Root>
  );
};

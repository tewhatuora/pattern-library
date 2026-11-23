import { ReactNode } from 'react';
import { expect, fn, within } from 'storybook/test';

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
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import Docs from './Tooltip.docs.mdx';

export default {
  title: 'Transactional Components/Tooltip',
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
    triggerAsChild: {
      control: 'boolean',
    },
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'radio' },
    },
    align: {
      options: ['start', 'center', 'end'],
      control: { type: 'radio' },
    },
    alignOffset: {
      control: 'number',
    },
    sticky: {
      options: ['partial', 'always'],
      control: { type: 'radio' },
    },
    label: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  args: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    side: 'top',
    align: 'center',
    alignOffset: 0,
    sticky: 'partial',
    delayDuration: 700,
    skipDelayDuration: 300,
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
    layout: 'padded',
  },
};

// Room on the tooltip's side of the trigger, so the open tooltip doesn't cover the caption or the next group
const Stage = ({ side = 'top', children }: { side?: TooltipProps['side']; children: ReactNode }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '48px',
      paddingTop: side === 'top' ? '88px' : 0,
      paddingBottom: side === 'bottom' ? '88px' : 0,
    }}
  >
    {children}
  </div>
);

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="150px" title="Side (shown open)">
      {(['top', 'bottom'] as const).map((side) => (
        <Variant key={side} label={side}>
          <Stage side={side}>
            <Tooltip content="Tooltip" open side={side}>
              <Text>Trigger</Text>
            </Tooltip>
          </Stage>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="300px">
      {(['right', 'left'] as const).map((side) => (
        <Variant key={side} label={side}>
          <Stage side={side}>
            <Tooltip content="Tooltip" open side={side}>
              <Text>Trigger</Text>
            </Tooltip>
          </Stage>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="240px" title="Align (side top, shown open)">
      {(['start', 'center', 'end'] as const).map((align) => (
        <Variant key={align} label={align}>
          <Stage>
            <Tooltip align={align} content="Aligned tooltip text" open>
              <Text>Trigger text</Text>
            </Tooltip>
          </Stage>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="300px" title="Long content (shown open, wraps at its max width)">
      <Variant label="Long content">
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '160px' }}>
          <Tooltip
            content="A longer tooltip that wraps onto several lines when it reaches its maximum width. Keep tooltips short and supplementary."
            open
          >
            <Text>Trigger</Text>
          </Tooltip>
        </div>
      </Variant>
    </Variants>
    <Variants minWidth="200px" title="Triggers (closed; hover or focus to open)">
      <Variant label="Text">
        <Tooltip content="Tooltip on text">
          <Text>Trigger tooltip</Text>
        </Tooltip>
      </Variant>
      <Variant label="Icon">
        <Tooltip content="Tooltip on an icon">
          <Icon alt="More information" color="primary100" icon="info" variant="functionalIcons" />
        </Tooltip>
      </Variant>
      <Variant label="Button (triggerAsChild)">
        <Tooltip content="Tooltip on a button" triggerAsChild>
          <Button variant="secondary">Trigger tooltip</Button>
        </Tooltip>
      </Variant>
      <Variant label="Link (triggerAsChild)">
        <Tooltip content="Tooltip on a link" triggerAsChild>
          <AnchorLink to="#">Trigger tooltip</AnchorLink>
        </Tooltip>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

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
Below.args = { side: 'bottom' };

export const Left = (args: TooltipProps) => (
  <Text align="right">
    <Tooltip {...args}>
      <Text align="right">Trigger tooltip</Text>
    </Tooltip>
  </Text>
);
Left.args = { side: 'left' };

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

// Explicit handler: the play function opens the tooltip, and Storybook fails a play function that calls an implicit action
AnchorLinkExample.args = { onOpenChange: fn() };

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

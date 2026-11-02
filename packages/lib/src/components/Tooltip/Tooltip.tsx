import { PropsWithChildren, useState } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';

import { Text } from '../Text/Text';
import { useTheme } from '../ThemeProvider/ThemeContext';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';

import * as styles from './Tooltip.css';

export const TooltipStyles = styles;

export type TooltipProps = {
  /** Plain text. Keep it supplementary: it only shows on hover or focus, and on click with `triggerOpenOnClick`. */
  content: string;
  /**
   * Milliseconds the pointer must rest on the trigger before the tooltip opens.
   * @default 700
   */
  delayDuration?: number;
  /**
   * Milliseconds after one tooltip closes during which moving to another trigger opens it immediately.
   * @default 300
   */
  skipDelayDuration?: number;
  /** Open on first render, when the open state isn't controlled with `open`. */
  defaultOpen?: boolean;
  /** Controlled open state. Pair with `onOpenChange`. */
  open?: boolean;
  /** Called when the tooltip opens or closes, whether or not it's controlled. */
  onOpenChange?: (open: boolean) => void;
  /**
   * @deprecated No longer used. It replaced the tooltip `content` for screen readers, so the content was never announced.
   * Give an icon-only trigger its own accessible name instead.
   */
  label?: string;
  /**
   * `partial` keeps the tooltip on screen while any of the trigger is visible. `always` keeps it on screen
   * even when the trigger has scrolled out.
   * @default 'partial'
   */
  sticky?: 'partial' | 'always';
  /**
   * Preferred side of the trigger. Flips to the opposite side if there isn't room.
   * @default 'top'
   */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * Alignment along the side. May shift if there isn't room.
   * @default 'center'
   */
  align?: 'start' | 'center' | 'end';
  /**
   * Pixels to shift the tooltip from its `start` or `end` alignment.
   * @default 0
   */
  alignOffset?: number;
  /**
   * Use the single child element as the trigger, instead of wrapping it in a `button`. Set it when the child
   * is already a button or link, to avoid nesting interactive elements. The child must accept a ref.
   */
  triggerAsChild?: boolean;
  /**
   * Also open on click or tap, since touch screens have no hover. It calls `preventDefault`, so don't use it
   * on a link or submit button. May not work together with `triggerAsChild`.
   */
  triggerOpenOnClick?: boolean;
};

/**
 * A short text hint shown when the trigger is hovered or focused. The children are wrapped in a `button`
 * that acts as the trigger, unless `triggerAsChild` is set. The tooltip uses the current theme, even though it
 * renders in a portal.
 *
 * @example
 * <Tooltip content="Your National Health Index number">NHI</Tooltip>
 */
export const Tooltip = ({
  delayDuration = 700,
  skipDelayDuration = 300,
  defaultOpen,
  open: openProp,
  onOpenChange,
  content,
  sticky = 'partial',
  side = 'top',
  align = 'center',
  alignOffset = 0,
  triggerAsChild,
  children,
  triggerOpenOnClick,
}: PropsWithChildren<TooltipProps>) => {
  const theme = useTheme();
  // Portal into an element next to the trigger. Only the portal waits for it, so the trigger is server rendered.
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [uncontrolledOpen, setUncontrolledOpen] = useState<boolean>(!!defaultOpen);
  const isControlled = openProp !== undefined;
  const isOpen = isControlled ? openProp : uncontrolledOpen;

  const setOpen = (open: boolean) => {
    if (!isControlled) {
      setUncontrolledOpen(open);
    }
    onOpenChange?.(open);
  };

  return (
    <>
      <div ref={setContainer} />
      <RadixTooltip.Provider delayDuration={delayDuration} skipDelayDuration={skipDelayDuration}>
        <RadixTooltip.Root delayDuration={delayDuration} open={isOpen} onOpenChange={setOpen}>
          <RadixTooltip.Trigger
            asChild={triggerAsChild}
            className={styles.trigger}
            onClick={
              triggerOpenOnClick
                ? (e) => {
                    e.preventDefault();
                    setOpen(true);
                  }
                : undefined
            }
          >
            {children}
          </RadixTooltip.Trigger>
          {!!container && (
            <RadixTooltip.Portal container={container}>
              <RadixTooltip.Content
                align={align}
                alignOffset={alignOffset}
                avoidCollisions
                hideWhenDetached
                side={side}
                sideOffset={4}
                sticky={sticky}
              >
                <ThemeProvider theme={theme}>
                  <div className={styles.content}>
                    <Text className={styles.text} size="medium" weight="regular">
                      {content}
                    </Text>
                  </div>
                  <RadixTooltip.Arrow className={styles.arrow} height={12} width={16} />
                </ThemeProvider>
              </RadixTooltip.Content>
            </RadixTooltip.Portal>
          )}
        </RadixTooltip.Root>
      </RadixTooltip.Provider>
    </>
  );
};

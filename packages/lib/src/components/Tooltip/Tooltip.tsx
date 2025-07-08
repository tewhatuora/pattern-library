import { type CSSProperties, PropsWithChildren, useEffect, useRef, useState } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';

import { Text } from '../Text/Text';
import { useTheme } from '../ThemeProvider/ThemeContext';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';

import * as styles from './Tooltip.css';

export const TooltipStyles = styles;

export type TooltipProps = {
  /** Tooltip content */
  content: string;
  /** The duration from when the mouse enters a tooltip trigger until the tooltip opens.*/
  delayDuration?: number;
  /** How much time a user has to enter another trigger without incurring a delay again. */
  skipDelayDuration?: number;
  /** The open state of the tooltip when it is initially rendered. Use when you do not need to control its open state. */
  defaultOpen?: boolean;
  /** The controlled open state of the tooltip. Must be used in conjunction with onOpenChange. */
  open?: boolean;
  /** Event handler called when the open state of the tooltip changes. */
  onOpenChange?: (open: boolean) => void;
  /** Aria-label for accessibility */
  label: string;
  /** The sticky behavior on the align axis. "partial" will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst "always" will keep the content in the boundary regardless. */
  sticky?: 'partial' | 'always';
  /** The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled.*/
  side?: 'top' | 'right' | 'bottom' | 'left';
  /** The preferred alignment against the trigger. May change when collisions occur. */
  align?: 'start' | 'center' | 'end';
  /** An offset in pixels from the "start" or "end" alignment options. */
  alignOffset?: number;
  /** Change the default rendered trigger element for the one passed as a child, merging their props and behavior. */
  triggerAsChild?: boolean;
  /** Trigger open on click/touch, useful for mobile devices. Warning: The properties triggerAsChild and triggerOpenOnClick are not guaranteed to work together. */
  triggerOpenOnClick?: boolean;
  /** Allow customising the CSS of the tooltip container (Tooltip.Content) */
  tooltipStyle?: CSSProperties;
};

/**
 * Tooltip
 * @param props
 * @constructor
 */
export const Tooltip = ({
  delayDuration = 700,
  skipDelayDuration = 300,
  defaultOpen,
  open: intialOpenValue,
  onOpenChange,
  content,
  label,
  sticky = 'partial',
  side = 'top',
  align = 'center',
  alignOffset = 0,
  triggerAsChild,
  children,
  triggerOpenOnClick,
  tooltipStyle,
}: PropsWithChildren<TooltipProps>) => {
  const theme = useTheme();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref?.current) {
      setIsMounted(true);
    }
  }, [ref]);

  const [isOpen, setIsOpen] = useState<boolean>(!!intialOpenValue);

  return (
    <>
      <div ref={ref} />
      {isMounted && (
        <RadixTooltip.Provider delayDuration={delayDuration} skipDelayDuration={skipDelayDuration}>
          <RadixTooltip.Root
            defaultOpen={defaultOpen}
            delayDuration={delayDuration}
            open={isOpen}
            onOpenChange={(open) => {
              setIsOpen(open);
              onOpenChange?.(open);
            }}
          >
            <RadixTooltip.Trigger
              aria-label="tooltip trigger"
              asChild={triggerAsChild}
              className={styles.trigger}
              onClick={
                triggerOpenOnClick
                  ? (e) => {
                    e.preventDefault();
                    setIsOpen(true);
                  }
                  : undefined
              }
            >
              {children}
            </RadixTooltip.Trigger>
            <RadixTooltip.Portal container={ref?.current}>
              <RadixTooltip.Content
                align={align}
                alignOffset={alignOffset}
                aria-label={label}
                avoidCollisions
                className={styles.contentContainer}
                hideWhenDetached
                side={side}
                sticky={sticky}
                style={tooltipStyle}
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
          </RadixTooltip.Root>
        </RadixTooltip.Provider>
      )}
    </>
  );
};

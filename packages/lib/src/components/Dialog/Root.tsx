import { PropsWithChildren, ReactElement, useMemo } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';

import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { Stack } from '../Stack/Stack';
import { Icon } from '../Icon/Icon';
import { Content } from './Content';
import { Actions } from './Actions';
import { useTheme } from '../ThemeProvider/ThemeContext';
import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Box } from '../Box/Box';

import { useHeading } from '../../hooks/typography';

import { IconType } from '../Icon/icons';

import * as styles from './Dialog.css';

export type DialogProps = {
  /** Decorative icon shown above the heading. */
  icon?: IconType;
  /** Dialog title. It is the dialog's accessible name, so always set it. Without it the `subheading`, or "Dialog", is used. */
  heading?: string;
  /** Smaller line under the heading. Visual only, it is not part of the accessible name or description. */
  subheading?: string;
  /** Element that opens the dialog, usually a `Button`. It must accept a ref and `onClick`. It keeps its own `onPress`/`onClick`; the dialog opens as well. Omit it when you control `open` yourself. */
  trigger?: ReactElement;
  /**
   * Accessible name of the close button.
   * @default 'Close'
   */
  closeLabel?: string;
} & RadixDialog.DialogProps;

/**
 * Modal overlay that prompts users to take or complete an action. Built on the Radix UI Dialog, so `open`,
 * `defaultOpen`, `onOpenChange` and `modal` behave as they do there.
 * Pass `open` with `onOpenChange` to control it, or `defaultOpen` to leave it uncontrolled.
 * A close button is always shown, and Escape closes the dialog. Children can only be `Dialog.Content` and `Dialog.Actions`.
 * The content is rendered in a portal, with the current theme applied.
 *
 * @example
 * <Dialog.Root heading="Delete this record?" trigger={<Button variant="secondary">Delete</Button>}>
 *   <Dialog.Content>This cannot be undone.</Dialog.Content>
 *   <Dialog.Actions>
 *     <Dialog.Action variant="primary" onPress={() => remove()}>Delete</Dialog.Action>
 *     <Dialog.Action close variant="tertiary">Cancel</Dialog.Action>
 *   </Dialog.Actions>
 * </Dialog.Root>
 */
export const Root = ({
  icon,
  heading,
  subheading,
  defaultOpen,
  open,
  onOpenChange,
  modal,
  trigger,
  closeLabel = 'Close',
  children,
}: PropsWithChildren<DialogProps>) => {
  const theme = useTheme();
  const headingClassName = useHeading({ level: '2' });
  const subheadingClassName = useHeading({ level: '4' });

  /**
   * Render trigger. Radix opens the dialog (and calls onOpenChange) from the trigger's onClick,
   * which Button calls alongside its own onPress.
   */
  const renderTrigger = useMemo(() => {
    return !!trigger && <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>;
  }, [trigger]);

  return (
    <RadixDialog.Root defaultOpen={defaultOpen} modal={modal} open={open} onOpenChange={onOpenChange}>
      {renderTrigger}
      <RadixDialog.Portal>
        <ThemeProvider theme={theme}>
          <RadixDialog.Overlay className={styles.overlay} />
          <RadixDialog.Content
            className={styles.dialog}
            // Without a heading the title is empty, so name the dialog from the subheading instead
            {...(!heading && { 'aria-labelledby': undefined, 'aria-label': subheading || 'Dialog' })}
          >
            <RadixDialog.Close aria-label={closeLabel} className={styles.closeButton}>
              <Icon className={styles.icon} icon="cross" variant="functionalIcons" />
            </RadixDialog.Close>
            <Stack alignItems="center" display="flex" flexDirection="column" space="medium">
              {!!icon && <Icon className={styles.icon} icon={icon} variant="decorativeIcons" />}
              <RadixDialog.Title asChild>
                <Box as="span" className={headingClassName}>
                  {heading}
                </Box>
              </RadixDialog.Title>
              {!!subheading && (
                <Box as="span" className={subheadingClassName}>
                  {subheading}
                </Box>
              )}
              <AllowedChildren
                errorMessage="Only `Dialog.Content` and `Dialog.Actions` components are allowed as children of `Dialog.Root`"
                types={[Content, Actions]}
              >
                {children}
              </AllowedChildren>
            </Stack>
          </RadixDialog.Content>
        </ThemeProvider>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

Root.displayName = 'Root';

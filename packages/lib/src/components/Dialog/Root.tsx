import { PropsWithChildren, ReactElement, cloneElement, useMemo } from 'react';
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
  /** Icon to display in the Dialog */
  icon?: IconType;
  /** Dialog heading */
  heading?: string;
  /** Dialog subheading */
  subheading?: string;
  /** Trigger element to open the dialog */
  trigger?: ReactElement;
} & RadixDialog.DialogProps;

/**
 * Dialog
 * Full screen overlay that prompts users
 * to take or complete an action.
 * The Dialog component must be placed
 * on the Background Component
 * @param props
 * @constructor
 */
export const Root = ({
  icon,
  heading,
  subheading,
  defaultOpen,
  open,
  onOpenChange,
  trigger,
  children,
}: PropsWithChildren<DialogProps>) => {
  const theme = useTheme();
  const headingClassName = useHeading({ level: '2' });
  const subheadingClassName = useHeading({ level: '4' });

  /**
   * Render trigger, passing onPress
   * for <Button> components
   */
  const renderTrigger = useMemo(() => {
    return (
      !!trigger && (
        <RadixDialog.Trigger asChild>
          {cloneElement(trigger, {
            onClick: () => {
              trigger.props?.onClick?.();
              onOpenChange?.(true);
            },
          })}
        </RadixDialog.Trigger>
      )
    );
  }, [trigger, onOpenChange]);

  return (
    <RadixDialog.Root defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange}>
      {renderTrigger}
      <RadixDialog.Portal>
        <ThemeProvider theme={theme}>
          <RadixDialog.Overlay className={styles.overlay} />
          <RadixDialog.Content className={styles.dialog} onPointerDownOutside={() => onOpenChange?.(false)}>
            <RadixDialog.Close className={styles.closeButton}>
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

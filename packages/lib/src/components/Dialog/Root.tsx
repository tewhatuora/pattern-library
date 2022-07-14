import { PropsWithChildren, ReactElement, ReactNode, cloneElement, useMemo, useRef } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { useOutsideClick } from 'rooks';

import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { Stack } from '../Stack/Stack';
import { Icon } from '../Icon/Icon';
import { Column } from '../Columns/Column';
import { Row } from '../Columns/Row';
import { Content } from './Content';
import { Actions } from './Actions';
import { useTheme } from '../ThemeProvider/ThemeContext';
import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Box } from '../Box/Box';

import { useHeading } from '../../hooks/typography';

import { IconType } from '../Icon/icons';

import * as styles from './Dialog.css';

export type DialogProps = {
  icon?: IconType;
  heading?: string;
  subheading?: string;
  content?: ReactNode;
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
  const ref = useRef(null);
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
            onPress: () => {
              trigger.props?.onPress?.();
              onOpenChange?.(true);
            },
          })}
        </RadixDialog.Trigger>
      )
    );
  }, [trigger, onOpenChange]);

  useOutsideClick(ref, () => {
    onOpenChange?.(false);
  });

  return (
    <RadixDialog.Root defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange}>
      {renderTrigger}
      <RadixDialog.Portal>
        <ThemeProvider theme={theme}>
          <RadixDialog.Overlay className={styles.overlay} />
          <RadixDialog.Content className={styles.dialog}>
            <Row flexGrow={1}>
              <Column center columns={8}>
                <div className={styles.content} ref={ref}>
                  <Row offset>
                    <Column center columns={4}>
                      <RadixDialog.Close className={styles.closeButton}>
                        <Icon icon="cross" variant="functionalIcons" />
                      </RadixDialog.Close>
                      <Stack alignItems="center" display="flex" flexDirection="column" space="medium">
                        {!!icon && <Icon icon={icon} variant="decorativeIcons" />}
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
                    </Column>
                  </Row>
                </div>
              </Column>
            </Row>
          </RadixDialog.Content>
        </ThemeProvider>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

Root.displayName = 'Dialog';

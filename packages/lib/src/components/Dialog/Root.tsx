import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';

import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { Stack } from '../Stack/Stack';
import { Heading } from '../Heading/Heading';
import { Icon } from '../Icon/Icon';
import { Column } from '../Columns/Column';
import { Row } from '../Columns/Row';
import { Content } from './Content';
import { Actions } from './Actions';
import { useTheme } from '../ThemeProvider/ThemeContext';
import { AllowedChildren } from '../AllowedChildren/AllowedChildren';

import { IconType } from '../Icon/icons';

import * as styles from './Dialog.css';

export type DialogProps = {
  icon?: IconType;
  heading?: string;
  subheading?: string;
  content?: ReactNode;
  trigger?: ReactElement;
  // children: ChildrenOfType<'Content', any> & ChildrenOfType<'Actions', any>;
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

  return (
    <RadixDialog.Root defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange}>
      {!!trigger && <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>}
      <RadixDialog.Portal>
        <ThemeProvider theme={theme}>
          <RadixDialog.Overlay className={styles.overlay} />
          <RadixDialog.Content className={styles.dialog}>
            <Row flexGrow={1}>
              <Column center columns={8}>
                <div className={styles.content}>
                  <Row offset>
                    <Column center columns={4}>
                      <RadixDialog.Close className={styles.closeButton}>
                        <Icon icon="cross" variant="functionalIcons" />
                      </RadixDialog.Close>
                      <Stack alignItems="center" display="flex" flexDirection="column" space="medium">
                        {!!icon && <Icon icon={icon} variant="decorativeIcons" />}
                        <RadixDialog.Title asChild>
                          <Heading level="2">{heading}</Heading>
                        </RadixDialog.Title>
                        {!!subheading && <Heading level="4">{subheading}</Heading>}
                        <AllowedChildren
                          errorMessage="Only Dialog.Content and Dialog.Actions components are allowed as children of Dialog.Root"
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

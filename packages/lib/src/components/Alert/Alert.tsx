import { PropsWithChildren, ReactNode, useCallback, useRef, useState } from 'react';

import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

import * as styles from './Alert.css';
import { Icon } from '../Icon/Icon';
import { CloseButton } from '../CloseButton/CloseButton';
import { IconType } from '../Icon/icons';
import { moveFocusBeforeRemoving } from '../../utils/focus';

export const AlertStyles = styles;

export type AlertProps = {
  /** Sets colours and the default icon: `positive` (tick), `informative` (info), `cautionary` (alert), `critical` (warning). */
  variant: styles.Variant;
  /** Message text. Rendered in small text, so keep it short. */
  children?: ReactNode;
  /** Replaces the default icon for the variant. */
  alternativeIcon?: IconType;
  /** Shows a close button when provided. Called after the Alert hides itself; the Alert cannot be re-opened by the parent, so unmount and remount it to show it again. */
  onClose?: () => void;
};

const iconMap: Record<styles.Variant, IconType> = {
  positive: 'tick',
  informative: 'info',
  cautionary: 'alert',
  critical: 'warning',
};

/**
 * Small informative, positive, cautionary or critical message with a stronger visual treatment than a notice.
 * Has `role="alert"`, so screen readers announce it when it is added to the page.
 *
 * @example
 * <Alert variant="critical" onClose={() => setDismissed(true)}>
 *   Your session has expired.
 * </Alert>
 */
export const Alert = ({ variant, children, alternativeIcon, onClose, ...boxProps }: PropsWithChildren<AlertProps>) => {
  // for closing alert
  const [isClosed, setIsClosed] = useState(false);
  const alertRef = useRef<HTMLElement>(null);

  /**
   * Handle closing alert
   */
  const handleClose = useCallback(() => {
    moveFocusBeforeRemoving(alertRef.current);
    setIsClosed(true);

    onClose?.();
  }, [onClose, setIsClosed]);

  if (isClosed) {
    return null;
  }

  return (
    <Box
      as="div"
      className={styles.variants({
        variant,
      })}
      ref={alertRef}
      role="alert"
      {...boxProps}
    >
      <Box className={styles.contentWrapper}>
        <Icon className={styles.icon} icon={alternativeIcon || iconMap[variant]} variant="functionalIcons" />
        <Text>{children}</Text>
      </Box>
      {!!onClose && <CloseButton className={styles.closeButton} onClose={handleClose} />}
    </Box>
  );
};

Alert.displayName = 'Alert';

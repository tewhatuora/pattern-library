import { PropsWithChildren, ReactNode, useCallback, useState } from 'react';

import clsx from 'clsx';

import { Text } from '../Text/Text';
import { Box, BoxProps } from '../Box/Box';

import * as styles from './Alert.css';
import { Icon } from '../Icon/Icon';
import { CloseButton } from '../CloseButton/CloseButton';
import { IconType } from '../Icon/icons';

export const AlertStyles = styles;

export type AlertProps = {
  /**  Alert style variant */
  variant: styles.Variant;
  /** Text node for Alert message */
  children?: ReactNode;
  /** Alternative icon to display */
  alternativeIcon?: IconType;
  /** A function that will be called when closing the Alert */
  onClose?: () => void;
} & BoxProps;

const iconMap: Record<styles.Variant, IconType> = {
  positive: 'tick',
  informative: 'info',
  cautionary: 'alert',
  critical: 'warning',
};

/**
 * Alerts are small informative, positive, cautionary or critical messages with
 * a stronger visual treatment than notices.
 * @constructor
 */
export const Alert = ({
  as = 'div',
  className,
  variant,
  children,
  alternativeIcon,
  onClose,
  ...boxProps
}: PropsWithChildren<AlertProps>) => {
  // for closing alert
  const [isClosed, setIsClosed] = useState(false);

  /**
   * Handle closing banner
   */
  const handleClose = useCallback(() => {
    setIsClosed(true);

    onClose?.();
  }, [onClose, setIsClosed]);

  if (isClosed) {
    return null;
  }

  return (
    <Box
      as={as}
      className={clsx(
        styles.variants({
          variant,
        }),
        className,
      )}
      {...boxProps}
    >
      <Box className={styles.contentWrapper}>
        <Icon className={styles.icon} icon={alternativeIcon || iconMap[variant]} variant="functionalIcons" />
        <Text size="medium">{children}</Text>
      </Box>
      {!!onClose && <CloseButton className={styles.closeButton} onClose={handleClose} />}
    </Box>
  );
};

Alert.displayName = 'Alert';

import { useState, useCallback } from 'react';

import { Text } from '../Text/Text';
import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { CloseButton } from '../CloseButton/CloseButton';

import * as styles from './Banner.css';

export type BannerProps = {
  label?: string;
  onClose?: () => void;
  variant: styles.Variant;
  theme: styles.Theme;
} & Pick<
  JSX.IntrinsicElements['button'],
  'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'children' | 'disabled' | 'type' | 'tabIndex'
>;

/**
 * Banner component.
 * Displays a prominent message and icon.
 * Closable option and when closed, component is hidden
 * Has a light and dark variant
 * @param props
 * @constructor
 */
export const Banner = ({ label, variant = 'alert', theme = 'dark', onClose, ...boxProps }: BannerProps) => {
  // for closing banner if set true banner hidden
  const [isClosed, setIsClosed] = useState(false);

  //icon for display depending on variant
  const bannerIcon = variant === 'urgent' ? 'alert' : 'document';

  /**
   * Handle closing banner
   */
  const handleCloseBanner = useCallback(() => {
    setIsClosed(true);

    if (typeof onClose === 'function') {
      onClose();
    }
  }, [onClose, setIsClosed]);

  return (
    <Box
      as="div"
      className={
        isClosed
          ? styles.hideBanner
          : styles.variants({
              variant,
              theme,
            })
      }
      {...boxProps}
    >
      <Box className={styles.bannerInner}>
        <Icon className={styles.bannerIcon} icon={bannerIcon} variant="decorativeIcons" />
        <Text size="medium" weight="regular" className={styles.bannerText}>
          {label}
        </Text>
      </Box>

      {!!onClose && (
        <CloseButton className={styles.closeButton} onClose={handleCloseBanner} />
      )}
    </Box>
  );
};

Banner.displayName = 'Banner';

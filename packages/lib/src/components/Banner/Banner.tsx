import { forwardRef, useCallback, useState } from 'react';

import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { CloseButton } from '../CloseButton/CloseButton';

import * as styles from './Banner.css';
import { ContrastVariant } from '../../types';

export const BannerStyles = styles;

export type BannerProps = {
  /** Banner style variant */
  variant: styles.Variant;
  /** Contrast variant for dark/light UI */
  theme?: ContrastVariant;
  /** A function that will be called when closing the Alert */
  onClose?: () => void;
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
export const Banner = forwardRef<HTMLDivElement, BannerProps>(
  // disable eslint as `theme` is unused. This isn't used but we don't want to introduce breaking changes.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ variant = 'alert', theme, onClose, children, ...boxProps }, ref) => {
    // for closing banner if set true banner hidden
    const [isClosed, setIsClosed] = useState(false);

    //icon for display depending on variant
    const bannerIcon = variant === 'urgent' ? 'alert' : 'document';

    let bannerLabel = 'Announcement';
    switch (variant) {
      case 'informative':
        bannerLabel = 'Announcement';
        break;
      case 'alert':
        bannerLabel = 'Alert';
        break;
      case 'urgent':
        bannerLabel = 'Urgent alert';
        break;
      default:
        bannerLabel = 'Announcement';
    }

    /**
     * Handle closing banner
     */
    const handleCloseBanner = useCallback(() => {
      setIsClosed(true);

      onClose?.();
    }, [onClose, setIsClosed]);

    if (isClosed) {
      return null;
    }

    return (
      <Box
        aria-label={bannerLabel}
        as="aside"
        className={styles.variants({
          variant,
        })}
        ref={ref}
        {...boxProps}
      >
        <Box className={styles.bannerInner}>
          <Icon className={styles.icon} icon={bannerIcon} variant="decorativeIcons" />
          <div className={styles.childrenWrapper}>{children}</div>
        </Box>

        {!!onClose && (
          <CloseButton
            className={styles.closeButton}
            icon="cross"
            variant="functionalIcons"
            onClose={handleCloseBanner}
          />
        )}
      </Box>
    );
  },
);

Banner.displayName = 'Banner';

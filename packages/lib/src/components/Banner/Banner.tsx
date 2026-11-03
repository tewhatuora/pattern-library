import type { JSX } from 'react';
import { forwardRef, useCallback, useState } from 'react';
import { useObjectRef } from '@react-aria/utils';

import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { CloseButton } from '../CloseButton/CloseButton';

import * as styles from './Banner.css';
import { moveFocusBeforeRemoving } from '../../utils/focus';

export const BannerStyles = styles;

export type BannerProps = {
  /**
   * `informative` for announcements, `alert` for cautions, `urgent` for critical notices. Also sets the accessible label (Announcement, Alert, Urgent alert) and the icon.
   * @default 'alert'
   */
  variant?: styles.Variant;
  /** Shows a close button when provided. Called after the Banner hides itself; the parent cannot re-open it, so unmount and remount it to show it again. */
  onClose?: () => void;
} & Pick<JSX.IntrinsicElements['aside'], 'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'children' | 'tabIndex'>;

/**
 * Prominent message with an icon, rendered as an `aside` labelled by its variant.
 * Children are the message content, so links are fine.
 *
 * @example
 * <Banner variant="informative" onClose={() => setDismissed(true)}>
 *   Clinics are closed on public holidays.
 * </Banner>
 */
export const Banner = forwardRef<HTMLDivElement, BannerProps>(
  ({ variant = 'alert', onClose, children, ...boxProps }, ref) => {
    // for closing banner if set true banner hidden
    const [isClosed, setIsClosed] = useState(false);
    const bannerRef = useObjectRef(ref);

    // Icon for each variant, as in the design: document, exclamation in a circle, and warning triangle
    const bannerIcon = ({ informative: 'document', alert: 'warning', urgent: 'alert' } as const)[variant];

    let bannerLabel: string;
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
      moveFocusBeforeRemoving(bannerRef.current);
      setIsClosed(true);

      onClose?.();
    }, [onClose, setIsClosed, bannerRef]);

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
        ref={bannerRef}
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

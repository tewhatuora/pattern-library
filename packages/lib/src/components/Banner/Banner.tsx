import * as React from 'react';

import { useState } from 'react';

import { Text } from '../Text/Text';

import { Box } from '../Box/Box';
import * as styles from './Banner.css';
import { Icon } from '../Icon/Icon';

export type BannerProps = {
  label?: string;
  isClosable?: boolean;
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
export const Banner = ({ label, isClosable, variant = 'alert', theme = 'dark', ...boxProps }: BannerProps) => {
  //icon for display depending on variant
  const bannerIcon = variant === 'urgent' ? 'alert' : 'document';

  //for closing banner if set true banner hidden
  const [isClosed, setIsClosed] = useState(false);
  const closeBanner = () => {
    setIsClosed(true);
  };

  return (
    <Box
      as="div"
      className={
        isClosed
          ? styles.hideBannerStyles
          : styles.variants({
              variant,
              theme,
            })
      }
      {...boxProps}
    >
      <Box className={styles.spanStyles}>
        <Icon className={styles.bannerIconStyles} icon={bannerIcon} variant="decorativeIcons" />
        <Text size="medium" weight="regular">
          {label}
        </Text>
      </Box>
      {/* {isClosable ? (
        <button type="button" aria-label="Close">
          <Icon className={styles.closeIconStyles} icon="cross" variant="functionalIcons" onClick={closeBanner} />
        </button>
      ) : null} */}
      {isClosable && (
        <button type="button" aria-label="Close">
          <Icon className={styles.closeIconStyles} icon="cross" variant="functionalIcons" onClick={closeBanner} />
        </button>
      )}
    </Box>
  );
};

Banner.displayName = 'Banner';

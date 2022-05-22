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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Banner = ({ label, isClosable, variant = 'alert', theme = 'dark', ...boxProps }: BannerProps) => {
  //icon for closing banner
  const closeIcon = 'cross';

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
      // Passed-through boxProps.
      // Note: Default values for boxProps need to be
      // assigned after the {...boxProps} spread below
      {...boxProps}
    >
      <Box className={styles.spanStyles}>
        <Icon className={styles.bannerIconStyles} icon={bannerIcon} variant="decorativeIcons" />
        <Text size="medium" weight="regular">
          {label}
        </Text>
      </Box>
      {isClosable ? (
        <Icon className={styles.closeIconStyles} icon={closeIcon} variant="functionalIcons" onClick={closeBanner} />
      ) : null}
    </Box>
  );
};

Banner.displayName = 'Banner';

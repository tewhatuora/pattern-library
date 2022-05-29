import { Text } from '../Text/Text';

import * as styles from './ToggleButton.css';

import { Box } from '../Box/Box';
import { ReactNode, useCallback, useState } from 'react';

export type ToggleButtonProps = {
  label?: string;
  isHeadingDisplayed: boolean;
  headingLabel?: string;
  onChange?: () => void;
  children: ReactNode;
};

/**
 * ToggleButton Component
 * @param props
 * @constructor
 */
export const ToggleButton = ({
  label,
  isHeadingDisplayed: headingDisplayed,
  headingLabel,
  onChange,
  ...boxProps
}: ToggleButtonProps) => {
  const [displayHeading, setDisplayHeading] = useState(false);

  const onChangeFunction = useCallback(() => {
    setDisplayHeading(true);

    if (typeof onChange === 'function') {
      onChangeFunction();
    }
  }, [onChange, setDisplayHeading]);

  return <Box as="div" className={styles.containerStyles} {...boxProps}></Box>;
};

ToggleButton.displayName = 'ToggleButton';

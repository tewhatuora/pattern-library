import * as React from 'react';

import { Text } from '../Text/Text';

import { Box } from '../Box/Box';
import * as styles from './Tag.css';
import { useCallback, useState } from 'react';
import { CloseButton } from '../CloseButton/CloseButton';

export type TagProps = {
  label: string;
  isClearable: boolean;
  onClear?: () => void;
} & Pick<
  JSX.IntrinsicElements['button'],
  'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'children' | 'disabled' | 'type' | 'tabIndex'
>;

/**
 * Tag Component
 * For user-provided content.
 * Tags are compact element that represent an input, attribute,
 * or action.
 * Option to be clearable, if clearable a clear icon is displayed
 * @param props
 * @constructor
 */
export const Tag = ({ label, isClearable, onClear, ...boxProps }: TagProps) => {
  const [isCleared, setIsCleared] = useState(false);

  /**
   * Handle closing banner
   */
  const handleClearTag = useCallback(() => {
    setIsCleared(true);

    if (typeof onClear === 'function') {
      onClear();
    }
  }, [onClear, setIsCleared]);

  return (
    <Box as="div" className={isCleared ? styles.hideTag : styles.tagStyles} {...boxProps}>
      <Text size="xsmall" weight="regular">
        {label}
      </Text>
      <Box className={styles.iconStyles}>
        {!!isClearable && (
          <CloseButton className={styles.closeButton} onClose={handleClearTag} icon="clear_field" variant="tagIcon" />
        )}
      </Box>
    </Box>
  );
};

Tag.displayName = 'Tag';
// export default Tag;

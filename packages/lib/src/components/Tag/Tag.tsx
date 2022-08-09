import { useCallback, useState } from 'react';

import { Text } from '../Text/Text';
import { Box } from '../Box/Box';
import { CloseButton } from '../CloseButton/CloseButton';

import * as styles from './Tag.css';

export const TagStyles = styles;

export type TagProps = {
  /** Tag label */
  label: string;
  /** Allow the tag to be clearable */
  isClearable?: boolean;
  /** Function to call when the tag is cleared */
  onClear?: () => void;
};

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
   * Handle closing Tag
   */
  const handleClearTag = useCallback(() => {
    setIsCleared(true);

    if (typeof onClear === 'function') {
      onClear();
    }
  }, [onClear, setIsCleared]);

  return (
    <Box as="div" className={isCleared ? styles.hidden : styles.tag} {...boxProps}>
      <Text className={styles.icon} size="xsmall" weight="regular">
        {label}
        {!!isClearable && (
          <CloseButton className={styles.closeButton} icon="clear_field" variant="tagIcon" onClose={handleClearTag} />
        )}
      </Text>
    </Box>
  );
};

Tag.displayName = 'Tag';

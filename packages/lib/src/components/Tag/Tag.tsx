import { useCallback, useState } from 'react';

import { Text } from '../Text/Text';
import { Box } from '../Box/Box';
import { CloseButton } from '../CloseButton/CloseButton';

import * as styles from './Tag.css';

export const TagStyles = styles;

export type TagProps = {
  label: string;
  /** Show a clear button on the tag. */
  isClearable?: boolean;
  /**
   * Called when the clear button is pressed. The tag also hides itself and can't be shown again, so remove
   * it from your own state too.
   */
  onClear?: () => void;
};

/**
 * A compact label for user-provided content, such as a selected filter. Optionally clearable.
 *
 * @example
 * <Tag isClearable label="Auckland" onClear={() => removeRegion('akl')} />
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

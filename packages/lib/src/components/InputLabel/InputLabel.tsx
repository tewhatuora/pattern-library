/**
 * Label has all label props, but can pass colours and stuff?
 * Has tertiary label (clickable with onClick)
 */

import { Text } from '../Text/Text';

import * as styles from './InputLabel.css';

export type InputLabelProps = {
  heading: string;
  subheading?: string;
  tertiaryLabel?: string;
  onTertiaryLabelClick?: () => void;
};

export const InputLabel = ({ heading, subheading, tertiaryLabel, onTertiaryLabelClick }: InputLabelProps) => {
  return (
    <label className={styles.label}>
      <div className={styles.headingWrapper}>
        <Text weight="bold">{heading}</Text>
        <Text size="small">{subheading}</Text>
      </div>

      <button className={styles.tertiaryLabelButton} onClick={onTertiaryLabelClick}>
        <Text>{tertiaryLabel}</Text>
      </button>
    </label>
  );
};

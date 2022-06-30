import { Box } from '../Box/Box';
import { Button, ButtonProps } from '../Button/Button';
import { Text } from '../Text/Text';

import * as styles from './InputLabel.css';

export type InputLabelProps = {
  heading: string;
  subheading?: string;
  tertiaryLabel?: string;
  tertiaryLabelIcon?: Pick<ButtonProps, 'icon'>;
  tertiaryLabelIconPosition?: Pick<ButtonProps, 'iconPosition'>;
  onTertiaryLabelClick?: () => void;
  htmlFor: string;
  error?: boolean;
};

/**
 * InputLabel
 *
 * A label for an input field.
 *
 * The label must be programmatically linked to a form input element using the
 * `htmlFor` method rather than nesting it inside the label.
 *
 * @param props
 * @constructor
 */
export const InputLabel = ({
  heading,
  subheading,
  tertiaryLabel,
  tertiaryLabelIcon,
  tertiaryLabelIconPosition,
  onTertiaryLabelClick,
  htmlFor,
  error = false,
}: InputLabelProps) => {
  const labelColor = error ? 'error100' : 'primary100';

  return (
    <Box display="flex" justifyContent="spaceBetween">
      <Box as="label" htmlFor={htmlFor}>
        <Text color={labelColor} weight="bold">
          {heading}
        </Text>
        <Text color={labelColor} size="small">
          {subheading}
        </Text>
      </Box>

      {!!tertiaryLabel && (
        <Button
          as="a"
          className={styles.tertiaryLabelButton}
          icon={tertiaryLabelIcon}
          iconPosition={tertiaryLabelIconPosition}
          variant="label"
          weight="medium"
          onPress={onTertiaryLabelClick}
        >
          {tertiaryLabel}
        </Button>
      )}
    </Box>
  );
};

import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { TextLinkButton, TextLinkButtonProps } from '../TextLinkButton/TextLinkButton';

export type InputLabelProps = {
  heading: string;
  subheading?: string;
  tertiaryLabel?: string;
  tertiaryLabelIcon?: Pick<TextLinkButtonProps, 'icon'>;
  tertiaryLabelIconPosition?: Pick<TextLinkButtonProps, 'iconPosition'>;
  onTertiaryLabelClick?: () => void;
  htmlFor: string;
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
}: InputLabelProps) => {
  return (
    <Box display="flex" justifyContent="spaceBetween">
      <label>
        <Text weight="bold">{heading}</Text>
        <Text size="small">{subheading}</Text>
      </label>

      {!!tertiaryLabel && (
        <TextLinkButton
          icon={tertiaryLabelIcon}
          iconPosition={tertiaryLabelIconPosition}
          onPress={onTertiaryLabelClick}
        >
          {tertiaryLabel}
        </TextLinkButton>
      )}
    </Box>
  );
};

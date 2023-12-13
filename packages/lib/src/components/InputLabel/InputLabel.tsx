import { ElementType, LabelHTMLAttributes } from 'react';
import clsx from 'clsx';

import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

import * as styles from './InputLabel.css';
import { IconType } from '../Icon/icons';

export const InputLabelStyles = styles;

export type InputLabelProps = {
  as?: ElementType;
  /** Label for the field */
  label: string;
  /** Optional label subheading */
  subheading?: string;
  /** Optional tertiary label */
  tertiaryLabel?: string;
  /** Icon to display with the tertiary label */
  tertiaryLabelIcon?: IconType;
  /** Where to position the icon relative to the `tertiaryLabel` */
  tertiaryLabelIconPosition?: 'left' | 'right';
  /** Element type to render the tertiary label as */
  tertiaryLabelAs?: 'a' | 'button' | 'text';
  /** HTML `for` attribute */
  htmlFor?: string;
  /** Error state */
  error?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Show '*' if the field is required */
  required?: boolean;
  /** Accessibility attributes for the label */
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  /** URL/path for `tertiaryLabel`, if `tertiaryLabelAs` = `a` */
  href?: string | never;
  /** Function to call when the `tertiaryLabel` is clicked, if `tertiaryLabelAs` = `button` */
  onTertiaryLabelClick?: (e: any) => void | never;
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
  as = 'label',
  label,
  subheading,
  tertiaryLabel,
  tertiaryLabelAs,
  tertiaryLabelIcon,
  tertiaryLabelIconPosition = 'left',
  onTertiaryLabelClick,
  htmlFor,
  href,
  error = false,
  disabled,
  labelProps,
}: InputLabelProps) => {
  const labelColor = error && !disabled ? 'error100' : 'neutral100';

  return (
    <Box display="flex" justifyContent="spaceBetween">
      <Box
        as={as}
        display="flex"
        htmlFor={htmlFor || labelProps?.htmlFor}
        id={labelProps?.id}
        justifyContent="spaceBetween"
        width={tertiaryLabelAs === 'text' ? 'full' : undefined}
      >
        <span>
          <Text color={labelColor} weight="bold">
            {label}
          </Text>
          {subheading ? (
            <Text color={labelColor} size="small">
              {subheading}
            </Text>
          ) : null}
        </span>

        {tertiaryLabel && tertiaryLabelAs === 'text' ? (
          <Box as="span" className={clsx(styles.tertiaryLabel, styles.iconPosition[tertiaryLabelIconPosition])}>
            <Text size="medium" weight="regular">
              {tertiaryLabel}
            </Text>

            {!!tertiaryLabelIcon && <Icon aria-hidden="true" icon={tertiaryLabelIcon} variant="functionalIcons" />}
          </Box>
        ) : null}
      </Box>

      {tertiaryLabel && tertiaryLabelAs !== 'text' ? (
        <Button
          as={tertiaryLabelAs}
          className={clsx(styles.tertiaryLabel)}
          href={href}
          icon={tertiaryLabelIcon}
          iconPosition={tertiaryLabelIconPosition}
          variant="link"
          onPress={onTertiaryLabelClick}
        >
          {tertiaryLabel}
        </Button>
      ) : null}
    </Box>
  );
};

import { LabelHTMLAttributes } from 'react';
import clsx from 'clsx';

import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

import * as styles from './InputLabel.css';
import { IconType } from '../Icon/icons';

export const InputLabelStyles = styles;

export type InputLabelProps = {
  label: string;
  subheading?: string;
  tertiaryLabel?: string;
  tertiaryLabelIcon?: IconType;
  tertiaryLabelIconPosition?: 'left' | 'right';
  htmlFor?: string;
  error?: boolean;
  disabled?: boolean;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  tertiaryLabelAs?: 'a' | 'button' | 'text';
  href?: string | never;
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
  const labelColor = error && !disabled ? 'error100' : 'primary100';

  return (
    <Box display="flex" justifyContent="spaceBetween">
      <Box as="label" htmlFor={htmlFor || labelProps?.htmlFor} id={labelProps?.id}>
        <Text color={labelColor} weight="bold">
          {label}
        </Text>
        <Text color={labelColor} size="small">
          {subheading}
        </Text>
      </Box>

      {tertiaryLabel &&
        (tertiaryLabelAs !== 'text' ? (
          <Button
            as={tertiaryLabelAs}
            className={clsx(styles.tertiaryLabel)}
            href={href}
            icon={tertiaryLabelIcon}
            iconPosition={tertiaryLabelIconPosition}
            variant="label"
            onPress={onTertiaryLabelClick}
          >
            {tertiaryLabel}
          </Button>
        ) : (
          <Box as="span" className={clsx(styles.tertiaryLabel, styles.iconPosition[tertiaryLabelIconPosition])}>
            <Text size="medium" weight="link-normal">
              {tertiaryLabel}
            </Text>

            {!!tertiaryLabelIcon && <Icon aria-hidden="true" icon={tertiaryLabelIcon} variant="functionalIcons" />}
          </Box>
        ))}
    </Box>
  );
};

import { ElementType, LabelHTMLAttributes, useMemo } from 'react';
import clsx from 'clsx';

import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { Tooltip } from '../Tooltip/Tooltip';

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
  tertiaryLabelTooltip?: string;
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
  className?: string;
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
  tertiaryLabelTooltip,
  onTertiaryLabelClick,
  htmlFor,
  href,
  error = false,
  required,
  disabled,
  labelProps,
  className,
}: InputLabelProps) => {
  const state = disabled ? 'disabled' : error ? 'error' : undefined;

  const renderTertiaryLabel = useMemo(() => {
    if (tertiaryLabelTooltip) {
      return (
        <Tooltip content={tertiaryLabelTooltip} label={tertiaryLabel ?? ''}>
          {tertiaryLabel}
        </Tooltip>
      );
    }

    return tertiaryLabel;
  }, [tertiaryLabel, tertiaryLabelTooltip]);

  const renderTertiaryLabelAsButton = useMemo(() => {
    const button = (
      <Button
        as={tertiaryLabelAs}
        className={styles.tertiaryLabel}
        href={href}
        icon={tertiaryLabelIcon}
        iconPosition={tertiaryLabelIconPosition}
        variant="link"
        onPress={onTertiaryLabelClick}
      >
        {tertiaryLabel}
      </Button>
    );

    if (tertiaryLabel && tertiaryLabelAs === 'text') {
      return null;
    }

    if (tertiaryLabelTooltip) {
      return (
        <Tooltip content={tertiaryLabelTooltip} label={tertiaryLabel ?? ''} triggerAsChild>
          {button}
        </Tooltip>
      );
    }

    return button;
  }, [
    tertiaryLabelAs,
    href,
    tertiaryLabelIcon,
    tertiaryLabelIconPosition,
    onTertiaryLabelClick,
    tertiaryLabel,
    tertiaryLabelTooltip,
  ]);

  return (
    <Box className={clsx(styles.wrapper, className)} display="flex" justifyContent="spaceBetween">
      <Box
        as={as}
        display="flex"
        htmlFor={htmlFor || labelProps?.htmlFor}
        id={labelProps?.id}
        justifyContent="spaceBetween"
        width={tertiaryLabelAs === 'text' ? 'full' : undefined}
      >
        <span>
          <Text className={state && styles.labels[state]} weight="bold">
            {label} {!!required && '*'}
          </Text>
          <Text className={state && styles.labels[state]} size="small">
            {subheading}
          </Text>
        </span>

        {tertiaryLabel && tertiaryLabelAs === 'text' ? (
          <Box
            as="span"
            className={clsx(styles.tertiaryLabel, styles.iconPosition[tertiaryLabelIconPosition], {
              [styles.labels.disabled]: disabled,
            })}
          >
            <Text size="small">{renderTertiaryLabel}</Text>
            {!!tertiaryLabelIcon && <Icon aria-hidden="true" icon={tertiaryLabelIcon} variant="functionalIcons" />}
          </Box>
        ) : null}
      </Box>

      {renderTertiaryLabelAsButton}
    </Box>
  );
};

import { ElementType, LabelHTMLAttributes, useMemo } from 'react';
import { clsx } from 'clsx';
import type { PressEvent } from '@react-aria/interactions';

import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { Tooltip } from '../Tooltip/Tooltip';

import * as styles from './InputLabel.css';
import { IconType } from '../Icon/icons';

export const InputLabelStyles = styles;

export type InputLabelProps = {
  /**
   * Element to render the label as. Use something other than `label`, such as `legend` or `div`, when it
   * names a group of fields rather than one input.
   * @default 'label'
   */
  as?: ElementType;
  label: string;
  /** Smaller text under the label. Part of the label element, so it's included in the field's accessible name. */
  subheading?: string;
  /** Extra text or link on the right of the label, e.g. "Forgot password?". See `tertiaryLabelAs`. */
  tertiaryLabel?: string;
  /** Icon shown with the tertiary label. */
  tertiaryLabelIcon?: IconType;
  /**
   * Which side of the `tertiaryLabel` the icon is on.
   * @default 'left'
   */
  tertiaryLabelIconPosition?: 'left' | 'right';
  /**
   * What `tertiaryLabel` renders as: `a` needs `href`, `button` needs `onTertiaryLabelClick`, and `text` is
   * plain text. Without it the label renders as a button.
   */
  tertiaryLabelAs?: 'a' | 'button' | 'text';
  /** Tooltip text for the tertiary label, e.g. to explain what it does. */
  tertiaryLabelTooltip?: string;
  /** `id` of the field this labels. Not needed if `labelProps.htmlFor` is set. */
  htmlFor?: string;
  /** Error colour for the label text. Overridden by `disabled`. */
  error?: boolean;
  /** Disabled colour for the label text. */
  disabled?: boolean;
  /** Add `*` to the label. This is only visual: it doesn't make the input required. */
  required?: boolean;
  /** Only `id` and `htmlFor` are used. Other label attributes are ignored. */
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  /** Destination of `tertiaryLabel` when `tertiaryLabelAs` is `a`. */
  href?: string | never;
  /** Called when the `tertiaryLabel` is pressed, when `tertiaryLabelAs` is `button`. */
  onTertiaryLabelClick?: (e: PressEvent) => void;
};

/**
 * A label for an input field, with an optional subheading and a tertiary label on the right. Link it to
 * its input with `htmlFor` rather than nesting the input inside it.
 *
 * @example
 * <InputLabel
 *   href="/help/nhi"
 *   htmlFor="nhi"
 *   label="NHI number"
 *   subheading="Three letters and four numbers"
 *   tertiaryLabel="Where do I find this?"
 *   tertiaryLabelAs="a"
 * />
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
  disabled,
  required,
  labelProps,
}: InputLabelProps) => {
  const state = disabled ? 'disabled' : error ? 'error' : undefined;

  const renderTertiaryLabel = useMemo(() => {
    if (tertiaryLabelTooltip) {
      return <Tooltip content={tertiaryLabelTooltip}>{tertiaryLabel}</Tooltip>;
    }

    return tertiaryLabel;
  }, [tertiaryLabel, tertiaryLabelTooltip]);

  const renderTertiaryLabelAsButton = useMemo(() => {
    const button = (
      <Button
        as={tertiaryLabelAs}
        className={clsx(styles.tertiaryLabel, {
          [styles.labels.disabled]: disabled,
        })}
        href={href}
        icon={tertiaryLabelIcon}
        iconPosition={tertiaryLabelIconPosition}
        variant="link"
        onPress={onTertiaryLabelClick}
      >
        {tertiaryLabel}
      </Button>
    );

    // Without a label the button would be empty: unlabelled for screen readers, and an extra tab stop
    if (!tertiaryLabel || tertiaryLabelAs === 'text') {
      return null;
    }

    if (tertiaryLabelTooltip) {
      return (
        <Tooltip content={tertiaryLabelTooltip} triggerAsChild>
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
    disabled,
  ]);

  return (
    <Box className={styles.wrapper} display="flex" justifyContent="spaceBetween">
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

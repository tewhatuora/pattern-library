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
  htmlFor: string;
  error?: boolean;
} & (AsLink | AsButton | AsText);

type AsLink = {
  tertiaryLabelAs: 'a';
  href: string;
  onTertiaryLabelClick: never;
};
type AsButton = {
  tertiaryLabelAs: 'button';
  href: never;
  onTertiaryLabelClick: (e: any) => void;
};
type AsText = {
  tertiaryLabelAs: 'text';
  href: never;
  onTertiaryLabelClick: never;
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
}: InputLabelProps) => {
  const labelColor = error ? 'error100' : 'primary100';

  return (
    <Box display="flex" justifyContent="spaceBetween">
      <Box as="label" htmlFor={htmlFor}>
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

            {!!tertiaryLabelIcon && <Icon icon={tertiaryLabelIcon} variant="functionalIcons" />}
          </Box>
        ))}
    </Box>
  );
};

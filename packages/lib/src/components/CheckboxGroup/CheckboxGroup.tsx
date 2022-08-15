import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Checkbox, CheckboxProps } from '../Checkbox/Checkbox';
import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';

import { ChildrenOfType } from '../../types/index';
import { Box } from '../Box/Box';

import * as styles from './CheckboxGroup.css';

export const CheckboxGroupStyles = styles;

export type CheckboxGroupProps = {
  /** Only `Checkbox` components are allowed as children of `CheckboxGroup` */
  children: ChildrenOfType<'Checkbox', CheckboxProps>;
} & InputLabelProps &
  InputMessageProps;

/**
 * CheckboxGroup Component
 * Displays a list of vertically stacked Checkbox components
 * Enables users to pick multiple options from a group of Checkbox component
 * Have an option to display a heading
 * Have an option to be required
 * Have the option top display Checkboxes with indeterminate state
 * @param props
 * @constructor
 */

export const CheckboxGroup = ({
  errorMessage,
  href,
  id,
  label,
  labelProps,
  required,
  subheading,
  descriptionProps,
  disabled,
  errorMessageProps,
  helperText,
  tertiaryLabel,
  tertiaryLabelAs,
  tertiaryLabelIcon,
  tertiaryLabelIconPosition,
  onTertiaryLabelClick,
  children,
  ...boxProps
}: CheckboxGroupProps) => {
  return (
    <Box as="div" className={styles.container} {...boxProps}>
      <InputLabel
        error={!!errorMessage}
        href={href}
        htmlFor={id}
        label={label}
        labelProps={labelProps}
        required={required}
        subheading={subheading}
        tertiaryLabel={tertiaryLabel}
        tertiaryLabelAs={tertiaryLabelAs}
        tertiaryLabelIcon={tertiaryLabelIcon}
        tertiaryLabelIconPosition={tertiaryLabelIconPosition}
        onTertiaryLabelClick={onTertiaryLabelClick}
      />
      <AllowedChildren
        errorMessage="Only `Checkbox` components are allowed as children of `CheckboxGroup`"
        types={[Checkbox]}
      >
        {children}
      </AllowedChildren>
      <InputMessage
        descriptionProps={descriptionProps}
        disabled={disabled}
        errorMessage={errorMessage}
        errorMessageProps={errorMessageProps}
        helperText={helperText}
      />
    </Box>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';

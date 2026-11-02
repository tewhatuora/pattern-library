import { useId } from 'react';

import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Checkbox, CheckboxProps } from '../Checkbox/Checkbox';
import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';

import { ChildrenOfType } from '../../types/index';
import { Box } from '../Box/Box';

import * as styles from './CheckboxGroup.css';

export const CheckboxGroupStyles = styles;

export type CheckboxGroupProps = {
  /**
   * Shows `*` after the label when `required` is set. Set to false if the form states that fields are required instead.
   * @default true
   */
  showRequiredAsterisk?: boolean;
  /** Only `Checkbox` components are allowed as children of `CheckboxGroup` */
  children: ChildrenOfType<'Checkbox', CheckboxProps>;
} & InputLabelProps &
  InputMessageProps;

/**
 * Vertical list of `Checkbox` components with a shared label, helper text and error message.
 * Rendered as `role="group"` named by the label and described by the helper text and error.
 * `disabled` applies to every child. `errorMessage` turns on the error styling for the label, so `error` is not needed.
 * Each child's `checked` state is managed by the consumer.
 *
 * @example
 * <CheckboxGroup helperText="Choose all that apply" label="Contact methods">
 *   <Checkbox checked={email} id="contact-email" label="Email" onCheckedChange={setEmail} />
 *   <Checkbox checked={phone} id="contact-phone" label="Phone" onCheckedChange={setPhone} />
 * </CheckboxGroup>
 */
export const CheckboxGroup = ({
  errorMessage,
  href,
  id,
  label,
  labelProps,
  required,
  showRequiredAsterisk = true,
  subheading,
  descriptionProps,
  disabled,
  errorMessageProps,
  helperText,
  tertiaryLabel,
  tertiaryLabelAs,
  tertiaryLabelIcon,
  tertiaryLabelIconPosition,
  tertiaryLabelTooltip,
  onTertiaryLabelClick,
  children,
  // Label props that don't apply to the group's wrapper element
  as,
  htmlFor,
  error,
  ...boxProps
}: CheckboxGroupProps) => {
  const generatedId = useId();
  const labelId = labelProps?.id ?? `${generatedId}-label`;
  const helperTextId = descriptionProps?.id ?? `${generatedId}-description`;
  const errorMessageId = errorMessageProps?.id ?? `${generatedId}-error`;

  // The label and messages aren't form controls, so the group is named and described with ARIA
  const describedBy = [!!helperText && helperTextId, !!errorMessage && !disabled && errorMessageId]
    .filter(Boolean)
    .join(' ');

  return (
    <Box
      aria-describedby={describedBy || undefined}
      aria-labelledby={labelId}
      as="div"
      className={styles.container}
      id={id}
      role="group"
      {...boxProps}
    >
      <InputLabel
        error={!!errorMessage}
        href={href}
        label={label}
        labelProps={{ ...labelProps, id: labelId }}
        required={showRequiredAsterisk && required}
        subheading={subheading}
        tertiaryLabel={tertiaryLabel}
        tertiaryLabelAs={tertiaryLabelAs}
        tertiaryLabelIcon={tertiaryLabelIcon}
        tertiaryLabelIconPosition={tertiaryLabelIconPosition}
        tertiaryLabelTooltip={tertiaryLabelTooltip}
        onTertiaryLabelClick={onTertiaryLabelClick}
      />
      <AllowedChildren
        errorMessage="Only `Checkbox` components are allowed as children of `CheckboxGroup`"
        propsForChild={(child) => ({ disabled: child?.props?.disabled || disabled })}
        types={[Checkbox]}
      >
        {children}
      </AllowedChildren>
      <InputMessage
        descriptionProps={{ ...descriptionProps, id: helperTextId }}
        disabled={disabled}
        errorMessage={errorMessage}
        errorMessageProps={{ ...errorMessageProps, id: errorMessageId }}
        helperText={helperText}
      />
    </Box>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';

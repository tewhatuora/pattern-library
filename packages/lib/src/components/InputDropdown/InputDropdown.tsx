import { ChangeEventHandler, ForwardedRef, SelectHTMLAttributes, forwardRef, useMemo } from 'react';
import { useField } from '@react-aria/label';
import clsx from 'clsx';

import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { OtherInputFieldProps } from '../InputField/InputField';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

import * as fieldStyles from '../InputField/InputField.css';
import * as styles from './InputDropdown.css';

import { useText } from '../../hooks/typography';

export const InputDropdownStyles = styles;

/** Option for dropdown */
export type InputOption = {
  value: string | number;
  label: string;
  selected?: boolean;
  disabled?: boolean;
};

export type InputDropdownProps = {
  /**
   * Options for dropdown
   * `InputOption = {
   *   value: string | number;
   *   label: string;
   *   selected?: boolean;
   *   disabled?: boolean;
   * }`
   * */
  options: InputOption[];
  /** Function to call when the field is left */
  onSelectBlur?: ChangeEventHandler<HTMLSelectElement>;
  /** Function to call when the value changes */
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  /** Function to call when the field is focused */
  onSelectFocus?: ChangeEventHandler<HTMLSelectElement>;
} & InputLabelProps &
  InputMessageProps &
  OtherInputFieldProps &
  SelectHTMLAttributes<HTMLSelectElement>;

/**
 * Input with a set of options to select from.
 * @constructor
 */
export const InputDropdown = forwardRef<HTMLSelectElement, InputDropdownProps>(
  (
    {
      id,
      name,
      error,
      errorMessage,
      disabled,
      defaultValue,
      value = '',
      required,
      label,
      subheading,
      placeholder,
      helperText,
      href,
      tertiaryLabel,
      tertiaryLabelAs,
      tertiaryLabelIcon,
      tertiaryLabelIconPosition,
      onTertiaryLabelClick,
      onSelectBlur,
      onChange,
      onSelectFocus,
      options,
      ...props
    }: InputDropdownProps,
    ref: ForwardedRef<HTMLSelectElement>,
  ) => {
    const textSizeClasses = useText({ size: 'medium', weight: 'regular' });
    const { labelProps, fieldProps, descriptionProps, errorMessageProps } = useField({
      id,
      label,
      description: helperText,
      errorMessage,
    });
    const optionEls = useMemo(() => {
      const opts = options.slice();

      if (placeholder) {
        opts.unshift({
          value: '',
          label: placeholder,
          selected: true,
          disabled: true,
        });
      }

      return opts.map((option) => (
        <option disabled={option.disabled} key={option.label} value={option.value}>
          {option.label}
        </option>
      ));
    }, [options, placeholder]);

    const shouldShowPlaceholder = useMemo(
      () => !!placeholder && !value && !defaultValue,
      [placeholder, value, defaultValue],
    );

    const invalid = error || !!errorMessage ? 'true' : 'false';

    return (
      <div>
        <InputLabel
          error={error || !!errorMessage}
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
        <div className={fieldStyles.field}>
          <select
            {...fieldProps}
            aria-invalid={invalid}
            className={clsx(
              fieldStyles.input.dropdown,
              {
                [fieldStyles.input.base]: !error && !errorMessage,
                [fieldStyles.input.dropdownPlaceholder]: shouldShowPlaceholder,
              },
              textSizeClasses,
            )}
            defaultValue={defaultValue}
            disabled={disabled}
            id={id}
            name={name}
            required={required}
            value={value}
            onBlur={onSelectBlur}
            onChange={onChange}
            onFocus={onSelectFocus}
            {...props}
            ref={ref}
          >
            {optionEls}
          </select>
          {shouldShowPlaceholder && <Text className={styles.placeholder}>{placeholder}</Text>}
          <Icon aria-hidden="true" className={styles.chevron} icon="chevron_down" variant="functionalIcons" />
        </div>
        <InputMessage
          descriptionProps={descriptionProps}
          disabled={disabled}
          errorMessage={errorMessage}
          errorMessageProps={errorMessageProps}
          helperText={helperText}
        />
      </div>
    );
  },
);

InputDropdown.displayName = 'InputDropdown';

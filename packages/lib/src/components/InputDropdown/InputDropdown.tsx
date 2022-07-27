import { ChangeEventHandler, ForwardedRef, SelectHTMLAttributes, forwardRef, useMemo } from 'react';
import clsx from 'clsx';

import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { OtherInputFieldProps } from '../InputField/InputField';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';
import { Icon } from '../Icon/Icon';

import * as styles from './InputDropdown.css';
import * as fieldStyles from '../InputField/InputField.css';

import { useText } from '../../hooks/typography';

export const InputDropdownStyles = styles;

export type InputOption = {
  value: string | number;
  label: string;
  selected?: boolean;
  disabled?: boolean;
};

export type InputDropdownProps = {
  options: InputOption[];
  onChange?: ChangeEventHandler<HTMLSelectElement>;
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
      value,
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
      onChange,
      options,
      ...props
    }: InputDropdownProps,
    ref: ForwardedRef<HTMLSelectElement>,
  ) => {
    const textSizeClasses = useText({ size: 'medium', weight: 'regular' });
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
        <option disabled={option.disabled} key={option.label} selected={option.selected} value={option.value}>
          {option.label}
        </option>
      ));
    }, [options, placeholder]);

    const invalid = error || !!errorMessage ? 'true' : 'false';

    return (
      <div>
        {!!label && (
          <InputLabel
            error={error || !!errorMessage}
            href={href}
            htmlFor={id}
            label={label}
            subheading={subheading}
            tertiaryLabel={tertiaryLabel}
            tertiaryLabelAs={tertiaryLabelAs}
            tertiaryLabelIcon={tertiaryLabelIcon}
            tertiaryLabelIconPosition={tertiaryLabelIconPosition}
            onTertiaryLabelClick={onTertiaryLabelClick}
          />
        )}
        <div className={fieldStyles.field}>
          <select
            aria-invalid={invalid}
            className={clsx(
              {
                [fieldStyles.input.base]: !error && !errorMessage,
                [fieldStyles.input.dropdown]: true,
              },
              textSizeClasses,
            )}
            defaultValue={defaultValue}
            disabled={disabled}
            id={id}
            name={name}
            required={required}
            value={value}
            onChange={onChange}
            {...props}
            ref={ref}
          >
            {optionEls}
          </select>
          <Icon className={styles.chevron} icon="chevron_down" variant="functionalIcons" />
        </div>
        <InputMessage errorMessage={errorMessage} helperText={helperText} />
      </div>
    );
  },
);

InputDropdown.displayName = 'InputDropdown';

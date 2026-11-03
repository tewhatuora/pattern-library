import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEvent,
  FocusEventHandler,
  ForwardedRef,
  SelectHTMLAttributes,
  forwardRef,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useField } from '@react-aria/label';
import { clsx } from 'clsx';

import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { OtherInputFieldProps } from '../InputField/InputField';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

import * as fieldStyles from '../InputField/InputField.css';
import * as styles from './InputDropdown.css';

import { useText } from '../../hooks/typography';

export const InputDropdownStyles = styles;

export type InputOption = {
  /** Value submitted with the form, and the value `onChange` reads from `event.target`. */
  value: string | number;
  /** Text shown for the option. Also used as the React key, so keep labels unique. */
  label: string;
  /** Initially selected option, when neither `value`, `defaultValue` nor `placeholder` is set. */
  selected?: boolean;
  disabled?: boolean;
};

export type InputDropdownProps = {
  /**
   * Options to choose from. A `placeholder` adds a disabled, empty first option that is selected until the
   * user chooses, in which case `selected` on an option is ignored.
   */
  options: InputOption[];
  /** Called when the select loses focus. Same as `onBlur`; both are called if you pass both. */
  onSelectBlur?: FocusEventHandler<HTMLSelectElement>;
  /** Called with the change event when the user picks an option. Fires whether or not `value` is set. */
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  /** Called when the select gets focus. Same as `onFocus`; both are called if you pass both. */
  onSelectFocus?: FocusEventHandler<HTMLSelectElement>;
  /**
   * Add `*` to the label when `required`.
   * @default true
   */
  showRequiredAsterisk?: boolean;
} & InputLabelProps &
  InputMessageProps &
  // The input field's handlers are typed for input elements; the select's come from SelectHTMLAttributes
  Omit<OtherInputFieldProps, 'onBlur' | 'onFocus' | 'onChange'> &
  SelectHTMLAttributes<HTMLSelectElement>;

/**
 * A native `select` styled to match the other fields. Set `value` and `onChange` to control it, or
 * `defaultValue` to leave it uncontrolled. Pass `id` so the label is linked to the select.
 *
 * @example
 * <InputDropdown
 *   id="region"
 *   label="Region"
 *   name="region"
 *   options={[
 *     { value: 'akl', label: 'Auckland' },
 *     { value: 'wlg', label: 'Wellington' },
 *   ]}
 *   placeholder="Select a region"
 *   onChange={(event) => setRegion(event.target.value)}
 * />
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
      showRequiredAsterisk = true,
      label,
      subheading,
      placeholder,
      helperText,
      href,
      tertiaryLabel,
      tertiaryLabelAs,
      tertiaryLabelIcon,
      tertiaryLabelIconPosition,
      tertiaryLabelTooltip,
      onTertiaryLabelClick,
      onSelectBlur,
      onBlur,
      onChange,
      onSelectFocus,
      onFocus,
      className,
      options,
      labelProps: consumerLabelProps,
      descriptionProps: consumerDescriptionProps,
      errorMessageProps: consumerErrorMessageProps,
      // Label props that don't apply to the select element
      as,
      htmlFor,
      ...props
    }: InputDropdownProps,
    ref: ForwardedRef<HTMLSelectElement>,
  ) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
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

    const isControlled = value !== undefined;
    // Without a value or defaultValue, start on the placeholder or the option marked as selected
    const initialValue = defaultValue ?? (placeholder ? '' : options.find((option) => option.selected)?.value);
    // Tracks an uncontrolled select's value, so the placeholder text can be shown or hidden
    const [uncontrolledValue, setUncontrolledValue] = useState(initialValue);
    const currentValue = isControlled ? value : uncontrolledValue;

    const shouldShowPlaceholder = !!placeholder && !currentValue;

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLSelectElement>) => {
        if (!isControlled) {
          setUncontrolledValue(e.target.value);
        }

        onChange?.(e);
      },
      [isControlled, onChange],
    );

    const handleBlur = useCallback(
      (e: FocusEvent<HTMLSelectElement>) => {
        onSelectBlur?.(e);
        onBlur?.(e);
      },
      [onSelectBlur, onBlur],
    );

    const handleFocus = useCallback(
      (e: FocusEvent<HTMLSelectElement>) => {
        onSelectFocus?.(e);
        onFocus?.(e);
      },
      [onSelectFocus, onFocus],
    );

    const invalid = error || !!errorMessage ? 'true' : 'false';

    const handleClickIcon = useCallback(() => {
      containerRef?.current?.querySelector('select')?.focus();
    }, [containerRef]);

    return (
      <div>
        <InputLabel
          error={error || !!errorMessage}
          href={href}
          htmlFor={id}
          label={label}
          labelProps={{ ...consumerLabelProps, ...labelProps }}
          required={showRequiredAsterisk && required}
          subheading={subheading}
          tertiaryLabel={tertiaryLabel}
          tertiaryLabelAs={tertiaryLabelAs}
          tertiaryLabelIcon={tertiaryLabelIcon}
          tertiaryLabelIconPosition={tertiaryLabelIconPosition}
          tertiaryLabelTooltip={tertiaryLabelTooltip}
          onTertiaryLabelClick={onTertiaryLabelClick}
        />
        <div className={fieldStyles.field} ref={containerRef}>
          <select
            id={id}
            {...fieldProps}
            aria-invalid={invalid}
            className={clsx(
              fieldStyles.input.dropdown,
              {
                [fieldStyles.input.base]: !error && !errorMessage,
                [fieldStyles.input.dropdownPlaceholder]: shouldShowPlaceholder,
              },
              textSizeClasses,
              className,
            )}
            // Only one of these is set, so the select is either controlled or uncontrolled
            {...(isControlled ? { value } : { defaultValue: initialValue })}
            disabled={disabled}
            name={name}
            required={required}
            {...props}
            ref={ref}
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
          >
            {optionEls}
          </select>
          {shouldShowPlaceholder && <Text className={styles.placeholder}>{placeholder}</Text>}
          <Icon
            aria-hidden="true"
            className={styles.chevron}
            icon="chevron_down"
            variant="functionalIcons"
            onClick={handleClickIcon}
          />
        </div>
        <InputMessage
          descriptionProps={{ ...consumerDescriptionProps, ...descriptionProps }}
          disabled={disabled}
          errorMessage={errorMessage}
          errorMessageProps={{ ...consumerErrorMessageProps, ...errorMessageProps }}
          helperText={helperText}
        />
      </div>
    );
  },
);

InputDropdown.displayName = 'InputDropdown';

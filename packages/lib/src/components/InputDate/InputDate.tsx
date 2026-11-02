import { FocusEventHandler, ForwardedRef, MutableRefObject, forwardRef, useCallback, useId } from 'react';
import { useField } from '@react-aria/label';
import { clsx } from 'clsx';

import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { OtherInputFieldProps } from '../InputField/InputField';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';
import { InputText } from '../InputText/InputText';
import { Box } from '../Box/Box';
import { ScreenReadersOnly } from '../ScreenReadersOnly/ScreenReadersOnly';

import * as styles from '../InputField/InputField.css';

export const InputDateStyles = styles;

/** Value object for InputDate, containing `day`, `month` & `year` */
export type InputDateValue = {
  /** Day of the month, `1` to `31`. */
  day?: string;
  /** Month number, `1` to `12`. */
  month?: string;
  /** Year as typed, e.g. `2024`. */
  year?: string;
};

type InputDateRefs = {
  day?: MutableRefObject<HTMLInputElement | null>;
  month?: MutableRefObject<HTMLInputElement | null>;
  year?: MutableRefObject<HTMLInputElement | null>;
};

type DateSegment = keyof InputDateValue;

const segments: { field: DateSegment; label: string; max?: string }[] = [
  { field: 'day', label: 'Day', max: '31' },
  { field: 'month', label: 'Month', max: '12' },
  { field: 'year', label: 'Year' },
];

/** Called when the day, month or year changes */
export type InputDateOnChangeFn = ({ day, month, year }: InputDateValue) => void;

export type InputDateProps = Omit<InputLabelProps, 'error'> &
  InputMessageProps &
  Omit<OtherInputFieldProps, 'value' | 'onChange'> & {
    /**
     * Error per field. A field with an error gets error styling and its message read out with it. The messages
     * are also shown below the group, unless `errorMessage` is set, which is shown instead.
     */
    errors?: {
      day?: string | undefined;
      month?: string | undefined;
      year?: string | undefined;
    };
    /** Controlled value. Omit for an uncontrolled date. */
    value?: InputDateValue;
    /**
     * Called when any field changes. With `value` set it gets all three parts. Without it, only the part
     * that changed, so keep the date in state and pass it back as `value`.
     */
    onChange?: InputDateOnChangeFn;
    /** Called when focus leaves any of the three fields. */
    onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    /** Called when any of the three fields gets focus. */
    onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    /**
     * Add `*` to the label when `required`.
     * @default true
     */
    showRequiredAsterisk?: boolean;
  };

/**
 * Separate day, month and year fields, grouped under one label. Values are strings and aren't checked as a
 * real date, so validate them and report problems with `errors`. `name` is suffixed with `_day`, `_month` and
 * `_year` for the fields.
 *
 * @example
 * <InputDate
 *   errors={{ month: 'Enter a month between 1 and 12' }}
 *   label="Date of birth"
 *   name="dob"
 *   value={dob}
 *   onChange={setDob}
 * />
 */
export const InputDate = forwardRef<InputDateRefs, InputDateProps>(
  (
    {
      id,
      name,
      errorMessage,
      errors,
      label,
      disabled,
      required,
      showRequiredAsterisk = true,
      value,
      subheading,
      helperText,
      href,
      tertiaryLabel,
      tertiaryLabelAs,
      tertiaryLabelIcon,
      tertiaryLabelIconPosition,
      tertiaryLabelTooltip,
      onTertiaryLabelClick,
      onChange,
      onBlur,
      onFocus,
    }: InputDateProps,
    ref: ForwardedRef<InputDateRefs>,
  ) => {
    const refObj = ref !== null && typeof ref !== 'function' ? ref.current : null;
    const segmentRefs = { day: refObj?.day || null, month: refObj?.month || null, year: refObj?.year || null };

    const generatedId = useId();
    const baseId = id ?? generatedId;

    // A segment error is always given to screen readers with its field. It's only shown when there's no
    // overall errorMessage, which otherwise summarises the problem.
    const segmentErrors = [...new Set(segments.map(({ field }) => errors?.[field]?.trim()).filter(Boolean))];
    const visibleErrorMessage = errorMessage || segmentErrors.join(' ') || undefined;

    const { labelProps, fieldProps, descriptionProps, errorMessageProps } = useField({
      label,
      description: helperText,
      errorMessage: visibleErrorMessage,
    });

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onFocus?.(e);
      },
      [onFocus],
    );

    const handleChange = useCallback(
      (field: DateSegment) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange?.({ ...value, [field]: e.target.value });
      },
      [value, onChange],
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onBlur?.(e);
      },
      [onBlur],
    );

    return (
      // The label names the group of fields; it isn't the label of any one input
      <div aria-labelledby={labelProps.id} role="group">
        <InputLabel
          error={!!visibleErrorMessage}
          href={href}
          label={label}
          labelProps={{ id: labelProps.id }}
          required={showRequiredAsterisk && required}
          subheading={subheading}
          tertiaryLabel={tertiaryLabel}
          tertiaryLabelAs={tertiaryLabelAs}
          tertiaryLabelIcon={tertiaryLabelIcon}
          tertiaryLabelIconPosition={tertiaryLabelIconPosition}
          tertiaryLabelTooltip={tertiaryLabelTooltip}
          onTertiaryLabelClick={onTertiaryLabelClick}
        />
        <div className={clsx(styles.field, styles.fieldSegments)}>
          {segments.map(({ field, label: segmentLabel, max }) => {
            const segmentErrorId = `${baseId}_${field}_error`;
            const describedBy = [fieldProps['aria-describedby'], errors?.[field] && segmentErrorId]
              .filter(Boolean)
              .join(' ');

            return (
              <Box className={styles.fieldSegment} key={field}>
                <InputText
                  aria-describedby={describedBy || undefined}
                  aria-labelledby={labelProps.id}
                  disabled={disabled}
                  error={!!errors?.[field]}
                  id={`${baseId}_${field}`}
                  inputMode="numeric"
                  label={segmentLabel}
                  max={max}
                  min="1"
                  // An empty name leaves the field out of form submissions, rather than submitting `undefined_day`
                  name={name ? `${name}_${field}` : ''}
                  pattern="[0-9]*"
                  ref={segmentRefs[field]}
                  required={required}
                  showRequiredAsterisk={showRequiredAsterisk}
                  type="number"
                  // When the date is controlled, keep each field controlled even before it has a value
                  value={value ? (value[field] ?? '') : undefined}
                  onBlur={handleBlur}
                  onChange={handleChange(field)}
                  onFocus={handleFocus}
                />
                {!!errors?.[field] && <ScreenReadersOnly id={segmentErrorId}>{errors[field]}</ScreenReadersOnly>}
              </Box>
            );
          })}
        </div>
        <InputMessage
          descriptionProps={descriptionProps}
          disabled={disabled}
          errorMessage={visibleErrorMessage}
          errorMessageProps={errorMessageProps}
          helperText={helperText}
        />
      </div>
    );
  },
);

InputDate.displayName = 'InputDate';

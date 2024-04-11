import { Ref, forwardRef } from 'react';

import { GroupBase, SelectInstance } from 'react-select';

import { useField } from '@react-aria/label';

import clsx from 'clsx';

import { InputLabel, type InputLabelProps } from '../InputLabel/InputLabel';
import { InputMessage, type InputMessageProps } from '../InputMessage/InputMessage';
import { ComboboxAsync, type ComboboxAsyncProps } from './ComboboxAsync';

type ComboboxAsyncFieldProps<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = ComboboxAsyncProps<Option, IsMulti, Group> &
  InputLabelProps &
  InputMessageProps & {
    /** show asterisk when field is required (default: `true`) */
    showRequiredAsterisk?: boolean;
  };

function ComboboxAsyncField<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: ComboboxAsyncFieldProps<Option, IsMulti, Group>, ref: Ref<SelectInstance<Option, IsMulti, Group>>) {
  const {
    label,
    subheading,
    tertiaryLabel,
    tertiaryLabelAs,
    tertiaryLabelIcon,
    tertiaryLabelIconPosition,
    onTertiaryLabelClick,
    id,
    href,
    error,
    required,
    showRequiredAsterisk = true,
    disabled,
    errorMessage,
    helperText,
    ...comboboxProps
  } = props;
  const {
    labelProps,
    fieldProps: { id: inputId, ...fieldProps },
    descriptionProps,
    errorMessageProps,
  } = useField({
    id,
    label,
    description: helperText,
    errorMessage,
  });

  return (
    <div>
      <InputLabel
        disabled={disabled}
        error={error || !!errorMessage}
        href={href}
        htmlFor={inputId}
        label={label}
        labelProps={labelProps}
        required={showRequiredAsterisk && required}
        subheading={subheading}
        tertiaryLabel={tertiaryLabel}
        tertiaryLabelAs={tertiaryLabelAs}
        tertiaryLabelIcon={tertiaryLabelIcon}
        tertiaryLabelIconPosition={tertiaryLabelIconPosition}
        onTertiaryLabelClick={onTertiaryLabelClick}
      />
      <ComboboxAsync
        ariaLiveMessages={{
          onFocus: () => clsx(helperText, errorMessage),
        }}
        error={error || !!errorMessage}
        inputId={inputId}
        isDisabled={disabled}
        ref={ref}
        required={required}
        {...fieldProps}
        {...comboboxProps}
      />
      <InputMessage
        descriptionProps={descriptionProps}
        disabled={disabled}
        errorMessage={errorMessage}
        errorMessageProps={errorMessageProps}
        helperText={helperText}
      />
    </div>
  );
}

const WithRef = forwardRef(ComboboxAsyncField) as <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: ComboboxAsyncFieldProps<Option, IsMulti, Group> & { ref?: Ref<SelectInstance<Option, IsMulti, Group>> },
) => JSX.Element;

export { WithRef as ComboboxAsyncField };

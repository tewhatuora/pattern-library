import { FormEvent, FormEventHandler, ForwardedRef, RefObject, forwardRef, useMemo } from 'react';
import { useTextField } from '@react-aria/textfield';
import { useObjectRef } from '@react-aria/utils';

import { InputField, OtherInputFieldProps } from '../InputField/InputField';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';

import * as styles from './InputSearch.css';

export const InputSearchStyles = styles;

export type InputSearchProps = Omit<OtherInputFieldProps, 'error' | 'disabled' | 'required'> & {
  /**
   * Called when the search is submitted, by Enter or the search button. Setting it wraps the field in a
   * `form`; without it there is no form and the button does nothing. The event isn't prevented, so call
   * `event.preventDefault()` to stay on the page.
   */
  onSubmit?: FormEventHandler<HTMLFormElement>;
  /**
   * Accessible name of the input. Ignored when `aria-labelledby` is set.
   * @default 'Search'
   */
  'aria-label'?: string;
  /** Id of an element that names the input. */
  'aria-labelledby'?: string;
  /**
   * Accessible name of the search button.
   * @default 'Search'
   */
  submitLabel?: string;
};

const INPUT_TYPE = 'search';

/**
 * A search field with a clear button and a search button. Handle `onSubmit` to run the search.
 *
 * @example
 * <InputSearch
 *   name="q"
 *   placeholder="Search"
 *   onSubmit={(event) => {
 *     event.preventDefault();
 *   }}
 * />
 */
export const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  (
    {
      id,
      name,
      placeholder,
      value,
      defaultValue,
      onBlur,
      onChange,
      onFocus,
      onSubmit,
      submitLabel = 'Search',
      ...rest
    }: InputSearchProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    // Convert the forwarded ref (which may be a callback) into an object ref that
    // React Aria’s `useTextField` can safely work with.
    const inputRef = useObjectRef(ref);

    const { inputProps } = useTextField(
      {
        id,
        name,
        placeholder,
        value,
        defaultValue,
        ...rest,
        'aria-label': rest['aria-label'] ?? (rest['aria-labelledby'] ? undefined : 'Search'),
        type: INPUT_TYPE,
      },
      inputRef as RefObject<HTMLInputElement>,
    );

    const element = useMemo(() => {
      return typeof onSubmit === 'function' ? 'form' : 'div';
    }, [onSubmit]);

    return (
      <Box
        as={element}
        className={styles.container}
        onSubmit={onSubmit && ((event) => onSubmit(event as unknown as FormEvent<HTMLFormElement>))}
      >
        <InputField
          {...inputProps}
          className={styles.input}
          clearable
          defaultValue={defaultValue}
          id={id}
          name={name}
          placeholder={placeholder}
          ref={inputRef}
          type={INPUT_TYPE}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
        />
        <Button aria-label={submitLabel} className={styles.button} icon="search" type="submit" variant="primary" />
      </Box>
    );
  },
);

InputSearch.displayName = 'InputSearch';

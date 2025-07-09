import { FormEventHandler, ForwardedRef, RefObject, forwardRef, useMemo } from 'react';
import { useTextField } from '@react-aria/textfield';
import { useObjectRef } from '@react-aria/utils';

import { InputField, OtherInputFieldProps } from '../InputField/InputField';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';

import * as styles from './InputSearch.css';

export const InputSearchStyles = styles;

export type InputSearchProps = Omit<OtherInputFieldProps, 'error' | 'disabled' | 'required'> & {
  onSubmit?: FormEventHandler<HTMLFormElement>;
};

const INPUT_TYPE = 'search';

/**
 * On search, leads to search results page.
 * @constructor
 */
export const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  (
    { id, name, placeholder, value, defaultValue, onBlur, onChange, onFocus, onSubmit, ...rest }: InputSearchProps,
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
        type: INPUT_TYPE,
      },
      inputRef as RefObject<HTMLInputElement>,
    );

    const element = useMemo(() => {
      return typeof onSubmit === 'function' ? 'form' : 'div';
    }, [onSubmit]);

    return (
      <Box as={element} className={styles.container} onSubmit={onSubmit}>
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
        <Button className={styles.button} icon="search" type="submit" variant="primary" />
      </Box>
    );
  },
);

InputSearch.displayName = 'InputSearch';

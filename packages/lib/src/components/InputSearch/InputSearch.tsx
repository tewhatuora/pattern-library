import { FormEventHandler, ForwardedRef, RefObject, forwardRef, useMemo } from 'react';
import { useTextField } from '@react-aria/textfield';

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
      ref as RefObject<HTMLInputElement>,
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
          ref={ref}
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

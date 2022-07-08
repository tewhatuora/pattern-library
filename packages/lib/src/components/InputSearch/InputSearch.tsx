import { InputField, OtherInputFieldProps } from '../InputField/InputField';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';

import * as styles from './InputSearch.css';

export const InputSearchStyles = styles;

export type InputSearchProps = Omit<OtherInputFieldProps, 'error' | 'disabled' | 'required'>;

/**
 * On search, leads to search results page.
 * @constructor
 */
export const InputSearch = ({ id, name, placeholder, value, defaultValue, onChange }: InputSearchProps) => {
  return (
    <Box className={styles.container} display="flex" flexDirection="row">
      <InputField
        className={styles.input}
        clearable
        defaultValue={defaultValue}
        id={id}
        name={name}
        placeholder={placeholder}
        type="search"
        value={value}
        onChange={onChange}
      />
      <Button className={styles.button} icon="search" variant="primary" />
    </Box>
  );
};

InputSearch.displayName = 'InputSearch';

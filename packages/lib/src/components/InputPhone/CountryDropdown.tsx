import { memo, useCallback, useMemo } from 'react';
import { getCountryCallingCode, isSupportedCountry } from 'react-phone-number-input';
import { hasFlag } from 'country-flag-icons';
import Flags, { FlagComponent } from 'country-flag-icons/react/3x2';
import clsx from 'clsx';

import { InputDropdown, InputDropdownProps } from '../InputDropdown/InputDropdown';
import { Icon } from '../Icon/Icon';

import * as styles from './CountryDropdown.css';

export const CountryDropdownStyles = styles;

/**
 * Country flag dropdown for InputPhone
 * @constructor
 */
export const CountryDropdown = memo(({ value, onChange, options, ...props }: InputDropdownProps) => {
  const handleCountrySelect = useCallback(
    (event) => {
      const value = event.target.value;

      onChange?.(value === 'International' ? undefined : value);
    },
    [onChange],
  );

  const Flag = useMemo(() => {
    return hasFlag(value || '') ? Flags[value as keyof FlagComponent] : () => <Icon icon="international" />;
  }, [value]);

  const countryOptions = useMemo(() => {
    return options.map(({ value, label }: any) => ({
      value,
      label: `${label} ${isSupportedCountry(value) ? `(+${getCountryCallingCode(value)})` : ''}`,
    }));
  }, [options]);

  // "ZZ" means "International".
  return (
    <div className={styles.countryDropdown}>
      <InputDropdown
        {...props}
        id="countryCode"
        name="countryCode"
        options={countryOptions}
        value={value || 'International'}
        onChange={handleCountrySelect}
      />
      <div
        className={clsx({
          [styles.flagWrapper.base]: true,
          [styles.flagWrapper.international]: !value || value == 'International',
        })}
      >
        <Flag />
      </div>
    </div>
  );
});

CountryDropdown.displayName = 'CountryDropdown';

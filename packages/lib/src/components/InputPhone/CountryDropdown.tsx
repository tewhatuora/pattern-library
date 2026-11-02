import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { getCountryCallingCode, isSupportedCountry } from 'react-phone-number-input';
import { clsx } from 'clsx';

import { InputDropdown, InputDropdownProps } from '../InputDropdown/InputDropdown';
import { Icon } from '../Icon/Icon';

import { flagLoaders } from './flags';
import * as styles from './CountryDropdown.css';

export const CountryDropdownStyles = styles;

// Flags that have been loaded, shared by every CountryDropdown so each flag is only fetched once
const flagCache = new Map<string, string>();

/**
 * Loads the SVG markup for a country's flag on demand
 * @param country
 * @returns the SVG markup, or undefined until it has loaded
 */
const useFlagSvg = (country: string | undefined) => {
  const [, setLoadedCountry] = useState<string>();

  useEffect(() => {
    if (!country || !flagLoaders[country] || flagCache.has(country)) {
      return;
    }

    let active = true;

    flagLoaders[country]()
      .then(({ default: svg }) => {
        flagCache.set(country, svg);

        // Re-render to show the flag that's now in the cache
        if (active) {
          setLoadedCountry(country);
        }
      })
      // If the flag can't be loaded (e.g. offline), the space is left empty
      .catch(() => {});

    return () => {
      active = false;
    };
  }, [country]);

  return country ? flagCache.get(country) : undefined;
};

/**
 * Country flag dropdown for InputPhone
 * @constructor
 */
export const CountryDropdown = memo(
  ({
    value,
    onChange,
    options,
    // Passed by react-phone-number-input but not used here; drop it so it isn't spread onto the DOM
    iconComponent,
    ...props
  }: InputDropdownProps & { onChange: (value: string | undefined) => void; iconComponent?: unknown }) => {
    const handleCountrySelect = useCallback(
      (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;

        onChange?.(value === 'International' ? undefined : value);
      },
      [onChange],
    );

    const hasFlag = !!value && !!flagLoaders[value];
    const flagSvg = useFlagSvg(hasFlag ? value : undefined);

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
          // id is generated, and name comes from react-phone-number-input (`<name>Country`), so a page can have
          // several phone inputs without duplicate ids or an extra field in form submissions
          className={styles.select}
          options={countryOptions}
          value={value || 'International'}
          onChange={handleCountrySelect as InputDropdownProps['onChange']}
        />
        <div
          aria-hidden="true"
          className={clsx(styles.flagWrapper.base, {
            [styles.flagWrapper.international]: !value || value == 'International',
          })}
        >
          {hasFlag ? (
            // The markup comes from country-flag-icons, never from user input
            <span className={styles.flag} dangerouslySetInnerHTML={{ __html: flagSvg ?? '' }} />
          ) : (
            <Icon icon="international" style={{ width: '100%', height: 'auto' }} />
          )}
        </div>
      </div>
    );
  },
);

CountryDropdown.displayName = 'CountryDropdown';

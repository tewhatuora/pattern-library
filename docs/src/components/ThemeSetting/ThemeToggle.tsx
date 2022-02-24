import React, { FormEvent, Fragment } from 'react';

import { Text } from 'moh-design-system/components';

import * as themes from 'moh-design-system/themes';

import { documentedThemes, useThemeSettings } from './ThemeSettingContext';

export function ThemeToggle() {
  const { themeKey, setThemeKey, ready } = useThemeSettings();

  return (
    <Text size="standard" weight="bold">
      {ready ? (
        <select
          value={themeKey}
          onChange={(ev: FormEvent<HTMLSelectElement>) => {
            setThemeKey(ev.currentTarget.value as keyof typeof themes);
          }}
        >
          {Object.keys(themes)
            .filter((key) => documentedThemes.includes(key as keyof typeof themes))
            .map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
        </select>
      ) : (
        <Fragment>&nbsp;</Fragment>
      )}
    </Text>
  );
}

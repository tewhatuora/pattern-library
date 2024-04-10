import { GroupBase, StylesConfig } from 'react-select';

export function getStyles<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(multiline?: boolean): StylesConfig<Option, IsMulti, Group> {
  return {
    dropdownIndicator: () => ({
      display: 'none',
    }),
    valueContainer: (styles, { isMulti }) => ({
      ...styles,
      alignItems: !isMulti ? 'flex-start' : undefined,
    }),
    singleValue: multiline
      ? (styles) => ({
          ...styles,
          whiteSpace: 'unset',
        })
      : undefined,
  };
}

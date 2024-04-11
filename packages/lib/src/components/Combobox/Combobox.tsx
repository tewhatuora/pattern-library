import Select, { GroupBase, Props } from 'react-select';

import { getComponents } from './components';
import { getClassNames } from './classNames';
import { getStyles } from './styles';

type ComboBoxProps = {
  /** Error state */
  error?: boolean;
  multiline?: boolean;
};

export function Combobox<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: ComboBoxProps & Props<Option, IsMulti, Group>) {
  const { error, placeholder, multiline = false, ...rest } = props;

  return (
    <Select
      {...rest}
      aria-invalid={error}
      classNames={getClassNames<Option, IsMulti, Group>(error)}
      components={getComponents<Option, IsMulti, Group>(props.isMulti)}
      placeholder={placeholder || false}
      styles={getStyles<Option, IsMulti, Group>(multiline)}
      unstyled
    />
  );
}

import Select, { GroupBase, Props, SelectInstance } from 'react-select';

import { ForwardedRef, forwardRef } from 'react';

import { getComponents } from './components';
import { getClassNames } from './classNames';
import { getStyles } from './styles';

type ComboBoxProps = {
  /** Error state */
  error?: boolean;
  multiline?: boolean;
};

function Combobox<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: ComboBoxProps & Props<Option, IsMulti, Group>, ref: ForwardedRef<SelectInstance<Option, IsMulti, Group>>) {
  const { error, placeholder, multiline = false, ...rest } = props;

  return (
    <Select
      {...rest}
      aria-invalid={error}
      classNames={getClassNames<Option, IsMulti, Group>(error)}
      components={getComponents<Option, IsMulti, Group>(props.isMulti)}
      placeholder={placeholder || false}
      ref={ref}
      styles={getStyles<Option, IsMulti, Group>(multiline)}
      unstyled
    />
  );
}

const WithRef = forwardRef(Combobox) as <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: ComboBoxProps & Props<Option, IsMulti, Group> & { ref?: ForwardedRef<SelectInstance<Option, IsMulti, Group>> },
) => JSX.Element;

export { WithRef as Combobox };

import Select, { GroupBase, Props, SelectInstance } from 'react-select';

import { Ref, forwardRef } from 'react';

import { getComponents } from './components';
import { getClassNames } from './classNames';
import { getStyles } from './styles';

export type ComboboxBaseProps = {
  /** Error state */
  error?: boolean;
  multiline?: boolean;
};

export type ComboboxProps<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = ComboboxBaseProps & Props<Option, IsMulti, Group>;

function Combobox<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: ComboboxBaseProps & Props<Option, IsMulti, Group>, ref: Ref<SelectInstance<Option, IsMulti, Group>>) {
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
  props: ComboboxBaseProps & Props<Option, IsMulti, Group> & { ref?: Ref<SelectInstance<Option, IsMulti, Group>> },
) => JSX.Element;

export { WithRef as Combobox };

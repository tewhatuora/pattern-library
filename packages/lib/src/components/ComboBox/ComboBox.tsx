import Select, { GroupBase, Props } from 'react-select';

import { getComponents } from './components';
import { getClassNames } from './classNames';

type ComboBoxProps = {
  /** Error state */
  error?: boolean;
  isAsync?: boolean;
};

export const ComboBox = <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: ComboBoxProps & Props<Option, IsMulti, Group>,
) => {
  const { error, ...rest } = props;

  return (
    <Select
      {...rest}
      aria-invalid={error}
      classNames={getClassNames<Option, IsMulti, Group>(error)}
      components={getComponents<Option, IsMulti, Group>(props.isMulti)}
      styles={{
        dropdownIndicator: () => ({
          display: 'none',
        }),
      }}
      unstyled
    />
  );
};

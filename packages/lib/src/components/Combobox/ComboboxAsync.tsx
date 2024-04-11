import AsyncSelect, { AsyncProps } from 'react-select/async';

import { GroupBase, SelectInstance } from 'react-select';

import { Ref, forwardRef } from 'react';

import { getComponents } from './components';
import { getClassNames } from './classNames';
import { getStyles } from './styles';
import type { ComboboxBaseProps } from './Combobox';

export type ComboboxAsyncProps<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = ComboboxBaseProps & AsyncProps<Option, IsMulti, Group>;

function ComboboxAsync<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: ComboboxAsyncProps<Option, IsMulti, Group>, ref: Ref<SelectInstance<Option, IsMulti, Group>>) {
  const { error, placeholder, multiline = false, ...rest } = props;

  return (
    <AsyncSelect
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

const WithRef = forwardRef(ComboboxAsync) as <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: ComboboxBaseProps & AsyncProps<Option, IsMulti, Group> & { ref?: Ref<SelectInstance<Option, IsMulti, Group>> },
) => JSX.Element;

export { WithRef as ComboboxAsync };

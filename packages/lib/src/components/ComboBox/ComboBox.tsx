import Select, { ClearIndicatorProps, GroupBase, Props } from 'react-select';

import clsx from 'clsx';

import * as styles from './ComboBox.css';
import * as inputStyles from '../InputField/InputField.css';
import { Icon, ScreenReadersOnly, useText } from '..';

const ClearIndicatorSingle = <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: ClearIndicatorProps<Option, IsMulti, Group>,
) => {
  const {
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div className={styles.clearIndicatorSingle} ref={ref} {...restInnerProps}>
      <ScreenReadersOnly>Clear</ScreenReadersOnly>
      <Icon icon="clear_field" variant="functionalIcons" />
    </div>
  );
};

const ClearIndicatorMulti = <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: ClearIndicatorProps<Option, IsMulti, Group>,
) => {
  const {
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div className={styles.clearIndicatorMulti} ref={ref} {...restInnerProps}>
      Clear
    </div>
  );
};

export const ComboBox = <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: Props<Option, IsMulti, Group>,
) => {
  const textClass = useText({});

  return (
    <Select
      {...props}
      classNames={{
        control: () => clsx(styles.combobox, inputStyles.input.base, textClass),
        placeholder: () => styles.placeholder,
        menu: () => styles.menu,
        option: ({ isFocused, isSelected }) => styles.option({ isFocused, isSelected }),
        // dropdownIndicator: ,
        // indicatorSeparator: ,
        // clearIndicator: ,
        // option: ,
        // valueContainer: ,
        // singleValue: ,
        // multiValue: ,
        // multiValueLabel: ,
        // multiValueRemove: ,
      }}
      components={{ ClearIndicator: props.isMulti ? ClearIndicatorMulti : ClearIndicatorSingle }}
      styles={{
        dropdownIndicator: () => ({
          display: 'none',
        }),
      }}
      unstyled
    />
  );
};

import Select, { ClearIndicatorProps, GroupBase, MultiValueRemoveProps, Props } from 'react-select';

import clsx from 'clsx';

import * as styles from './ComboBox.css';
import * as inputStyles from '../InputField/InputField.css';
import * as tagStyles from '../Tag/Tag.css';
import { Icon, ScreenReadersOnly, useText } from '..';

type ComboBoxProps = {
  /** Error state */
  error?: boolean;
};

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

const MultiValueRemove = <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: MultiValueRemoveProps<Option, IsMulti, Group>,
) => {
  const {
    innerProps: {
      ref,
      className, // eslint-disable-line @typescript-eslint/no-unused-vars
      ...restInnerProps
    },
  } = props;
  return (
    <div className={tagStyles.closeButton} ref={ref} {...restInnerProps}>
      <Icon icon="clear_field" variant="tagIcon" />
    </div>
  );
};

export const ComboBox = <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: ComboBoxProps & Props<Option, IsMulti, Group>,
) => {
  const { error, ...rest } = props;
  const textClass = useText({});

  return (
    <Select
      {...rest}
      aria-invalid={error}
      classNames={{
        control: () => clsx(styles.combobox({ error }), inputStyles.input.base, textClass),
        placeholder: () => styles.placeholder,
        menu: () => styles.menu,
        option: ({ isFocused, isSelected }) => styles.option({ isFocused, isSelected }),
        // dropdownIndicator: ,
        // indicatorSeparator: ,
        // clearIndicator: ,
        // option: ,
        valueContainer: () => styles.valueContainer,
        // singleValue: ,
        multiValue: () => tagStyles.tag,
        indicatorsContainer: () => styles.indicatorsContainer,
        // multiValueLabel: ,
        // multiValueRemove: ,
      }}
      components={{
        ClearIndicator: props.isMulti ? ClearIndicatorMulti : ClearIndicatorSingle,
        MultiValueRemove,
      }}
      styles={{
        dropdownIndicator: () => ({
          display: 'none',
        }),
      }}
      unstyled
    />
  );
};

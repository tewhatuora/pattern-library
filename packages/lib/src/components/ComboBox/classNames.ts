import { ClassNamesConfig, GroupBase } from 'react-select';

import clsx from 'clsx';

import * as styles from './ComboBox.css';
import * as inputStyles from '../InputField/InputField.css';
import * as tagStyles from '../Tag/Tag.css';
import { getTextClass } from '..';

export function getClassNames<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(error?: boolean): ClassNamesConfig<Option, IsMulti, Group> {
  return {
    control: () => clsx(styles.combobox({ error }), inputStyles.input.base, getTextClass({})),
    placeholder: () => styles.placeholder,
    menu: () => styles.menu,
    option: ({ isFocused, isSelected }) => styles.option({ isFocused, isSelected }),
    valueContainer: () => styles.valueContainer,
    multiValue: () => tagStyles.tag,
    indicatorsContainer: () => styles.indicatorsContainer,
  };
}

import { ClearIndicatorProps, GroupBase, LoadingIndicatorProps, MultiValueRemoveProps } from 'react-select';

import { SelectComponents } from 'react-select/dist/declarations/src/components';

import * as styles from './ComboBox.css';
import * as tagStyles from '../Tag/Tag.css';

import { Icon, ScreenReadersOnly } from '..';

export const ClearIndicatorSingle = <
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

export const ClearIndicatorMulti = <
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

export const MultiValueRemove = <
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
    selectProps: { isDisabled },
  } = props;

  if (isDisabled) {
    return null;
  }

  return (
    <div className={tagStyles.closeButton} ref={ref} {...restInnerProps}>
      <Icon icon="clear_field" variant="tagIcon" />
    </div>
  );
};

export const LoadingIndicator = <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: LoadingIndicatorProps<Option, IsMulti, Group>,
) => {
  const {
    innerProps: {
      ref,
      className, // eslint-disable-line @typescript-eslint/no-unused-vars
      ...restInnerProps
    },
    selectProps: { isDisabled },
  } = props;

  if (isDisabled) {
    return null;
  }

  return <div className={styles.loadingIndicator} ref={ref} {...restInnerProps} />;
};

export function getComponents<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(isMulti?: boolean): Partial<SelectComponents<Option, IsMulti, Group>> {
  return {
    ClearIndicator: isMulti ? ClearIndicatorMulti : ClearIndicatorSingle,
    MultiValueRemove,
    LoadingIndicator,
  };
}

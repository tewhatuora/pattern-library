import type { JSX } from 'react';
import { PropsWithChildren, useContext, useId, useMemo, useRef, useState } from 'react';
import { useResizeObserver } from '@react-aria/utils';

import { Box } from '../Box/Box';
import { Heading } from '../Heading/Heading';
import { InputDropdown } from '../InputDropdown/InputDropdown';
import { Icon } from '../Icon/Icon';
import { ScreenReadersOnly } from '../ScreenReadersOnly/ScreenReadersOnly';
import { Text } from '../Text/Text';
import { ButtonRoot } from '../Button/ButtonRoot';
import { BreakpointContext } from '../ThemeProvider/BreakpointContext';
import { Breakpoint } from '../../css/breakpoints';
import { formatAge } from '../../utils/dateUtils';

import * as styles from './PersonSelector.css';

export const PersonSelectorStyles = styles;

export type PersonSelectorProps = {
  /**
   * People to choose from. `nhi` identifies each person and must be unique. `isUser` marks the signed-in
   * user. Everyone else is shown as a child, with their age worked out from `birthDate` (an ISO date such as
   * `2021-06-14`).
   */
  people: Readonly<{ name: string; nhi: string; birthDate?: string; isUser?: boolean }[]>;
  /** `nhi` of the selected person. Pair with `onChange`. */
  value?: string;
  /** Called with the `nhi` of the person chosen. */
  onChange?: (nhi: string) => void;
  /** Hide the people while they load. */
  isLoading?: boolean;
  /** Label for the group: a heading beside the buttons, or the dropdown's label when narrow. */
  personSelectorLabel: string;
  /** Id of the dropdown shown when narrow. Generated if omitted. */
  id?: string;
} & Pick<JSX.IntrinsicElements['div'], 'children'>;

/**
 * Chooses whose records to show. Intended as a child of `HeroBlock`, which keeps it stuck to the top of the
 * viewport on scroll. Shows a button per person, or a dropdown on mobile and when the buttons don't fit.
 * Controlled: set `value` from `onChange`.
 *
 * @example
 * <PersonSelector
 *   people={[
 *     { name: 'Aroha Ngata', nhi: 'ZAA0001', isUser: true },
 *     { name: 'Tama Ngata', nhi: 'ZAA0002', birthDate: '2021-06-14' },
 *   ]}
 *   personSelectorLabel="Viewing records for"
 *   value={nhi}
 *   onChange={setNhi}
 * />
 */
export const PersonSelector = ({
  people,
  value,
  onChange,
  isLoading,
  personSelectorLabel,
  id,
}: PropsWithChildren<PersonSelectorProps>) => {
  const generatedId = useId();
  const dropdownId = id ?? generatedId;
  const [isWrapped, setIsWrapped] = useState(false);
  const breakpoint: Breakpoint | null = useContext(BreakpointContext);
  const isUpMd = breakpoint !== 'mobile';
  const wrapper = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const fieldset = useRef<HTMLElement | null>(null);

  useResizeObserver({
    ref: fieldset,
    onResize: () => {
      if (container?.current && wrapper?.current) {
        const wrapped =
          wrapper?.current?.getBoundingClientRect()?.width < container?.current?.getBoundingClientRect()?.width;

        setIsWrapped(wrapped);
      }
    },
  });

  const showFull = isUpMd && !isWrapped;

  const renderButtons = useMemo(() => {
    if (isLoading) {
      return [];
    }
    return people.map((person) => {
      const variant = value === person.nhi ? 'selected' : 'default';
      return (
        <ButtonRoot
          aria-pressed={value === person.nhi}
          className={styles.button({ variant })}
          key={`person-selector-${person.nhi}`}
          onClick={() => onChange?.(person.nhi)}
        >
          <Icon
            className={styles.buttonIconVariants[variant]}
            icon={person.isUser ? 'person' : 'child'}
            noFill={person.isUser ? false : true}
            variant="decorativeIcons"
          />
          <ScreenReadersOnly>{person.isUser ? 'Current user: ' : 'Child: '}</ScreenReadersOnly>
          <Box alignItems="flexStart" display="flex" flexDirection="column" marginLeft="xsmall" overflow="hidden">
            <Text size="medium" weight="bold">
              {person.name}
            </Text>
            {!person.isUser && person.birthDate ? (
              <Text size="xsmall"> {formatAge(person.birthDate).longHand}</Text>
            ) : null}
          </Box>
        </ButtonRoot>
      );
    });
  }, [isLoading, people, value, onChange]);

  const renderOptions = useMemo(() => {
    if (isLoading) {
      return [];
    }

    return people.map((person) => ({
      value: person.nhi,
      label: person.name,
    }));
  }, [isLoading, people]);

  return (
    <Box as="fieldset" ref={fieldset}>
      {showFull && (
        <Heading as="legend" className={styles.heading} level="4" weight="regular">
          {personSelectorLabel}
        </Heading>
      )}

      <Box position="relative" ref={wrapper}>
        {showFull && <div className={styles.heightSpacer} />}
        <div className={styles.personSelector({ variant: showFull ? 'full' : 'hidden' })} ref={container}>
          {renderButtons}
        </div>
      </Box>

      {!showFull && (
        <InputDropdown
          id={dropdownId}
          label={personSelectorLabel}
          name="person-selector-dropdown"
          options={renderOptions}
          value={value}
          onChange={(event) => onChange?.(event.target.value)}
        />
      )}
    </Box>
  );
};

PersonSelector.displayName = 'PersonSelector';

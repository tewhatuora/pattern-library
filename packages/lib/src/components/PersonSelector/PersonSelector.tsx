import { PropsWithChildren, useContext, useMemo, useRef, useState } from 'react';

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
import useResizeObserver from '../../hooks/useResizeObserver';

import * as styles from './PersonSelector.css';

export const PersonSelectorStyles = styles;

export type PersonSelectorProps = {
  people: { name: string; nhi: string; birthDate?: string; isUser?: boolean }[];
  value: string;
  onChange: (nhi: string) => void;
  isLoading: boolean;
  personSelectorLabel: string;
} & Pick<JSX.IntrinsicElements['div'], 'children'>;

/**
 * Pattern for filtering results/content based on a user profile.
 * Details:
 * To be used within the Hero Block component.
 * On mobile screens, the filter component is replaced by a dropdown list.
 * The PersonFilter’s position is sticky (fixed to the top of the viewport) when scrolling.
 * @constructor
 */
export const PersonSelector = ({
  people,
  value,
  onChange,
  isLoading,
  personSelectorLabel,
}: PropsWithChildren<PersonSelectorProps>) => {
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [isWrapped, setIsWrapped] = useState(false);
  const breakpoint: Breakpoint | null = useContext(BreakpointContext);
  const isUpMd = breakpoint !== 'mobile';

  // this measures whether the button list of people wraps or not by comparing the y-position of the first button compared the last button
  // when the PersonSelector changes size (e.g. due to window resize, font size change, etc).
  // 1. measure if the last button is below the first button
  // 2. if it has wrapped, update the wrapped state.
  const container = useResizeObserver(() => {
    if (Object.keys(buttonRefs.current).length === 0) {
      return;
    }

    // 1. measure if the last button is below the first button
    const buttonKeys = Object.keys(buttonRefs.current);
    const firstButtonKey = buttonKeys[0];
    const lastButtonKey = buttonKeys[buttonKeys.length - 1];
    const firstButton = firstButtonKey !== undefined && buttonRefs.current[firstButtonKey];
    const lastButton = lastButtonKey !== undefined && buttonRefs.current[lastButtonKey];

    const isWrapped = !!firstButton && !!lastButton && firstButton.offsetTop < lastButton.offsetTop;

    // 2. if it has wrapped, update the wrapped state.
    if (isWrapped) {
      setIsWrapped(true);
    } else {
      setIsWrapped(false);
    }
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
          className={styles.buttonVariants({ variant })}
          key={`person-selector-${person.nhi}`}
          ref={(ref) => (buttonRefs.current[person.nhi] = ref)}
          onClick={() => onChange(person.nhi)}
        >
          <Icon
            className={styles.buttonIconVariants[variant]}
            icon={person.isUser ? 'person' : 'child'}
            variant="decorativeIcons"
          />
          <ScreenReadersOnly>{person.isUser ? 'Current user: ' : 'Child: '}</ScreenReadersOnly>
          <Box alignItems="flexStart" display="flex" flexDirection="column" overflow="hidden">
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
  }, [isLoading, people, value, onChange, buttonRefs]);

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
    <Box as={showFull ? 'fieldset' : 'div'}>
      {showFull && (
        <Heading as="legend" className={styles.heading} level="4" weight="regular">
          {personSelectorLabel}
        </Heading>
      )}

      <div className={styles.personSelector({ variant: showFull ? 'full' : 'hidden' })} ref={container}>
        {renderButtons}
      </div>

      {!showFull && (
        <InputDropdown
          id="person-selector-dropdown"
          label={personSelectorLabel}
          name="person-selector-dropdown"
          options={renderOptions}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
    </Box>
  );
};

PersonSelector.displayName = 'PersonSelector';

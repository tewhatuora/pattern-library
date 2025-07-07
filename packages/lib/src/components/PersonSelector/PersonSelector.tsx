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
  people: Readonly<{ name: string; nhi: string; birthDate?: string; isUser?: boolean }[]>;
  value?: string;
  onChange?: (nhi: string) => void;
  isLoading?: boolean;
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
  const [isWrapped, setIsWrapped] = useState(false);
  const breakpoint: Breakpoint | null = useContext(BreakpointContext);
  const isUpMd = breakpoint !== 'mobile';
  const wrapper = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

  const resizeObserver = useResizeObserver(() => {
    if (container?.current && wrapper?.current) {
      const wrapped =
        wrapper?.current?.getBoundingClientRect()?.width < container?.current?.getBoundingClientRect()?.width;

      setIsWrapped(wrapped);
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
    <Box as="fieldset" ref={resizeObserver}>
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
          id="person-selector-dropdown"
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

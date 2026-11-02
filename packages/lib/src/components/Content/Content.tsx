import { PropsWithChildren, forwardRef } from 'react';

import { clsx } from 'clsx';

import { Heading, HeadingProps } from '../Heading/Heading';

import { Text } from '../Text/Text';

import { Stack } from '../Stack/Stack';
import { Box } from '../Box/Box';

import * as styles from './Content.css';

type ContentHeadingLevel = '1' | '2' | '3' | '4' | '5';

export type ContentProps = {
  /** Heading text. */
  heading: string;
  /** Visual size of the heading and subheading, from `'1'` (largest) to `'5'`. The subheading is sized automatically from this. Does not change the element, use `headingAs` for that. */
  headingLevel: ContentHeadingLevel;
  /** Element the heading renders as. Defaults to `h{headingLevel}`, so set it when the visual size and the document outline differ. */
  headingAs?: HeadingProps['as'];
  /** Smaller line under the heading. Rendered as a `p`, not a heading. */
  subheading?: string;
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
  className?: string;
};

/**
 * Heading, optional subheading and body text, spaced consistently. `ref` points at the heading element.
 * Children are wrapped in `Text`, so pass inline content or text.
 *
 * @example
 * <Content heading="Getting vaccinated" headingLevel="2" subheading="What to expect">
 *   Your vaccinator will check your details first.
 * </Content>
 */
export const Content = forwardRef<HTMLElement, PropsWithChildren<ContentProps>>(
  ({ heading, headingLevel, headingAs, subheading, className, children }, ref) => {
    const subheadingLevel = subheadingLevelFor[headingLevel];

    const headingElement =
      headingLevel === '5' ? (
        <Text as={headingAs ?? 'h5'} ref={ref} weight="bold">
          {heading}
        </Text>
      ) : (
        <Heading as={headingAs} level={headingLevel} ref={ref}>
          {heading}
        </Heading>
      );

    const subheadingElement =
      subheadingLevel === '5' ? (
        <Text as="p" weight="bold">
          {subheading}
        </Text>
      ) : (
        <Heading as="p" level={subheadingLevel}>
          {subheading}
        </Heading>
      );

    return (
      <Box
        className={
          // Inherit color if variant is not given
          clsx(styles.content, className)
        }
        maxWidth="full"
      >
        <Stack space="xsmall">
          {headingElement}
          {subheading && subheadingElement}
          <Text>{children}</Text>
        </Stack>
      </Box>
    );
  },
);

const subheadingLevelFor: Record<ContentHeadingLevel, ContentHeadingLevel> = {
  '1': '3',
  '2': '4',
  '3': '4',
  '4': '5',
  '5': '5',
};

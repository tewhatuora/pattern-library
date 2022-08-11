import { PropsWithChildren, forwardRef } from 'react';

import { Heading, HeadingProps } from '../Heading/Heading';

import { Text } from '../Text/Text';

import { Stack } from '../Stack/Stack';
import { Box } from '../Box/Box';

import { ContrastVariant } from '../../types';

type ContentHeadingLevel = '1' | '2' | '3' | '4' | '5';

export type ContentProps = {
  /** Heading */
  heading: string;
  /** Heading level */
  headingLevel: ContentHeadingLevel;
  /** Element type for Heading to render as */
  headingAs?: HeadingProps['as'];
  /** Content subheading */
  subheading?: string;
  /** Contrast variant for dark/light UI */
  variant?: ContrastVariant;
  /** Additional CSS className. (Use `__anatomic__` for an example) */
  className?: string;
};

/**
 * Predefined content groups to make laying out text more efficient.
 * @param props
 */
export const Content = forwardRef<HTMLElement, PropsWithChildren<ContentProps>>(
  ({ heading, headingLevel, headingAs, subheading, variant = 'light', className, children }, ref) => {
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
          {heading}
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
          className
        }
        color={variant && (variant === 'dark' ? 'primary0' : 'primary100')}
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

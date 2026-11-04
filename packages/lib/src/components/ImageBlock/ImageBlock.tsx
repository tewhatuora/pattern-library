import type { JSX } from 'react';
import { PropsWithChildren, useContext, useMemo } from 'react';
import { clsx } from 'clsx';

import { Box } from '../Box/Box';
import { Row } from '../Columns/Row';
import { Column, ColumnLength, ParentColumnContext } from '../Columns/Column';
import { Button } from '../Button/Button';
import { Content, ContentProps } from '../Content/Content';
import { Stack } from '../Stack/Stack';
import { MAX_COLS } from '../../css/grid';

import * as styles from './ImageBlock.css';

export const ImageBlockStyles = styles;

type ColumnsPerBreakpoint = {
  columns?: ColumnLength;
  mobile?: ColumnLength;
  tablet?: ColumnLength;
  desktop?: ColumnLength;
  wide?: ColumnLength;
};

const rowColumns: Record<styles.WidthVariant, ColumnsPerBreakpoint> = {
  full: {
    mobile: 12,
    tablet: 12,
    desktop: 12,
  },
  half: {
    mobile: 12,
    tablet: 12,
    desktop: 6,
    wide: 6,
  },
  third: {
    mobile: 12,
    tablet: 12,
    desktop: 4,
    wide: 4,
  },
};

const innerColumnLengths: Record<styles.WidthVariant, ColumnLength> = {
  full: 6,
  half: 12,
  third: 12,
};

type ImageBlockButton = {
  label: string;
  /** Render as a link (`a`) or a `button`. `href` is required by the type either way, but only used for `a`. */
  as: Extract<keyof JSX.IntrinsicElements, 'button' | 'a'>;
  /** Called when the button is pressed. */
  onClick?: () => void;
} & AsLink;

type AsLink = {
  /* URL/path for the button if it's rendered as an `a` */
  href: string;
};

export type ImageBlockProps = {
  /** Describes the image. Use an empty string if it's purely decorative. */
  alt: string;
  /** URL or path of the image. */
  src?: string;
  /**
   * Image crop.
   * @default 'rectangle'
   */
  shape?: 'square' | 'rectangle';
  /**
   * `full` fills the row with content and image side by side. `half` and `third` take that share of the row
   * on desktop, with the content and image stacked.
   * @default 'full'
   */
  width?: styles.WidthVariant;
  /**
   * Whether the image comes `before` or `after` the content: to its left or right for `full` on desktop, otherwise
   * above or below it. On mobile, `full` always shows the image first.
   * @default 'after'
   */
  imagePosition?: styles.ImagePositionVariant;
  /** Rendered as a `primary` button under the content. */
  primaryButton?: ImageBlockButton;
  /** Rendered as a `secondary` button after `primaryButton`. */
  secondaryButton?: ImageBlockButton;
} & Omit<ContentProps, 'className' | 'variant'>;

const WithinParentColumn = ({
  imagePosition,
  children,
}: PropsWithChildren<Required<Pick<ImageBlockProps, 'width' | 'imagePosition'>>>) => (
  <Box className={styles.stacked[imagePosition]}>{children}</Box>
);
const Standalone = ({
  width,
  imagePosition,
  children,
}: PropsWithChildren<Required<Pick<ImageBlockProps, 'width' | 'imagePosition'>>>) => (
  <Row className={clsx(styles.rowVariants({ width, imagePosition }))} {...rowColumns[width]}>
    {children}
  </Row>
);
/**
 * An image beside a heading, text and up to two buttons. Place it directly in a full-width `Column`, or
 * inside a narrower column, where the content and image stack. `headingLevel` defaults to `'1'` when `width`
 * is `full`, otherwise `'2'`, so set it to fit the page's outline.
 *
 * @example
 * <ImageBlock
 *   alt="A nurse talking with a patient"
 *   heading="Book a vaccination"
 *   headingLevel="2"
 *   imagePosition="after"
 *   primaryButton={{ as: 'a', href: '/vaccinations', label: 'Book now' }}
 *   shape="rectangle"
 *   src="/images/nurse.jpg"
 *   width="full"
 * >
 *   Find a clinic near you.
 * </ImageBlock>
 */
export const ImageBlock = ({
  alt,
  src,
  shape = 'rectangle',
  width = 'full',
  imagePosition = 'after',
  heading,
  headingLevel,
  headingAs,
  subheading,
  primaryButton,
  secondaryButton,
  children,
}: PropsWithChildren<ImageBlockProps>) => {
  const parentColumn = useContext(ParentColumnContext);
  const contentHeadingLevel = useMemo(() => headingLevel || (width === 'full' ? '1' : '2'), [headingLevel, width]);

  const Wrapper = parentColumn?.columns === MAX_COLS ? Standalone : WithinParentColumn;

  return (
    <Wrapper imagePosition={imagePosition} width={width}>
      <Column className={styles.contentCol} columns={12} desktop={innerColumnLengths[width]} mobile={12}>
        <Box className={styles.imageBlock}>
          <Content
            className={styles.content}
            heading={heading}
            headingAs={headingAs}
            headingLevel={contentHeadingLevel}
            subheading={subheading}
          >
            <Stack space="medium">
              {children}
              {(!!primaryButton || !!secondaryButton) && (
                <Box className={styles.buttons[width]}>
                  {!!primaryButton && (
                    <Button
                      as={primaryButton.as}
                      href={primaryButton.href}
                      variant="primary"
                      onPress={primaryButton.onClick}
                    >
                      {primaryButton.label}
                    </Button>
                  )}
                  {!!secondaryButton && (
                    <Button
                      as={secondaryButton.as}
                      href={secondaryButton.href}
                      variant="secondary"
                      onPress={secondaryButton.onClick}
                    >
                      {secondaryButton.label}
                    </Button>
                  )}
                </Box>
              )}
            </Stack>
          </Content>
        </Box>
      </Column>
      <Column className={styles.imageCol} columns={12} desktop={innerColumnLengths[width]} mobile={12}>
        <img alt={alt} className={styles.image[shape]} src={src} />
      </Column>
    </Wrapper>
  );
};

ImageBlock.displayName = 'ImageBlock';

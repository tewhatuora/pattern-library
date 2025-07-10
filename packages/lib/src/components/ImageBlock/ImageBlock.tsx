import { PropsWithChildren, useContext, useMemo } from 'react';
import clsx from 'clsx';

import { Box } from '../Box/Box';
import { Row } from '../Columns/Row';
import { Column, ColumnLength, ParentColumnContext } from '../Columns/Column';
import { Button } from '../Button/Button';
import { Content, ContentProps } from '../Content/Content';
import { Stack } from '../Stack/Stack';
import { MAX_COLS } from '../../css/grid';

import { IconType } from '../Icon/icons';
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
  /** Label for the button */
  label: string;
  /** Element type to render the button as */
  as: Extract<keyof JSX.IntrinsicElements, 'button' | 'a'>;
  /** Function to call when the button is clicked */
  onClick?: () => void;
} & AsLink;

type AsLink = {
  /* URL/path for the button if it's rendered as an `a` */
  href: string;
};

export type ImageBlockProps = {
  /** Alternative text for the image */
  alt: string;
  /** Img source URL/path */
  src?: string | IconType;
  /** Image shape */
  shape: 'square' | 'rectangle';
  /** Image block width */
  width: styles.WidthVariant;
  /** Image position relative to content */
  imagePosition: styles.ImagePositionVariant;
  /** Primary button */
  primaryButton?: ImageBlockButton;
  /** Label for the secondary button */
  secondaryButton?: ImageBlockButton;
} & Omit<ContentProps, 'className' | 'variant'>;

const WithinParentColumn = ({ children }: PropsWithChildren<any>) => <Stack space="medium">{children}</Stack>;
const Standalone = ({
  width,
  imagePosition,
  children,
}: PropsWithChildren<Pick<ImageBlockProps, 'width' | 'imagePosition'>>) => (
  <Row className={clsx(styles.rowVariants({ width, imagePosition }))} {...rowColumns[width]}>
    {children}
  </Row>
);
/**
 * Further content for an input field.
 * @constructor
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
                <Stack className={styles.buttons[width]} space="medium">
                  {!!primaryButton && (
                    <Button
                      as={primaryButton.as}
                      href={primaryButton.href}
                      variant="primary"
                      onClick={primaryButton.onClick}
                    >
                      {primaryButton.label}
                    </Button>
                  )}
                  {!!secondaryButton && (
                    <Button
                      as={secondaryButton.as}
                      href={secondaryButton.href}
                      variant="secondary"
                      onClick={secondaryButton.onClick}
                    >
                      {secondaryButton.label}
                    </Button>
                  )}
                </Stack>
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

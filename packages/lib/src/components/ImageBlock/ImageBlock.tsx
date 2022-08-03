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
  columns: ColumnLength;
  mobile: ColumnLength;
  tablet: ColumnLength;
  desktop: ColumnLength;
};

const rowColumns: Record<styles.WidthVariant, ColumnLength> = {
  full: 12,
  half: 6,
  third: 4,
};

const innerColumnLengths: Record<styles.WidthVariant, ColumnLength> = {
  full: 6,
  half: 12,
  third: 12,
};

const buttonColumnLengths: Record<styles.WidthVariant, ColumnsPerBreakpoint> = {
  full: {
    columns: 6,
    mobile: 12,
    tablet: 6,
    desktop: 3,
  },
  half: {
    columns: 6,
    mobile: 12,
    tablet: 6,
    desktop: 6,
  },
  third: {
    columns: 12,
    mobile: 12,
    tablet: 12,
    desktop: 12,
  },
};

export type ImageBlockProps = {
  alt: string;
  src?: string | IconType;
  shape: 'square' | 'rectangle';
  width: styles.WidthVariant;
  imagePosition: styles.ImagePositionVariant;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  onPressPrimary: () => void;
  onPressSecondary: () => void;
} & Omit<ContentProps, 'headingLevel'>;

const WithinParentColumn = ({ children }: PropsWithChildren<any>) => <Stack space="medium">{children}</Stack>;
const Standalone = ({
  width,
  imagePosition,
  children,
}: PropsWithChildren<Pick<ImageBlockProps, 'width' | 'imagePosition'>>) => (
  <Row className={clsx(styles.rowVariants({ width, imagePosition }))} columns={rowColumns[width]}>
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
  headingAs,
  subheading,
  primaryButtonLabel,
  secondaryButtonLabel,
  onPressPrimary,
  onPressSecondary,
  children,
}: PropsWithChildren<ImageBlockProps>) => {
  const parentColumn = useContext(ParentColumnContext);
  const headingLevel = useMemo(() => (width === 'full' ? '1' : '2'), [width]);

  const Wrapper = parentColumn?.columns === MAX_COLS ? Standalone : WithinParentColumn;

  return (
    <Wrapper imagePosition={imagePosition} width={width}>
      <Column className={styles.contentCol} columns={12} desktop={innerColumnLengths[width]} mobile={12}>
        <Box className={styles.imageBlock}>
          <Content
            className={styles.content}
            heading={heading}
            headingAs={headingAs}
            headingLevel={headingLevel}
            subheading={subheading}
          >
            <Stack space="medium">
              {children}
              <Row className={styles.buttonRow[width]}>
                <Column className={styles.primaryButtonColumn[width]} {...buttonColumnLengths[width]}>
                  <Button variant="primary" onPress={onPressPrimary}>
                    {primaryButtonLabel}
                  </Button>
                </Column>
                <Column className={styles.secondaryButtonColumn[width]} {...buttonColumnLengths[width]}>
                  <Button variant="secondary" onPress={onPressSecondary}>
                    {secondaryButtonLabel}
                  </Button>
                </Column>
              </Row>
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

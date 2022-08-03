import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import { Box } from '../Box/Box';
import { Row } from '../Columns/Row';
import { Column, ColumnLength } from '../Columns/Column';
import { Button } from '../Button/Button';
import { Content, ContentProps } from '../Content/Content';
import { Stack } from '../Stack/Stack';

import { IconType } from '../Icon/icons';
import * as styles from './ImageBlock.css';

export const ImageBlockStyles = styles;

const containerColumnLengths: Record<string, ColumnLength> = {
  full: 12,
  half: 6,
  third: 4,
};

const innerColumnLengths: Record<string, ColumnLength> = {
  full: 6,
  half: 12,
  third: 12,
};

const buttonColumnLengths: Record<string, ColumnLength> = {
  full: 3,
  half: 6,
  third: 12,
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
} & ContentProps;

// } & (Full | Half | Third);
// type Full = { size: 'full' };
// type Half = { size: 'half'; position: 'left' | 'right' };
// type Third = { size: 'third'; position: 'left' | 'middle' | 'right' };

/**
 * Further content for an input field.
 * @constructor
 */
export const ImageBlock = ({
  alt,
  src,
  shape = 'rectangle',
  width = 'full',
  imagePosition = 'right',
  heading,
  headingLevel,
  headingAs,
  subheading,
  primaryButtonLabel,
  secondaryButtonLabel,
  onPressPrimary,
  onPressSecondary,
  children,
}: PropsWithChildren<ImageBlockProps>) => {
  const containerColumns = containerColumnLengths[width];

  return (
    <Row>
      <Column columns={containerColumns}>
        <Row className={clsx(styles.rowVariants({ width, imagePosition }))}>
          <Column className={styles.contentCol} columns={innerColumnLengths[width]}>
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
                    <Column className={styles.primaryButtonColumn[width]} columns={buttonColumnLengths[width]}>
                      <Button variant="primary" onPress={onPressPrimary}>
                        {primaryButtonLabel}
                      </Button>
                    </Column>
                    <Column className={styles.secondaryButtonColumn[width]} columns={buttonColumnLengths[width]}>
                      <Button variant="secondary" onPress={onPressSecondary}>
                        {secondaryButtonLabel}
                      </Button>
                    </Column>
                  </Row>
                </Stack>
              </Content>
            </Box>
          </Column>
          <Column className={styles.imageCol} columns={innerColumnLengths[width]}>
            <img alt={alt} className={styles.image[shape]} src={src} />
          </Column>
        </Row>
      </Column>
    </Row>
  );
};

ImageBlock.displayName = 'ImageBlock';

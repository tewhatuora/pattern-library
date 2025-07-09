import { PropsWithChildren } from 'react';

import { Box } from '../Box/Box';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

import * as styles from './FeatureTile.css';
import { Badge, BadgeProps } from '../Badge/Badge';
import { Button, ButtonProps } from '../Button/Button';
export const FeatureTileStyles = styles;

export type FeatureProps = {
  /** Title for the featured content */
  title: string;
  /** Description for the featured content */
  description: string;
  /** Optional badge for the featured content */
  badge?: string;
  /** Variant for the badge */
  badgeVariant?: BadgeProps['variant'];
  /** Label for the button */
  buttonLabel: string;
  /** Icon to display **/
  buttonIcon?: ButtonProps['icon'];
  /** Where to position the icon */
  buttonIconPosition?: ButtonProps['iconPosition'];
} & Pick<JSX.IntrinsicElements['div'], 'children'>;

/**
 * FeatureTile
 * @constructor
 */
const Feature = ({
  title,
  description,
  badge,
  badgeVariant,
  buttonLabel,
  buttonIcon,
  buttonIconPosition = 'right',
}: PropsWithChildren<FeatureProps>) => {
  return (
    <div className={styles.feature}>
      <div className={styles.headingContainer}>
        <Heading level="2" weight="regular">
          {title}
        </Heading>
        {!!badge && !!badgeVariant && (
          <div className={styles.badge}>
            <Badge variant={badgeVariant}>{badge}</Badge>
          </div>
        )}
      </div>
      <Text as="p" className={styles.description}>
        {description}
      </Text>
      <Button className={styles.button} icon={buttonIcon} iconPosition={buttonIconPosition} variant="tertiary">
        {buttonLabel}
      </Button>
    </div>
  );
};

export type FeatureTileProps = {
  /** Featured content */
  features: FeatureProps[];
} & Pick<JSX.IntrinsicElements['div'], 'children'>;

/**
 * FeatureTile
 * @constructor
 */
export const FeatureTile = ({ features }: PropsWithChildren<FeatureTileProps>) => {
  return (
    <Box as="div" backgroundColor="primary25" className={styles.featureTile}>
      {features?.map((feature, index) => (
        // NOTE: Disabling this rule because indexes are never changed/sorted
        // eslint-disable-next-line react/no-array-index-key
        <Feature {...feature} key={`feature-${index}`} />
      ))}
    </Box>
  );
};

FeatureTile.displayName = 'FeatureTile';

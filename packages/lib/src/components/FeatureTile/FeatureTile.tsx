import type { JSX } from 'react';
import { PropsWithChildren } from 'react';

import { Box } from '../Box/Box';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

import * as styles from './FeatureTile.css';
import { Badge, BadgeProps } from '../Badge/Badge';
import { Button, ButtonProps } from '../Button/Button';
export const FeatureTileStyles = styles;

export type FeatureProps = {
  /** Heading of the feature, rendered as an `h2`. */
  title: string;
  /** Short supporting text under the title. */
  description: string;
  /** Text of the badge beside the title. Only shown when `badgeVariant` is also set. */
  badge?: string;
  /** Colour of the badge. The badge is not shown without it. */
  badgeVariant?: BadgeProps['variant'];
  /** Text of the call to action. It is the accessible name, so make it specific. */
  buttonLabel: string;
  /** Icon shown beside the button label. */
  buttonIcon?: ButtonProps['icon'];
  /**
   * Side of the label the icon appears on.
   * @default 'right'
   */
  buttonIconPosition?: ButtonProps['iconPosition'];
  /** Destination of the button. Renders the button as a link (`a`). Without it the button is a `button`, so set `onButtonPress`. */
  buttonHref?: string;
  /** Called when the button is pressed. */
  onButtonPress?: ButtonProps['onPress'];
} & Pick<JSX.IntrinsicElements['div'], 'children'>;

/**
 * One feature in a `FeatureTile`. Internal.
 */
const Feature = ({
  title,
  description,
  badge,
  badgeVariant,
  buttonLabel,
  buttonIcon,
  buttonIconPosition = 'right',
  buttonHref,
  onButtonPress,
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
      <Button
        as={buttonHref ? 'a' : 'button'}
        className={styles.button}
        href={buttonHref}
        icon={buttonIcon}
        iconPosition={buttonIconPosition}
        variant="tertiary"
        onPress={onButtonPress}
      >
        {buttonLabel}
      </Button>
    </div>
  );
};

export type FeatureTileProps = {
  /** The features to show, in order. Each has a title, description and call to action. */
  features: FeatureProps[];
} & Pick<JSX.IntrinsicElements['div'], 'children'>;

/**
 * Tinted panel highlighting a few features, each with a title, description and call-to-action button.
 *
 * @example
 * <FeatureTile
 *   features={[
 *     {
 *       title: 'Find a clinic',
 *       description: 'Search for clinics near you.',
 *       buttonLabel: 'Search clinics',
 *       buttonHref: '/clinics',
 *     },
 *   ]}
 * />
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

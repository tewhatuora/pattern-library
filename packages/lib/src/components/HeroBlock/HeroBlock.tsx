import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

import { Box } from '../Box/Box';
import { Heading } from '../Heading/Heading';

import * as styles from './HeroBlock.css';
import { Badge, BadgeProps } from '../Badge/Badge';
import { Container } from '../Container/Container';

import Pattern from '../../assets/tohu.svg?component';

export const HeroBlockStyles = styles;

export type HeroBlockProps = {
  title: string;
  badge?: string;
  badgeVariant?: BadgeProps['variant'];
  description: string;
  withPattern?: boolean;
  /** Additional CSS className. (Use `__anatomic__` for an example) */
  className?: string;
} & Pick<JSX.IntrinsicElements['div'], 'children'>;

/**
 * Appears at the top of all pages.
 * Details:
 * Variants for dashboard and sub-pages.
 * The sub-page variant can include the PersonFilter component.
 * @constructor
 */
export const HeroBlock = ({
  title,
  description,
  badge,
  badgeVariant,
  withPattern,
  children,
  className,
}: PropsWithChildren<HeroBlockProps>) => {
  const PatternSVG = Pattern as FC;

  return (
    <Box as="div" backgroundColor="primary50" position="relative">
      {withPattern && (
        <div className={styles.patternContainer}>
          <div className={styles.patternGradient} />
          <PatternSVG />
        </div>
      )}
      <Container className={clsx(styles.heroBlock, className)}>
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
        <Heading level="3" weight="weak">
          {description}
        </Heading>
        {children}
      </Container>
    </Box>
  );
};

HeroBlock.displayName = 'HeroBlock';

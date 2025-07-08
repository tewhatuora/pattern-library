import { FC, PropsWithChildren, useMemo } from 'react';
import clsx from 'clsx';

import { useIntersectionObserver } from 'usehooks-ts';

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
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
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

  const { isIntersecting, ref: stickyDetector } = useIntersectionObserver({
    threshold: [0, 1],
  });

  const isSticky = useMemo(() => {
    return !isIntersecting;
  }, [isIntersecting]);

  return (
    <>
      <Box
        as="div"
        backgroundColor={withPattern && !children ? 'primary50' : 'primary25'}
        position={withPattern && !children ? 'relative' : 'static'}
      >
        {withPattern && !children && (
          <div className={styles.patternContainer}>
            <div className={styles.patternGradient} />
            <PatternSVG />
          </div>
        )}
        <Container
          className={clsx(
            styles.heroBlock,
            {
              [styles.heroBlockNoChildren]: !children,
            },
            className,
          )}
        >
          {title && (
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
          )}
          {description && (
            <Heading level="3" weight="weak">
              {description}
            </Heading>
          )}
        </Container>
      </Box>
      {children && (
        <>
          <div ref={stickyDetector} style={{ height: 1, marginTop: -1 }} />
          <div
            className={clsx(styles.sticky, {
              [styles.shadow]: isSticky,
            })}
          >
            <Container className={styles.childrenContainer}>
              <div className={clsx(styles.separator)} />
              <div className={styles.children}>{children}</div>
            </Container>
          </div>
        </>
      )}
    </>
  );
};

HeroBlock.displayName = 'HeroBlock';

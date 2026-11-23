import type { JSX } from 'react';
import { FC, PropsWithChildren, useMemo } from 'react';
import { clsx } from 'clsx';

import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import { Box } from '../Box/Box';
import { Heading } from '../Heading/Heading';

import * as styles from './HeroBlock.css';
import { Badge, BadgeProps } from '../Badge/Badge';
import { Container } from '../Container/Container';

import Pattern from '../../assets/tohu.svg?component';

export const HeroBlockStyles = styles;

export type HeroBlockProps = {
  /** Page title, rendered as an `h2` unless `titleLevel` says otherwise. */
  title: string;
  /**
   * Heading level of the title element. Use 1 when it's the page's main heading. Doesn't change the look.
   * @default '2'
   */
  titleLevel?: '1' | '2' | '3' | '4' | '5';
  /** Text for a badge beside the title. Only shown when `badgeVariant` is also set. */
  badge?: string;
  /** Badge colour. Required for `badge` to show. */
  badgeVariant?: BadgeProps['variant'];
  /** Subtitle under the title, rendered as an `h3`. */
  description: string;
  /** Show the tohu pattern instead of the pale blue gradient. Ignored when `children` are given. */
  withPattern?: boolean;
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
  className?: string;
} & Pick<JSX.IntrinsicElements['div'], 'children'>;

/**
 * Banner at the top of a page with a title and description. Pass `children`, typically a `PersonSelector`,
 * to show a bar below it that sticks to the top of the viewport on scroll. With `children` the pattern and
 * gradient background are not shown.
 *
 * @example
 * <HeroBlock
 *   badge="New"
 *   badgeVariant="info"
 *   description="Appointments and results"
 *   title="Your health"
 * />
 */
export const HeroBlock = ({
  title,
  titleLevel = '2',
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
      <Box as="div" className={styles.heroBoxBackground} position={!children ? 'relative' : 'static'}>
        {withPattern && !children && (
          <div className={styles.patternContainer}>
            <div className={styles.patternGradient} />
            <PatternSVG />
          </div>
        )}

        {!withPattern && !children && (
          <div className={styles.paleBlueGradientContainer}>
            <div className={styles.paleBlueGradient} />
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
              <Heading as={`h${titleLevel}`} level="2" weight="regular">
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

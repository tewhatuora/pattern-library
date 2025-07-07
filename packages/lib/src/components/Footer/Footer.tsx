import { Children, FC, PropsWithChildren, useMemo } from 'react';

import clsx from 'clsx';

import { ContrastVariant } from '@/src/types';

import { Box } from '../Box/Box';
import { Divider } from '../Divider/Divider';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';

import NZGovtLogoWhite from './nz-govt-logo-white.svg?component';
import NZGovtLogoBlack from './nz-govt-logo-black.svg?component';
// import TeWhatuOraLogoLight from '../../assets/te-whatu-ora-logo-light.svg?component';
// import TeWhatuOraLogoDark from '../../assets/te-whatu-ora-logo-dark.svg?component';

import { ShieldedSite } from './ShieldedSite';

import * as styles from './Footer.css';
import { Navigation } from '../Navigation/Navigation';
import { MenuListProps } from '../Navigation/MenuList';
import { NavigationItemProps } from '../Navigation/Item';

const FooterStyles = styles;

type ImprintItem = {
  text: string;
  href?: string;
  /** A React component to render, e. react-router-dom `<Link />` */
  component?: FC<any>;
};

/* -------------------------------------------------------------------------------------------------
 * Footer
 * -----------------------------------------------------------------------------------------------*/

const FOOTER_NAME = 'Footer';

type FooterProps = {
  /** Social link href/paths for Facebook, Twitter, Instagram, LinkedIn & TikTok */
  socialLinkHrefs?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    tiktok?: string;
  };
  /** Array of Imprint items,which can have text and href for links */
  imprintItems?: ImprintItem[];
  legalCopy?: string;
  /** Contrast variant for dark/light UI */
  variant?: ContrastVariant;
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
  className?: string;
};

const Footer = ({
  socialLinkHrefs,
  imprintItems,
  legalCopy,
  variant,
  className,
  children,
}: PropsWithChildren<FooterProps>) => {
  const numChildren = Children.count(children);

  if (numChildren > 5) {
    throw new Error('There can only be up to 5 `Navigation` components as children of `Footer`.');
  }

  if (imprintItems && imprintItems.length > 7) {
    throw new Error('There can only be up to 7 imprint items as props of `Footer`.');
  }

  // const TeWhatuOraLogo = variant === 'dark' ? TeWhatuOraLogoLight : TeWhatuOraLogoDark;
  const NZGovtLogo = variant === 'dark' ? NZGovtLogoWhite : NZGovtLogoBlack;

  const socialLinks = useMemo(
    () =>
      !!socialLinkHrefs && (
        <Box display="flex" flexDirection="row">
          {Object.entries(socialLinkHrefs)
            .map(([key, value]) => (
              <Box aria-label={key} as="a" className={styles.socialIcon} href={value} key={key}>
                <Icon className={styles.socialIcons[variant ?? 'light']} icon={key as IconType} variant="socialIcons" />
              </Box>
            ))
            .sort(byDesignOrder)}
        </Box>
      ),
    [socialLinkHrefs, variant],
  );

  const imprintItemsElements = useMemo(
    () =>
      legalCopy || !!imprintItems ? (
        <Box className={styles.imprintItems}>
          {legalCopy ? (
            <Box className={clsx(styles.imprintItem, styles.legalCopy, styles.imprintChildVariant({ variant }))}>
              <Text size="small" weight="regular">
                {legalCopy}
              </Text>
            </Box>
          ) : null}
          {imprintItems?.toReversed().map(({ text, href, component: ImprintComponent }) => {
            let result;

            if (ImprintComponent) {
              result = (
                <Text size="small" weight="regular">
                  <ImprintComponent className={clsx(styles.imprintLink, styles.imprintChildVariant({ variant }))}>
                    {text}
                  </ImprintComponent>
                </Text>
              );
            } else if (href) {
              result = (
                <Box as="a" className={clsx(styles.imprintLink, styles.imprintChildVariant({ variant }))} href={href}>
                  <Text size="small" weight="regular">
                    {text}
                  </Text>
                </Box>
              );
            } else {
              result = (
                <Text size="small" weight="regular">
                  {text}
                </Text>
              );
            }

            return (
              <Box className={clsx(styles.imprintItem, styles.imprintChildVariant({ variant }))} key={text}>
                {result}
              </Box>
            );
          })}
          <ShieldedSite />
        </Box>
      ) : null,
    [imprintItems, legalCopy, variant],
  );

  return (
    <Box as="footer" className={clsx(styles.footer({ variant }), className)}>
      <div className={variant === 'dark' ? styles.footerDarkGradient : ''}>
        <div className={styles.footerInner}>
          <Stack space="xxlarge">
            {/* First row */}
            <Box alignItems="center" display="flex" flexWrap="wrap" justifyContent="spaceBetween" marginBottom="xsmall">
              <Box className={styles.govtLogoWrapper}>
                {/* @ts-expect-error There is an error saying that the `focusable` & `role` props do not exist, but they do as it just gets applied to an svg element */}
                <NZGovtLogo focusable={false} role="img" />
              </Box>
              <Box>{socialLinks}</Box>
            </Box>

            {/* Second row */}
            {numChildren > 0 && (
              <Box className={styles.secondRow}>
                <Box className={clsx(styles.secondRowNavigationWrapper, styles.secondRowChild)}>
                  {Children.map(children, (child) => (
                    // Div keeps MenuItems contained because they return 2 elements, not one
                    <div className={clsx(styles.secondRowNavigationChild, { [styles.lessSpace]: numChildren >= 5 })}>
                      {child}
                    </div>
                  ))}
                </Box>
              </Box>
            )}

            {/* Third row */}
            <Stack space="medium">
              <Divider variant={variant ?? 'light'} />
              <Box className={styles.socialAndImprintWrapper}>
                <Box className={styles.socialAndImprintChild}>{imprintItemsElements}</Box>
              </Box>
            </Stack>
          </Stack>
        </div>
      </div>
    </Box>
  );
};

Footer.displayName = FOOTER_NAME;
/* -------------------------------------------------------------------------------------------------
 * FooterList
 * -----------------------------------------------------------------------------------------------*/

const FOOTER_LIST_NAME = 'FooterList';

type FooterListProps = PropsWithChildren<MenuListProps>;

const FooterList = (props: FooterListProps) => {
  return <Navigation.MenuList {...props} />;
};

FooterList.displayName = FOOTER_LIST_NAME;

/* -------------------------------------------------------------------------------------------------
 * FooterListItem
 * -----------------------------------------------------------------------------------------------*/

const FOOTER_LIST_ITEM_NAME = 'FooterListItem';

type FooterListItemProps = PropsWithChildren<NavigationItemProps>;

const FooterListItem = (props: FooterListItemProps) => {
  return <Navigation.Item subNav {...props} />;
};

FooterListItem.displayName = FOOTER_LIST_ITEM_NAME;

function byDesignOrder(a: JSX.Element, b: JSX.Element) {
  const socialLinksOrder = ['facebook', 'twitter', 'instagram', 'linkedin', 'tiktok'];

  return (
    socialLinksOrder.findIndex((v) => v === a.key?.toString()) -
    socialLinksOrder.findIndex((v) => v === b.key?.toString())
  );
}

const Root = Footer;
const List = FooterList;
const ListItem = FooterListItem;

export { FooterStyles, Footer, FooterList, FooterListItem, Root, List, ListItem };
export type { FooterProps, FooterListProps, FooterListItemProps };

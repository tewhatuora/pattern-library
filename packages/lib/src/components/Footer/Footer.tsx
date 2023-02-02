// import { Children, PropsWithChildren, useEffect, useMemo, useRef, useState } from 'react';
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
import TeWhatuOraLogoLight from '../../assets/te-whatu-ora-logo-light.svg?component';
import TeWhatuOraLogoDark from '../../assets/te-whatu-ora-logo-dark.svg?component';

import { ShieldedSite } from './ShieldedSite';

import * as styles from './Footer.css';
import { Navigation } from '../Navigation/Navigation';
import { MenuListProps } from '../Navigation/MenuList';
import { NavigationItemProps } from '../Navigation/Item';

const FooterStyles = styles;

// const MAX_COLUMN_WIDTH = 320;

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
  /** Contrast variant for dark/light UI */
  variant?: ContrastVariant;
  /** Additional CSS className. (Use `__anatomic__` for an example) */
  className?: string;
};

const Footer = ({ socialLinkHrefs, imprintItems, variant, className, children }: PropsWithChildren<FooterProps>) => {
  // const navRefs = useRef<Array<HTMLElement | null>>([]);

  // const [maxChildWidth, setMaxChildWidth] = useState(0);

  // To hide calculating the column widths. See `hiddenChildrenForWidthCalculations`
  // const [showNavs, setShowNavs] = useState(false);

  // useEffect(() => {
  //   setMaxChildWidth(Math.min(widthOfWidestElement(navRefs.current), MAX_COLUMN_WIDTH));
  //   setShowNavs(true); // Should get batched with the setter above
  // }, []);

  const numChildren = Children.count(children);

  if (numChildren > 5) {
    throw new Error('There can only be up to 5 `Navigation` components as children of `Footer`.');
  }

  if (imprintItems && imprintItems.length > 7) {
    throw new Error('There can only be up to 7 imprint items as props of `Footer`.');
  }

  const TeWhatuOraLogo = variant === 'dark' ? TeWhatuOraLogoLight : TeWhatuOraLogoDark;
  const NZGovtLogo = variant === 'dark' ? NZGovtLogoWhite : NZGovtLogoBlack;

  const socialLinks = useMemo(
    () =>
      !!socialLinkHrefs && (
        <Box className={styles.social} display="flex" flexDirection="row">
          {Object.entries(socialLinkHrefs)
            .map(([key, value]) => (
              <Box aria-label={key} as="a" href={value} key={key}>
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
      !!imprintItems && (
        <Box className={styles.imprintItems}>
          {imprintItems?.map(({ text, href, component: ImprintComponent }) => {
            let result;
            if (ImprintComponent) {
              result = (
                <Text size="small" weight="regular">
                  <ImprintComponent>{text}</ImprintComponent>
                </Text>
              );
            } else if (href) {
              result = (
                <Box as="a" href={href}>
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
              <Box className={styles.imprintItem} key={text}>
                {result}
              </Box>
            );
          })}
        </Box>
      ),
    [imprintItems],
  );

  /**
   * This solves this design requirement:
   *
   * > The columns themselves should flex with the screen width but have a
   * > max-width of 320px. The width should not be defined by the content, but
   * > by a parent element so the sizes can be the same across all columns.
   *
   * CSS grid and flexbox cannot do this alone. The only way I found to achieve
   * this is to render the children in a separate, hidden context, measure their
   * intrinsic width to find the widest one, then set a CSS variable to set all
   * columns to that width.
   *
   * This causes some layout issues, where for a second the elements would
   * display incorrectly. The `showNavs` state only makes the Footer content
   * visible once the calculation has been done.
   *
   * Update (11/1/2022) - Moved to a flex only solution
   */
  // const hiddenChildrenForWidthCalculations = Children.map(children, (child) => (
  //   <Box aria-hidden className={styles.hiddenNavs} ref={(element) => navRefs.current.push(element)}>
  //     {child}
  //   </Box>
  // ));

  return (
    <Box
      as="footer"
      backgroundColor={variant && (variant === 'dark' ? 'primary100' : 'primary0')}
      className={clsx(styles.footer, className)}
      color={variant && (variant === 'dark' ? 'primary0' : 'primary100')}
    >
      {/* {!showNavs && hiddenChildrenForWidthCalculations} */}

      {/* <div className={styles.footerInner} hidden={!showNavs}> */}
      <div className={styles.footerInner}>
        <Stack space="xxlarge">
          {/* First row */}
          <Box display="flex" flexWrap="wrap" justifyContent="spaceBetween" marginBottom="xsmall">
            <Box className={styles.logoWrapper}>
              <TeWhatuOraLogo key={null} props={{}} ref={null} type="symbol" />
            </Box>
            <Box className={styles.govtLogoWrapper}>
              <NZGovtLogo key={null} props={{}} ref={null} type="symbol" />
            </Box>
          </Box>

          {/* Second row */}
          {numChildren > 0 && (
            <Box className={styles.secondRow}>
              <Box
                className={clsx(styles.childrenWrapper, { [styles.lessSpace]: numChildren === 5 })}
                // style={{ ...setCssVariable(styles.widthVar, `${maxChildWidth / 10}rem`) }}
              >
                {Children.map(children, (child) => (
                  // Div keeps MenuItems contained because they return 2 elements, not one
                  <div className={styles.secondRowChild}>{child}</div>
                ))}
              </Box>
              {!!socialLinks && <ShieldedSite />}
            </Box>
          )}

          {/* Third row */}
          <Stack space="medium">
            <Divider variant={variant ?? 'light'} />
            <Box className={styles.socialAndImprintWrapper}>
              {/*
               * `flexDirection="rowReverse" ensures the socialLinks/ShieldedSite is always
               * on the right even when there are no imprintItemsElements.
               * It should also be okay for accessibility because the order of viewing the
               * socialLinks/ShieldedSite first or the imprintItemsElements first doesn't
               * really matter.
               */}
              {socialLinks || <ShieldedSite />}
              {imprintItemsElements}
            </Box>
          </Stack>
        </Stack>
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

/**
 * Helper function for setting vanilla extract CSS variables in the style tag.
 *
 * When referencing the CSS variables, it includes the `var(...)` wrapper, which
 * should be omitted when set. This strips that off.
 * @param cssVariable
 * @param value
 * @returns
 */
// function setCssVariable(cssVariable: string, value: string) {
//   return { [cssVariable.slice(4, styles.widthVar.length - 1)]: value };
// }

/**
 * Helper function that gets the width of the widest given element.
 * @param refs
 * @returns
 */
// function widthOfWidestElement(refs: (HTMLElement | null)[]) {
//   return (
//     refs
//       .map((ref) => ref?.getBoundingClientRect().width) // Get width
//       .filter(Boolean) // Filter out null values
//       .sort()
//       .at(-1) ?? Infinity // Highest number is at last index, default to Infinity so it gets overrided with Math.min()
//   );
// }

const Root = Footer;
const List = FooterList;
const ListItem = FooterListItem;

export { FooterStyles, Footer, FooterList, FooterListItem, Root, List, ListItem };
export type { FooterProps, FooterListProps, FooterListItemProps };

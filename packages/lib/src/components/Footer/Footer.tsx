import { Children, PropsWithChildren, ReactNode, useEffect, useRef, useState } from 'react';

import clsx from 'clsx';

import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Box } from '../Box/Box';
import { Divider } from '../Divider/Divider';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';

import NZGovtLogoWhite from './nz-govt-logo-white.svg?component';
import NZGovtLogoBlack from './nz-govt-logo-black.svg?component';

import { ShieldedSite } from './ShieldedSite';

import * as styles from './Footer.css';
import { List } from '../List/List';
export const FooterStyles = styles;

/**
 * 
* The Footer component should:
- Use theme tokens for colors, dimensions and typography. √
- Display a maximum of 5 Navigation lists using Grid Columns √
- Display social icons in the last column √
- Display MOH icon in the last column 
- Display NZ Government icon in the last column
- Display a Divider to separate navigation lists from imprint list √
- Display a maximum of 7 'Imprint' list items √
- Display the Safe site icon √
- Have a light variant √
- Have a dark variant √
 */

// TODO: Move NZ govt logo asset to correct place

type ImprintItem = {
  text: string;
  href?: string;
};

export type FooterProps = {
  socialLinkHrefs?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    tiktok?: string;
  };
  extraLogos?: ReactNode[];
  imprintItems?: ImprintItem[];
  variant?: 'light' | 'dark';
};

export const Footer = ({
  socialLinkHrefs,
  extraLogos,
  imprintItems,
  variant,
  children,
}: PropsWithChildren<FooterProps>) => {
  const navRefs = useRef<Array<HTMLElement | null>>([]);

  const [maxChildWidth, setMaxChildWidth] = useState(0);
  const [showNavs, setShowNavs] = useState(false);

  useEffect(() => {
    const widths = navRefs.current.map((ref) => ref?.getBoundingClientRect().width);

    const filtered = widths.filter(Boolean);

    const sorted = filtered.sort();

    const widestChildWidth = sorted.at(-1) ?? 320;

    console.log({ widestChildWidth });

    console.log(styles.widthVar.slice(4, styles.widthVar.length - 1));

    setMaxChildWidth(Math.min(widestChildWidth, 320));
    setShowNavs(true);
  }, []);

  if (Children.count(children) > 5) {
    throw new Error('There can only be up to 5 `Navigation` components as children of `Footer`.');
  }

  const numChildren = Children.count(children) as 0 | 1 | 2 | 3 | 4 | 5;

  if (imprintItems && imprintItems.length > 7) {
    throw new Error('There can only be up to 7 imprint items as props of `Footer`.');
  }

  const NZGovtLogo = variant === 'dark' ? NZGovtLogoWhite : NZGovtLogoBlack;

  const socialLinks = !!socialLinkHrefs && (
    <Box className={styles.social} display="flex" flexDirection="row">
      {Object.entries(socialLinkHrefs)
        .map(([key, value]) => (
          <Box aria-label={key} as="a" href={value} key={key}>
            <Icon className={styles.socialIcons[variant ?? 'light']} icon={key as IconType} variant="socialIcons" />
          </Box>
        ))
        .sort(byDesignOrder)}
    </Box>
  );

  const imprintItemsElements = !!imprintItems && (
    <Box className={styles.imprintItems}>
      {imprintItems?.map(({ text, href }) =>
        href ? (
          <Box as="a" href={href} key={text}>
            <Text>{text}</Text>
          </Box>
        ) : (
          <Text key={text}>{text}</Text>
        ),
      )}
    </Box>
  );

  return (
    <Box as="footer" color={variant && (variant === 'dark' ? 'primary0' : 'primary100')}>
      {Children.map(children, (child) => (
        <Box aria-hidden className={styles.hiddenNavs} ref={(element) => navRefs.current.push(element)}>
          <AllowedChildren
            errorMessage="Only `Navigation` components are allowed as children of `Footer`."
            types={[Navigation]}
          >
            {child}
          </AllowedChildren>
        </Box>
      ))}

      <div hidden={!showNavs}>
        <Stack space="medium">
          {/* First row */}
          <Box className={styles.firstRow} display="flex" justifyContent="spaceBetween">
            <Box className={styles.govtLogoWrapper}>
              <NZGovtLogo key={null} props={{}} ref={null} type="symbol" />
            </Box>
            <Box alignItems="center" className={styles.otherLogosWrapper} display="flex">
              {/* Allowed children: logos or images of some sort */}
              {extraLogos}
            </Box>
          </Box>

          {/* Second row */}
          <Box display="flex" flexDirection={{ mobile: 'column', tablet: 'row' }} justifyContent="spaceBetween">
            <Box
              className={clsx(
                styles.secondRow,
                // styles.secondRowChildren[numChildren],
                {
                  [styles.lessSpace]: numChildren >= 5,
                },
              )}
              style={{ [styles.widthVar.slice(4, styles.widthVar.length - 1)]: `${maxChildWidth / 10}rem` }}
            >
              {Children.map(children, (child) => (
                <Box className={styles.navigationWrapper}>
                  <AllowedChildren
                    errorMessage="Only `Navigation` components are allowed as children of `Footer`."
                    types={[Navigation]}
                  >
                    {child}
                  </AllowedChildren>
                </Box>
              ))}
            </Box>
            {!!socialLinks && <ShieldedSite />}
          </Box>

          {/* Third row */}
          <Box>
            <Divider
              variant={
                // Divider currently has light and dark swapped
                (variant && (variant === 'light' ? 'dark' : 'light')) ?? 'dark'
              }
            />
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
          </Box>
        </Stack>
      </div>
    </Box>
  );
};

export const Navigation = ({ numChildren = 5, long = false }: { numChildren?: number; long?: boolean }) => {
  const text = long ? 'Lorem ipsum dolor sit amet blahblaatsuranturnyt' : 'Navigation';

  const children = [];
  for (let i = 0; i < numChildren; i++) {
    children.push(
      <List.Item key={`Navigation-key-${i}`} style={{ width: 'fit-content' }}>
        {text}
      </List.Item>,
    );
  }

  return (
    <List.Root className={styles.tempNavigation} type="ol">
      {children}
    </List.Root>
  );
}; // TODO: Replace with actual Navigation

function byDesignOrder(a: JSX.Element, b: JSX.Element) {
  const socialLinksOrder = ['facebook', 'twitter', 'instagram', 'linkedin', 'tiktok'];

  return (
    socialLinksOrder.findIndex((v) => v === a.key?.toString()) -
    socialLinksOrder.findIndex((v) => v === b.key?.toString())
  );
}

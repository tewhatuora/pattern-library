import { Children, PropsWithChildren, ReactNode } from 'react';

import clsx from 'clsx';

import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Box } from '../Box/Box';
import { Divider } from '../Divider/Divider';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';

import NZGovtLogo from './nz-govt-logo.svg?component';

import * as styles from './Footer.css';
export const FooterStyles = styles;

/**
 * 
 * The Footer component should:
- Use theme tokens for colors, dimensions and typography.
- Display a maximum of 5 Navigation lists using Grid Columns
- Display social icons in the last column
- Display MOH icon in the last column
- Display NZ Government icon in the last column
- Display a Divider to separate navigation lists from imprint list
- Display a maximum of 7 'Imprint' list items
- Display the Safe site icon
- Have a light variant
- Have a dark variant
 */

// TODO: Move NZ govt logo to correct place

// TODO: Update FirstRow, SecondRow, and ThirdRow components to have descriptive names

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
};

export const Footer = ({ socialLinkHrefs, extraLogos, imprintItems, children }: PropsWithChildren<FooterProps>) => {
  const numChildren = Children.count(children);

  if (numChildren > 5) {
    throw new Error('There can only be up to 5 `Navigation` components as children of `Footer`.');
  }

  const socialLinks = !!socialLinkHrefs && (
    <Box className={styles.social} display="flex" flexDirection="row">
      {Object.entries(socialLinkHrefs)
        .map(([key, value]) => (
          <Box aria-label={key} as="a" href={value} key={key}>
            <Icon className={styles.socialIcons} icon={key as IconType} variant="socialIcons" />
          </Box>
        ))
        .sort(byDesignOrder)}
    </Box>
  );

  const imprintItemsElements = !!imprintItems && (
    <Box className={styles.imprintItems}>
      {imprintItems?.map(({ text, href }) =>
        href ? (
          <Box as="a" className={styles.imprintItem} href={href} key={text}>
            <Text>{text}</Text>
          </Box>
        ) : (
          <Text className={styles.imprintItem} key={text}>
            {text}
          </Text>
        ),
      )}
    </Box>
  );

  return (
    <footer>
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
            className={clsx(styles.secondRow, { [styles.lessSpace]: numChildren >= 5 })}
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
          >
            <AllowedChildren
              errorMessage="Only `Navigation` components are allowed as children of `Footer`."
              types={[Navigation]}
            >
              {children}
            </AllowedChildren>
          </Box>
          {!!socialLinks && <SafeSite />}
        </Box>

        {/* Third row */}
        <Box>
          <Divider variant="dark" />
          <Box className={styles.socialAndImprintWrapper}>
            {/*
             * `flexDirection="rowReverse" ensures the socialLinks/SafeSite is always
             * on the right even when there are no imprintItemsElements.
             * It should also be okay for accessibility because the order of viewing the
             * socialLinks/SafeSite first or the imprintItemsElements first doesn't
             * really matter.
             */}
            {socialLinks || <SafeSite />}
            {imprintItemsElements}
          </Box>
        </Box>
      </Stack>
    </footer>
  );
};

export const Navigation = () => <p>Navigation</p>; // TODO: Replace with actual Navigation

const SafeSite = () => <p>Safe Site</p>; // TODO: Replace with actual Safe Site

function byDesignOrder(a: JSX.Element, b: JSX.Element) {
  const socialLinksOrder = ['facebook', 'twitter', 'instagram', 'linkedin', 'tiktok'];

  return (
    socialLinksOrder.findIndex((v) => v === a.key?.toString()) -
    socialLinksOrder.findIndex((v) => v === b.key?.toString())
  );
}

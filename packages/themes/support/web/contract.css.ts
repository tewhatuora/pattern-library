import { createThemeContract, createTheme } from '@vanilla-extract/css';

import makeVanillaTheme from './makeVanillaTheme';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { tokens } from './themes/neutral/web/tokens';

type CSSVarFunction = `var(--${string})` | `var(--${string}, ${string | number})`;
type Contract = {
  [key: string]: CSSVarFunction | null | Contract;
};

export const contract = createThemeContract(makeVanillaTheme(tokens)) satisfies Contract;

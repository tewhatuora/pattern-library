import * as resetStyles from '../reset.css';
import { vars } from '../../themes/vars.css';

import { RequiredResponsiveValue, sprinkles } from './sprinkles.css';

type Sprinkles = Parameters<typeof sprinkles>[0];

export type Space = keyof typeof vars.space | 0;
export type ResponsiveSpace = RequiredResponsiveValue<Space>;

export interface Atoms extends Sprinkles {
  reset?: keyof JSX.IntrinsicElements;
}

console.log(
  sprinkles({
    display: 'block',
  }),
);

export const atoms = ({ reset, ...rest }: Atoms) => {
  if (!reset) {
    return sprinkles(rest);
  }

  const elementReset = resetStyles.element[reset as keyof typeof resetStyles.element];

  const sprinklesClasses = sprinkles(rest);

  return `${resetStyles.base}${elementReset ? ` ${elementReset}` : ''}${
    sprinklesClasses ? ` ${sprinklesClasses}` : ''
  }`;
};

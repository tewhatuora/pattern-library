import clsx from 'clsx';

import { Link } from './Link';
import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';

import * as styles from './Utility.css';

export type UtilityProps = {
  variant: 'light' | 'dark';
  className?: string;
};

/**
 * Utility navigation
 * @constructor
 */
export const Utility = ({ variant, className }: UtilityProps) => {
  return (
    <ul className={clsx(styles.utility, className)}>
      <li>
        <Link className={styles.utilityLink[variant]} href="#">
          <Icon icon="language" variant="functionalIcons" /> <Text>Language</Text>
        </Link>
      </li>
      <li>
        <Link className={styles.utilityLink[variant]} href="#">
          <Icon icon="person" variant="functionalIcons" /> <Text>Name Surname</Text>
        </Link>
      </li>
    </ul>
  );
};

Utility.displayName = 'Utility';

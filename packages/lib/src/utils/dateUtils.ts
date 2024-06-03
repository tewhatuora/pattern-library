import { differenceInMonths, differenceInYears, parseISO } from 'date-fns';

export function formatAge(birthdate: string) {
  let age:
    | {
        shortHand: string;
        longHand: string;
      }
    | undefined;

  const yearsOld = differenceInYears(Date.now(), parseISO(birthdate));

  if (yearsOld === 0) {
    const monthsOld = differenceInMonths(Date.now(), parseISO(birthdate));
    age = {
      shortHand: `${monthsOld} mo`,
      longHand: monthsOld === 1 ? '1 month' : `${monthsOld} months`,
    };
  } else {
    age = {
      shortHand: yearsOld === 1 ? '1 yr' : `${yearsOld} yrs`,
      longHand: yearsOld === 1 ? '1 year' : `${yearsOld} years`,
    };
  }

  return age;
}

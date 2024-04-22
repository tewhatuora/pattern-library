import { FunctionComponent, ReactSVGElement } from 'react';

import Alert from '../../icons/Alert.svg?component';
import AlertFilled from '../../icons/AlertFilled.svg?component';
import Blood from '../../icons/Blood.svg?component';
import Document from '../../icons/Document.svg?component';
import Email from '../../icons/Email.svg?component';
import Exempt from '../../icons/Exempt.svg?component';
import Language from '../../icons/Language.svg?component';
import Medicine from '../../icons/Medicine.svg?component';
import Menu from '../../icons/Menu.svg?component';
import Name from '../../icons/Name.svg?component';
import Nasal from '../../icons/Nasal.svg?component';
import NHINumber from '../../icons/NHINumber.svg?component';
import Password from '../../icons/Password.svg?component';
import Pending from '../../icons/Pending.svg?component';
import Person from '../../icons/Person.svg?component';
import Phone from '../../icons/Phone.svg?component';
import RAT from '../../icons/RAT.svg?component';
import Saliva from '../../icons/Saliva.svg?component';
import Search from '../../icons/Search.svg?component';
import Security from '../../icons/Security.svg?component';
import Tick from '../../icons/Tick.svg?component';
import UnknownTest from '../../icons/UnknownTest.svg?component';
import Vaccine from '../../icons/Vaccine.svg?component';
// Functional
import Warning from '../../icons/functional/Warning.svg?component';
import Link from '../../icons/functional/Link.svg?component';
import Plus from '../../icons/functional/Plus.svg?component';
import Print from '../../icons/functional/Print.svg?component';
import ClearField from '../../icons/functional/ClearField.svg?component';
import Cross from '../../icons/functional/Cross.svg?component';
import Info from '../../icons/functional/Info.svg?component';
import ChevronLeft from '../../icons/functional/ChevronLeft.svg?component';
import ChevronRight from '../../icons/functional/ChevronRight.svg?component';
import ChevronUp from '../../icons/functional/ChevronUp.svg?component';
import BackToTop from '../../icons/functional/BackToTop.svg?component';
import ChevronDown from '../../icons/functional/ChevronDown.svg?component';
import ArrowRight from '../../icons/functional/ArrowRight.svg?component';
import ArrowUp from '../../icons/functional/ArrowUp.svg?component';
import ArrowLeft from '../../icons/functional/ArrowLeft.svg?component';
import ArrowDown from '../../icons/functional/ArrowDown.svg?component';
import Filter from '../../icons/functional/Filter.svg?component';
// Social
import Facebook from '../../icons/social/Facebook.svg?component';
import Instagram from '../../icons/social/Instagram.svg?component';
import LinkedIn from '../../icons/social/LinkedIn.svg?component';
import TikTok from '../../icons/social/TikTok.svg?component';
import Twitter from '../../icons/social/Twitter.svg?component';
// Other
import International from '../../icons/International.svg?component';

export type IconType =
  | 'alert'
  | 'alert_filled'
  | 'blood'
  | 'document'
  | 'email'
  | 'exempt'
  | 'filter'
  | 'international'
  | 'language'
  | 'menu'
  | 'medicine'
  | 'name'
  | 'nasal'
  | 'nhi_number'
  | 'password'
  | 'pending'
  | 'person'
  | 'phone'
  | 'rat'
  | 'saliva'
  | 'search'
  | 'security'
  | 'tick'
  | 'unknown_test'
  | 'vaccine'
  | 'warning'
  | 'link'
  | 'plus'
  | 'print'
  | 'clear_field'
  | 'cross'
  | 'info'
  | 'chevron_left'
  | 'chevron_right'
  | 'chevron_up'
  | 'back_to_top'
  | 'chevron_down'
  | 'arrow_right'
  | 'arrow_up'
  | 'arrow_left'
  | 'arrow_down'
  | 'facebook'
  | 'instagram'
  | 'linkedin'
  | 'tiktok'
  | 'twitter';

export type IconMap = {
  [key in IconType]?: FunctionComponent<ReactSVGElement>;
};

export const decorative: IconMap = {
  alert: Alert,
  alert_filled: AlertFilled,
  blood: Blood,
  document: Document,
  email: Email,
  exempt: Exempt,
  language: Language,
  menu: Menu,
  medicine: Medicine,
  name: Name,
  nasal: Nasal,
  nhi_number: NHINumber,
  password: Password,
  pending: Pending,
  person: Person,
  phone: Phone,
  rat: RAT,
  saliva: Saliva,
  search: Search,
  security: Security,
  tick: Tick,
  unknown_test: UnknownTest,
  vaccine: Vaccine,
};

// Functional
export const functional: IconMap = {
  warning: Warning,
  link: Link,
  plus: Plus,
  print: Print,
  clear_field: ClearField,
  cross: Cross,
  info: Info,
  chevron_left: ChevronLeft,
  chevron_right: ChevronRight,
  chevron_up: ChevronUp,
  back_to_top: BackToTop,
  chevron_down: ChevronDown,
  arrow_right: ArrowRight,
  arrow_up: ArrowUp,
  arrow_left: ArrowLeft,
  arrow_down: ArrowDown,
  filter: Filter,
};

// Social
export const social: IconMap = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: LinkedIn,
  tiktok: TikTok,
  twitter: Twitter,
};

export const other: IconMap = {
  international: International,
};

const icons: IconMap = {
  ...decorative,
  ...functional,
  ...social,
  ...other,
};

export default icons;

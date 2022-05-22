import Alert from '../../icons/Alert.svg';
import Blood from '../../icons/Blood.svg';
import Document from '../../icons/Document.svg';
import Email from '../../icons/Email.svg';
import Exempt from '../../icons/Exempt.svg';
import Language from '../../icons/Language.svg';
import Menu from '../../icons/Menu.svg';
import Name from '../../icons/Name.svg';
import Nasal from '../../icons/Nasal.svg';
import NHINumber from '../../icons/NHINumber.svg';
import Password from '../../icons/Password.svg';
import Pending from '../../icons/Pending.svg';
import Person from '../../icons/Person.svg';
import Phone from '../../icons/Phone.svg';
import RAT from '../../icons/RAT.svg';
import Saliva from '../../icons/Saliva.svg';
import Search from '../../icons/Search.svg';
import Security from '../../icons/Security.svg';
import Tick from '../../icons/Tick.svg';
import UnknownTest from '../../icons/UnknownTest.svg';
import Vaccine from '../../icons/Vaccine.svg';
// Functional
import Warning from '../../icons/functional/Warning.svg';
import Link from '../../icons/functional/Link.svg';
import Plus from '../../icons/functional/Plus.svg';
import Print from '../../icons/functional/Print.svg';
import ClearField from '../../icons/functional/ClearField.svg';
import Cross from '../../icons/functional/Cross.svg';
import Info from '../../icons/functional/Info.svg';
import ChevronLeft from '../../icons/functional/ChevronLeft.svg';
import ChevronRight from '../../icons/functional/ChevronRight.svg';
import ChevronUp from '../../icons/functional/ChevronUp.svg';
import BackToTop from '../../icons/functional/BackToTop.svg';
import ChevronDown from '../../icons/functional/ChevronDown.svg';
import ArrowRight from '../../icons/functional/ArrowRight.svg';
import ArrowUp from '../../icons/functional/ArrowUp.svg';
import ArrowLeft from '../../icons/functional/ArrowLeft.svg';
import ArrowDown from '../../icons/functional/ArrowDown.svg';
// Social
import Facebook from '../../icons/social/Facebook.svg';
import Instagram from '../../icons/social/Instagram.svg';
import LinkedIn from '../../icons/social/LinkedIn.svg';
import TikTok from '../../icons/social/TikTok.svg';
import Twitter from '../../icons/social/Twitter.svg';

export type IconMap = {
  [key: string]: ReactNode;
};

export const decorative: IconMap = {
  alert: Alert,
  blood: Blood,
  document: Document,
  email: Email,
  exempt: Exempt,
  language: Language,
  menu: Menu,
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
};

// Social
export const social: IconMap = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: LinkedIn,
  tiktok: TikTok,
  twitter: Twitter,
};

const icons: IconMap = {
  ...decorative,
  ...functional,
  ...social,
};

export default icons;

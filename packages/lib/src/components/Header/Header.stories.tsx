import { Text } from '../Text/Text';
import { Header, HeaderProps } from './Header';

const logoComponent = (
  <>
    <Text size="small">My COVID</Text>
    <Text size="small" weight="bold">
      Placeholder
    </Text>
  </>
);

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    utilityNavItems: {
      control: {
        type: 'array',
      },
      defaultValue: [
        {
          href: '#',
          icon: 'language',
          label: 'Language',
        },
        {
          href: '#',
          icon: 'person',
          label: 'Name Surname',
        },
      ],
    },
    logoLinkHref: {
      defaultValue: '/',
      control: {
        type: 'text',
      },
    },
  },
};

const RouterLink = (props) => (
  <a {...props} onClick={(e) => e.preventDefault()}>
    {props.children}
  </a>
);

export const Default = (args: HeaderProps) => <Header {...args} logoComponent={logoComponent} />;

export const CustomLogoLinkComponent = (args: HeaderProps) => (
  <Header {...args} logoComponent={logoComponent} logoLinkComponent={RouterLink} />
);

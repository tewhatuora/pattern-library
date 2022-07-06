import { Header, HeaderProps } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {},
};

export const Default = (args: HeaderProps) => <Header {...args} />;

import { Footer } from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer.Root,
};

export const Default = () => {
  return (
    <Footer.Root>
      <Footer.FirstRow />
      <Footer.SecondRow />
      <Footer.ThirdRow />
    </Footer.Root>
  );
};

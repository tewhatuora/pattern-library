import { Loader, LoaderProps } from './Loader';

export default {
  title: 'Components/Loader',
  component: Loader,
};

export const Default = (args: LoaderProps) => {
  return <Loader {...args} />;
};

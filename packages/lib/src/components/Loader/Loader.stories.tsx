import { Loader, LoaderProps } from './Loader';

export default {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    message: {
      defaultValue: 'Loading',
    },
  },
};

export const Default = (args: LoaderProps) => {
  return <Loader {...args} />;
};

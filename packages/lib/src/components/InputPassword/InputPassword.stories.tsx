import { useEffect, useRef } from 'react';

import { InputPassword, InputPasswordProps } from './InputPassword';

export default {
  title: 'Components/InputPassword',
  component: InputPassword,
  argTypes: {},
};

export const Default = (args: InputPasswordProps) => <InputPassword {...args} />;

/**
 * Example with forwarding a ref, and using it
 * to focus() the underlying <input /> field
 * @param args
 * @constructor
 */
export const Refs = (args: InputPasswordProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (ref?.current) {
      ref.current.focus();
    }
  }, [ref]);

  return <InputPassword {...args} ref={ref} />;
};

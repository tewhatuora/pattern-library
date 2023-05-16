import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { Button as AnatomicButton } from './Button';

type ButtonProps = ComponentPropsWithoutRef<typeof StyledButton> & {
  onClick?: ComponentPropsWithoutRef<'button'>['onClick'];
};

const StyledButton = AnatomicButton;

/**
 * Anatomic's Button component uses `onPress` instead of the standard: `onClick` for interaction events.
 * This causes issues where the button can not be activated with the keyboard.
 *
 * This fix maps `onClick` to Anatomic's Button's `onPress`prop.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { onClick, ...rest } = props;

  return <StyledButton ref={ref} {...rest} onPress={onClick} />;
});

import { ForwardedRef, forwardRef } from 'react';

import { InputText, InputTextProps } from '../InputText/InputText';

/**
 * A textarea - wrapper for InputField with multiline prop
 * @constructor
 */
export const Textarea = forwardRef<HTMLTextAreaElement, InputTextProps>(
  (props: InputTextProps, ref: ForwardedRef<HTMLTextAreaElement>) => <InputText {...props} multiline ref={ref} />,
);

Textarea.displayName = 'Textarea';

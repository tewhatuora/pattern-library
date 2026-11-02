import { ForwardedRef, forwardRef } from 'react';

import { InputText, InputTextProps } from '../InputText/InputText';

/**
 * A multi-line `InputText`, with the same label and message props. Set `rows` for the visible height.
 *
 * @example
 * <Textarea label="Notes" name="notes" rows={4} />
 */
export const Textarea = forwardRef<HTMLTextAreaElement, InputTextProps>(
  (props: InputTextProps, ref: ForwardedRef<HTMLTextAreaElement>) => <InputText {...props} multiline ref={ref} />,
);

Textarea.displayName = 'Textarea';

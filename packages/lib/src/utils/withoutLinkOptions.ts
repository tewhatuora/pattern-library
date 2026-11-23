// Props that react-aria's useLink handles itself: its own options, and handlers it already calls from `linkProps`
const handledByUseLink = [
  'onPress',
  'onPressStart',
  'onPressEnd',
  'onPressChange',
  'onPressUp',
  'isDisabled',
  'elementType',
  'routerOptions',
  'onFocusChange',
  'onClick',
  'onFocus',
  'onBlur',
  'onKeyDown',
  'onKeyUp',
  'autoFocus',
] as const;

/**
 * Removes the props useLink consumes, so they aren't also spread onto the DOM
 * (where they'd be unknown attributes, or handlers that run twice)
 * @param props The props passed to useLink
 */
export const withoutLinkOptions = <T extends object>(props: T) => {
  const domProps = { ...props } as Record<string, unknown>;

  handledByUseLink.forEach((name) => delete domProps[name]);

  return domProps as Omit<T, (typeof handledByUseLink)[number]>;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Before removing an element that contains focus, moves focus to the next focusable element after it,
 * or the previous one if there is none. Otherwise focus would fall back to <body>, so keyboard and
 * screen reader users lose their place.
 * @param element The element that is about to be removed
 */
export const moveFocusBeforeRemoving = (element: HTMLElement | null) => {
  if (!element?.contains(document.activeElement)) {
    return;
  }

  const focusable = Array.from(document.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => !element.contains(el));
  const isAfter = (el: HTMLElement) => !!(element.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING);

  const target = focusable.find(isAfter) ?? focusable.reverse().find((el) => !isAfter(el));

  target?.focus();
};

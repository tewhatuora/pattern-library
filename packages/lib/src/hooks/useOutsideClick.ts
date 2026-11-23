import { RefObject, useEffect, useRef } from 'react';

/**
 * Calls `handler` when a click or touch starts outside of `ref`.
 * Listens in the capture phase so handlers that stop propagation don't hide the event.
 * @param ref
 * @param handler
 */
const useOutsideClick = (ref: RefObject<HTMLElement | null>, handler: (event: MouseEvent | TouchEvent) => void) => {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  });

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        savedHandler.current(event);
      }
    };

    document.addEventListener('click', listener, true);
    document.addEventListener('touchstart', listener, true);

    return () => {
      document.removeEventListener('click', listener, true);
      document.removeEventListener('touchstart', listener, true);
    };
  }, [ref]);
};

export default useOutsideClick;

import { useCallback, useRef } from 'react';

/**
 * Custom resize observer hook as the `useResizeObserver` hook from `@react-hookz/web` is broken
 * as this issue still exists in `@react-hookz/web@^19.2.0`:
 *
 * https://github.com/react-hookz/web/issues/755
 *
 * @param callback
 * @returns ref callback
 */
const useResizeObserver = (callback: ResizeObserverCallback) => {
  const resizeObserver = useRef(new ResizeObserver(callback));

  const refCallback = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      resizeObserver.current.observe(node);
    } else {
      resizeObserver.current.disconnect();
    }
  }, []);

  return refCallback;
};

export default useResizeObserver;

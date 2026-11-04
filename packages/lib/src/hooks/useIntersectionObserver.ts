import { useEffect, useState } from 'react';

type UseIntersectionObserverOptions = {
  threshold?: number | number[];
};

/**
 * Tracks whether an element is intersecting the viewport.
 * An entry only counts as intersecting once it reaches one of the thresholds.
 * @param options
 * @returns `ref` callback to attach to the element, and `isIntersecting`
 */
const useIntersectionObserver = ({ threshold = 0 }: UseIntersectionObserverOptions = {}) => {
  const [element, setElement] = useState<Element | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  // Callers usually pass an inline array, so compare by value to avoid re-observing on every render
  const thresholdKey = JSON.stringify(threshold);

  useEffect(() => {
    // Not available in some test environments (e.g. jsdom)
    if (!element || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(
            entry.isIntersecting && observer.thresholds.some((value) => entry.intersectionRatio >= value),
          );
        });
      },
      { threshold: JSON.parse(thresholdKey) },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [element, thresholdKey]);

  return { ref: setElement, isIntersecting };
};

export default useIntersectionObserver;

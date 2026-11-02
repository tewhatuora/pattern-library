/**
 * Delays calling `fn` until `wait` milliseconds have passed since the last call (trailing edge only).
 * Call `cancel()` when cleaning up so a pending call doesn't run after unmount.
 * @param fn
 * @param wait
 */
export const debounce = <Args extends unknown[]>(fn: (...args: Args) => void, wait: number) => {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  const debounced = (...args: Args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };

  debounced.cancel = () => clearTimeout(timeout);

  return debounced;
};

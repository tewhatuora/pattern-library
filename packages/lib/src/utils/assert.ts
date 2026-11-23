// a replacement for node assert

/**
 * Throws an error if the condition is falsy. For browser and universal JS, not Node.
 * @param condition The condition to assert (truthy = pass, falsy = throw)
 * @param message Optional error message
 */
export default function assert(condition: unknown, message?: string): asserts condition {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

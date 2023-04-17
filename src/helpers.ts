/**
 * Type-safe version of Object.keys.
 */
export const keys = Object.keys as <T>(o: T) => Extract<keyof T, string>[];

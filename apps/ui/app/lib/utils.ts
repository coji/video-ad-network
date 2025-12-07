import { type ClassValue, clsx } from 'clsx'
import { createTwc } from 'react-twc'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const twx = createTwc({ compose: cn })

/**
 * Format a numeric value as Japanese Yen with thousand separators.
 * Handles null, undefined, and string inputs safely.
 */
export function formatYen(value: unknown): string {
  const n = Number(value)
  return Number.isFinite(n) ? n.toLocaleString() : '-'
}

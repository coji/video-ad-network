export function parseDuration(duration: string | number): number {
  if (typeof duration === 'number') {
    return duration
  }

  if (typeof duration === 'string') {
    if (duration.includes(':')) {
      // HH:MM:SS or HH:MM:SS.mmm format
      const parts = duration.split(':')
      if (parts.length === 3) {
        const [hours, minutes, seconds] = parts
        const totalSeconds =
          Number.parseInt(hours, 10) * 3600 +
          Number.parseInt(minutes, 10) * 60 +
          Number.parseFloat(seconds)
        return totalSeconds
      }
    } else {
      // Try parsing as a float number
      const parsedDuration = Number.parseFloat(duration)
      if (!Number.isNaN(parsedDuration)) {
        return parsedDuration
      }
    }
  }

  console.warn(`Invalid duration format: ${duration}. Returning 0.`)
  return 0
}

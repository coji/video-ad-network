import type { Linear } from './vast-types'

export function extractMediaUrl(mediaFiles?: Linear['MediaFiles']): string {
  if (!mediaFiles) return ''
  const mediaFile = mediaFiles.MediaFile

  if (Array.isArray(mediaFile)) {
    return mediaFile[0]['#text'].trim()
  }
  if (mediaFile?.['#text']) {
    return mediaFile['#text'].trim()
  }

  return ''
}

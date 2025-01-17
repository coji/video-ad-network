export const fileSizeToHumanReadable = (fileLength: number): string => {
  if (fileLength < 1024) {
    return `${fileLength} B`
  }
  if (fileLength < 1024 * 1024) {
    return `${(fileLength / 1024).toFixed(0)} KB`
  }
  return `${(fileLength / (1024 * 1024)).toFixed(0)} MB`
}

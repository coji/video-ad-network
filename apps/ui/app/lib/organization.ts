export type OrganizationMetadata = {
  isAdvertiser?: boolean
  isMedia?: boolean
}

/**
 * Parse organization metadata from either a JSON string or an already-parsed object.
 * Kysely's ParseJSONResultsPlugin returns objects, while better-auth API returns strings.
 */
export function parseOrganizationMetadata(
  metadata: string | object | null | undefined,
): OrganizationMetadata | null {
  if (!metadata) return null
  if (typeof metadata === 'object') return metadata as OrganizationMetadata
  try {
    return JSON.parse(metadata) as OrganizationMetadata
  } catch {
    return null
  }
}

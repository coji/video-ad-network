import { z } from 'zod/v4'

const organizationMetadataSchema = z
  .object({
    isAdvertiser: z.boolean().optional(),
    isMedia: z.boolean().optional(),
  })
  .passthrough()

export type OrganizationMetadata = z.infer<typeof organizationMetadataSchema>

/**
 * Parse organization metadata from either a JSON string or an already-parsed object.
 * Kysely's ParseJSONResultsPlugin returns objects, while better-auth API returns strings.
 */
export function parseOrganizationMetadata(
  metadata: string | object | null | undefined,
): OrganizationMetadata | null {
  if (!metadata) return null
  if (typeof metadata === 'object') {
    const parsed = organizationMetadataSchema.safeParse(metadata)
    return parsed.success ? parsed.data : null
  }
  try {
    const parsed = organizationMetadataSchema.safeParse(JSON.parse(metadata))
    return parsed.success ? parsed.data : null
  } catch {
    return null
  }
}

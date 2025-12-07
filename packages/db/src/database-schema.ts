import type { ColumnType } from 'kysely'
export type Generated<T> =
  T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>
export type Timestamp = ColumnType<Date, Date | string, Date | string>

export type Account = {
  id: string
  accountId: string
  providerId: string
  userId: string
  accessToken: string | null
  refreshToken: string | null
  idToken: string | null
  accessTokenExpiresAt: string | null
  refreshTokenExpiresAt: string | null
  scope: string | null
  password: string | null
  createdAt: string
  updatedAt: string
}
export type Ad = {
  id: string
  advertiserId: string
  adGroupId: string
  type: string
  url: string
  duration: number
  width: number | null
  height: number | null
  mimeType: string | null
  clickThroughUrl: string
  description: string | null
  createdAt: Generated<string>
  updatedAt: Generated<string>
}
export type AdEvent = {
  id: string
  eventTimestamp: Generated<string>
  eventType: string
  mediaId: string | null
  adSlotId: string | null
  advertiserId: string | null
  campaignId: string | null
  adGroupId: string | null
  adId: string | null
  impressionId: string | null
  progress: number | null
  ipAddress: string
  userAgent: string
  uid: string
}
export type AdGroup = {
  id: string
  name: string
  categories: string | null
  bidPriceCpm: number
  frequencyCapImpressions: number
  frequencyCapWindow: number
  frequencyCapUnit: string
  advertiserId: string
  campaignId: string
  createdAt: Generated<string>
  updatedAt: Generated<string>
}
export type AdSlot = {
  id: string
  name: string
  mediaId: string
  type: string
  createdAt: Generated<string>
  updatedAt: Generated<string>
}
export type Advertiser = {
  id: string
  name: string
  organizationId: string
  createdAt: Generated<string>
  updatedAt: Generated<string>
}
export type Campaign = {
  id: string
  name: string
  advertiserId: string
  startAt: string
  endAt: string
  budget: Generated<number>
  budgetType: string
  deliveryPace: string
  spentBudget: Generated<number>
  remainingBudget: Generated<number>
  status: Generated<string>
  createdAt: Generated<string>
  updatedAt: Generated<string>
}
export type Click = {
  id: string
  adSlotId: string
  mediaId: string
  advertiserId: string
  campaignId: string
  adGroupId: string
  adId: string
  timestamp: Generated<string>
  ipAddress: string
  userAgent: string
  isCompanion: number
  impressionId: string
  uid: string
  clickThroughUrl: string
  createdAt: Generated<string>
  updatedAt: Generated<string>
}
export type CompanionBanner = {
  id: string
  adId: string
  url: string
  width: number
  height: number
  mimeType: string | null
  clickThroughUrl: string | null
  createdAt: Generated<string>
  updatedAt: Generated<string>
}
export type CompanionSlot = {
  id: string
  name: string
  adSlotId: string
  width: number
  height: number
  createdAt: Generated<string>
  updatedAt: Generated<string>
}
export type DailyReport = {
  date: string
  mediaId: string
  adSlotId: string
  advertiserId: string
  campaignId: string
  adGroupId: string
  adId: string
  impressions: Generated<number>
  clicks: Generated<number>
  reach: Generated<number>
  createdAt: Generated<string>
  updatedAt: Generated<string>
}
export type Invitation = {
  id: string
  organizationId: string
  email: string
  role: string | null
  status: string
  expiresAt: string
  createdAt: string
  inviterId: string
}
export type Media = {
  id: string
  name: string
  categories: string | null
  organizationId: string
  createdAt: Generated<string>
  updatedAt: Generated<string>
}
export type Member = {
  id: string
  organizationId: string
  userId: string
  role: string
  createdAt: string
}
export type Organization = {
  id: string
  name: string
  slug: string
  logo: string | null
  createdAt: string
  metadata: string | null
}
export type Session = {
  id: string
  expiresAt: string
  token: string
  createdAt: string
  updatedAt: string
  ipAddress: string | null
  userAgent: string | null
  userId: string
  activeOrganizationId: string | null
  impersonatedBy: string | null
}
export type User = {
  id: string
  name: string
  email: string
  emailVerified: number
  image: string | null
  createdAt: string
  updatedAt: string
  role: string | null
  banned: number | null
  banReason: string | null
  banExpires: string | null
}
export type Verification = {
  id: string
  identifier: string
  value: string
  expiresAt: string
  createdAt: string
  updatedAt: string
}
export type DB = {
  account: Account
  adEvents: AdEvent
  adGroups: AdGroup
  adSlots: AdSlot
  ads: Ad
  advertisers: Advertiser
  campaigns: Campaign
  clicks: Click
  companionBanners: CompanionBanner
  companionSlots: CompanionSlot
  dailyReports: DailyReport
  invitation: Invitation
  media: Media
  member: Member
  organization: Organization
  session: Session
  user: User
  verification: Verification
}

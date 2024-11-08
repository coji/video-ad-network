import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Ad = {
    id: string;
    advertiserId: string;
    adGroupId: string;
    type: string;
    url: string;
    duration: number;
    width: number;
    height: number;
    clickThroughUrl: string;
    category: string | null;
    description: string | null;
    mimeType: string | null;
};
export type AdEvent = {
    id: string;
    eventTimestamp: Generated<string>;
    eventType: string;
    adId: string;
    adSlotId: string;
    mediaId: string;
    impressionId: string;
    progress: number | null;
    ipAddress: string;
    userAgent: string;
    uid: string;
};
export type AdGroup = {
    id: string;
    name: string;
    bidPriceCpm: number;
    frequencyCapImpressions: number;
    frequencyCapWindow: number;
    frequencyCapUnit: string;
    advertiserId: string;
    campaignId: string;
};
export type AdSlot = {
    id: string;
    name: string;
    mediaId: string;
};
export type Advertiser = {
    id: string;
    name: string;
    organizationId: string;
};
export type Campaign = {
    id: string;
    name: string;
    advertiserId: string;
};
export type Click = {
    id: string;
    adId: string;
    adSlotId: string;
    mediaId: string;
    timestamp: Generated<string>;
    ipAddress: string;
    userAgent: string;
    isCompanion: number;
    impressionId: string;
    uid: string;
    clickThroughUrl: string;
};
export type CompanionBanner = {
    id: string;
    adId: string;
    url: string;
    width: number;
    height: number;
    clickThroughUrl: string | null;
    mimeType: string | null;
};
export type DailyReport = {
    date: string;
    mediaId: string;
    adSlotId: string;
    advertiserId: string;
    campaignId: string;
    adGroupId: string;
    adId: string;
    impressions: Generated<number>;
    clicks: Generated<number>;
    reach: Generated<number>;
};
export type FrequencyCapEntry = {
    userId: string;
    adId: string;
    count: Generated<number>;
    lastSeen: string;
    createdAt: Generated<string>;
};
export type Media = {
    id: string;
    name: string;
    organizationId: string;
};
export type Organization = {
    id: string;
    name: string;
};
export type OrganizationMembership = {
    id: string;
    userId: string;
    organizationId: string;
    role: string;
};
export type User = {
    id: string;
    email: string;
};
export type DB = {
    adEvents: AdEvent;
    adGroups: AdGroup;
    adSlots: AdSlot;
    ads: Ad;
    advertisers: Advertiser;
    campaigns: Campaign;
    clicks: Click;
    companionBanners: CompanionBanner;
    dailyReports: DailyReport;
    FrequencyCapEntry: FrequencyCapEntry;
    medias: Media;
    organizationMemberships: OrganizationMembership;
    organizations: Organization;
    users: User;
};

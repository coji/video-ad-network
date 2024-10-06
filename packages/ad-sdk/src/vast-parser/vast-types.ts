export interface Linear {
	Duration: string | number
	MediaFiles?: {
		MediaFile: MediaFile | MediaFile[]
	}
	VideoClicks?: VideoClicks
	TrackingEvents?: TrackingEvents
}

export interface MediaFile {
	'#text': string
}

export interface VideoClicks {
	ClickThrough: { '#text': string } | string
}

export interface TrackingEvents {
	Tracking: Tracking | Tracking[]
}

export interface Tracking {
	'@_event': string
	'@_offset'?: string
	'#text': string
}

export interface CompanionAds {
	Companion: Companion | Companion[]
}

export interface Companion {
	'@_width': string
	'@_height': string
	StaticResource: { '#text': string }
	CompanionClickThrough: { '#text': string } | string
}

export interface Creative {
	'@_id'?: string
	Linear?: Linear
	CompanionAds?: CompanionAds
}

export interface InLine {
	Impression?: string | string[]
	Creatives:
		| {
				Creative: Creative | Creative[]
		  }
		| ''
}

export interface Ad {
	'@_id': string
	'@_adType'?: string
	InLine: InLine
}

export interface VastTag {
	VAST: {
		Ad: Ad
	}
}

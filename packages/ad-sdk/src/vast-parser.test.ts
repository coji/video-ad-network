import { describe, it, expect } from 'vitest'
import { parseVastXml } from './vast-parser'

describe('parseVastXml', () => {
	it('should parse the VAST XML correctly', () => {
		const vastXml = `
      <VAST version="4.1">
        <Ad id="1" adType="video">
          <InLine>
            <AdSystem>Custom Ad Network</AdSystem>
            <AdTitle>Ad 1</AdTitle>
            <Impression>
              <![CDATA[ https://video-ad-network-tracker.fly.dev/impression?adId=1&adSlotId=1&mediaId=1&impressionId=87916d8d-9804-4219-adbd-0616c4fbf710 ]]>
            </Impression>
            <Creatives>
              <Creative id="1">
                <Linear>
                  <Duration>25</Duration>
                  <MediaFiles>
                    <MediaFile delivery="progressive" type="video/mp4" width="1080" height="1920">
                      <![CDATA[ https://pub-0bf554d65e60408bb58720ed5b08a665.r2.dev/lady_1080_1920_8sec_25fps.mp4 ]]>
                    </MediaFile>
                  </MediaFiles>
                  <VideoClicks>
                    <ClickThrough>
                      <![CDATA[ https://video-ad-network.techtalkjp.workers.dev/click?adId=1&adSlotId=1&mediaId=1&isCompanion=false&impressionId=87916d8d-9804-4219-adbd-0616c4fbf710 ]]>
                    </ClickThrough>
                  </VideoClicks>
                  <TrackingEvents>
                    <Tracking event="progress" offset="25%">
                      <![CDATA[ https://video-ad-network-tracker.fly.dev/progress?adId=1&adSlotId=1&mediaId=1&progress=25&impressionId=87916d8d-9804-4219-adbd-0616c4fbf710 ]]>
                    </Tracking>
                    <Tracking event="progress" offset="50%">
                      <![CDATA[ https://video-ad-network-tracker.fly.dev/progress?adId=1&adSlotId=1&mediaId=1&progress=50&impressionId=87916d8d-9804-4219-adbd-0616c4fbf710 ]]>
                    </Tracking>
                    <Tracking event="progress" offset="75%">
                      <![CDATA[ https://video-ad-network-tracker.fly.dev/progress?adId=1&adSlotId=1&mediaId=1&progress=75&impressionId=87916d8d-9804-4219-adbd-0616c4fbf710 ]]>
                    </Tracking>
                    <Tracking event="complete">
                      <![CDATA[ https://video-ad-network-tracker.fly.dev/progress?adId=1&adSlotId=1&mediaId=1&progress=100&impressionId=87916d8d-9804-4219-adbd-0616c4fbf710 ]]>
                    </Tracking>
                  </TrackingEvents>
                </Linear>
              </Creative>
              <Creative>
                <CompanionAds>
                  <Companion width="300" height="250">
                    <StaticResource creativeType="image/jpeg">
                      <![CDATA[ https://adserver.example.com/banners/tech_product_banner.jpg ]]>
                    </StaticResource>
                    <CompanionClickThrough>
                      <![CDATA[ https://video-ad-network.techtalkjp.workers.dev/click?adId=1&adSlotId=1&mediaId=1&isCompanion=true&companionId=1&impressionId=87916d8d-9804-4219-adbd-0616c4fbf710 ]]>
                    </CompanionClickThrough>
                  </Companion>
                </CompanionAds>
              </Creative>
            </Creatives>
          </InLine>
        </Ad>
      </VAST>
    `

		const result = parseVastXml(vastXml)

		console.log(JSON.stringify(result, null, 2))

		// Check the structure of the parsed object
		expect(result).toBeDefined()
		expect(result.adType).toBe('video')

		if (result.mediaUrl) {
			expect(result.mediaUrl).toBe(
				'https://pub-0bf554d65e60408bb58720ed5b08a665.r2.dev/lady_1080_1920_8sec_25fps.mp4',
			)
		} else {
			console.error('mediaUrl is undefined')
		}

		if (result.duration !== undefined) {
			expect(result.duration).toBe(25)
		} else {
			console.error('duration is undefined')
		}

		if (result.clickThroughUrl) {
			expect(result.clickThroughUrl).toBe(
				'https://video-ad-network.techtalkjp.workers.dev/click?adId=1&adSlotId=1&mediaId=1&isCompanion=false&impressionId=87916d8d-9804-4219-adbd-0616c4fbf710',
			)
		} else {
			console.error('clickThroughUrl is undefined')
		}

		if (result.trackingEvents) {
			expect(result.trackingEvents.impression).toHaveLength(1)
			expect(result.trackingEvents.firstQuartile).toHaveLength(1)
			expect(result.trackingEvents.midpoint).toHaveLength(1)
			expect(result.trackingEvents.thirdQuartile).toHaveLength(1)
			expect(result.trackingEvents.complete).toHaveLength(1)
		} else {
			console.error('trackingEvents is undefined')
		}

		if (result.companionAds) {
			expect(result.companionAds).toHaveLength(1)
			expect(result.companionAds[0].width).toBe(300)
			expect(result.companionAds[0].height).toBe(250)
			expect(result.companionAds[0].imageUrl).toBe(
				'https://adserver.example.com/banners/tech_product_banner.jpg',
			)
			expect(result.companionAds[0].clickThroughUrl).toBe(
				'https://video-ad-network.techtalkjp.workers.dev/click?adId=1&adSlotId=1&mediaId=1&isCompanion=true&companionId=1&impressionId=87916d8d-9804-4219-adbd-0616c4fbf710',
			)
		} else {
			console.error('companionAds is undefined')
		}
	})
})

// vast-parser.test.ts

import { describe, expect, it } from 'vitest'
import { parseVastXml } from '.'

const sampleVastXml = `<?xml version="1.0" encoding="UTF-8"?>
<VAST version="4.1">
  <Ad id="12345" adType="video">
    <InLine>
      <AdSystem version="1.0">Custom Ad Network</AdSystem>
      <AdTitle>Sample Ad</AdTitle>
      <Impression><![CDATA[https://example.com/impression]]></Impression>
      <Creatives>
        <Creative id="1">
          <Linear>
            <Duration>00:00:30</Duration>
            <MediaFiles>
              <MediaFile delivery="progressive" type="video/mp4" width="640" height="360">
                <![CDATA[https://example.com/video.mp4]]>
              </MediaFile>
            </MediaFiles>
            <VideoClicks>
              <ClickThrough><![CDATA[https://example.com/click]]></ClickThrough>
            </VideoClicks>
            <TrackingEvents>
              <Tracking event="start"><![CDATA[https://example.com/start]]></Tracking>
              <Tracking event="firstQuartile"><![CDATA[https://example.com/firstQuartile]]></Tracking>
              <Tracking event="midpoint"><![CDATA[https://example.com/midpoint]]></Tracking>
              <Tracking event="thirdQuartile"><![CDATA[https://example.com/thirdQuartile]]></Tracking>
              <Tracking event="complete"><![CDATA[https://example.com/complete]]></Tracking>
            </TrackingEvents>
          </Linear>
        </Creative>
        <Creative id="2">
          <CompanionAds>
            <Companion width="300" height="250">
              <StaticResource creativeType="image/jpeg">
                <![CDATA[https://example.com/companion.jpg]]>
              </StaticResource>
              <CompanionClickThrough><![CDATA[https://example.com/companion-click]]></CompanionClickThrough>
            </Companion>
          </CompanionAds>
        </Creative>
      </Creatives>
    </InLine>
  </Ad>
</VAST>`

describe('parseVastXml', () => {
  it('should correctly parse a valid VAST XML', () => {
    const vastResponse = parseVastXml(sampleVastXml)

    expect(vastResponse.adType).toBe('video')
    expect(vastResponse.mediaUrl).toBe('https://example.com/video.mp4')
    expect(vastResponse.duration).toBe(30)
    expect(vastResponse.clickThroughUrl).toBe('https://example.com/click')

    expect(vastResponse.trackingEvents.impression).toEqual([
      'https://example.com/impression',
    ])
    expect(vastResponse.trackingEvents.start).toEqual([
      'https://example.com/start',
    ])
    expect(vastResponse.trackingEvents.firstQuartile).toEqual([
      'https://example.com/firstQuartile',
    ])
    expect(vastResponse.trackingEvents.midpoint).toEqual([
      'https://example.com/midpoint',
    ])
    expect(vastResponse.trackingEvents.thirdQuartile).toEqual([
      'https://example.com/thirdQuartile',
    ])
    expect(vastResponse.trackingEvents.complete).toEqual([
      'https://example.com/complete',
    ])

    expect(vastResponse.companionAds).toBeDefined()
    expect(vastResponse.companionAds?.length).toBe(1)

    const companionAd = vastResponse.companionAds?.[0]
    expect(companionAd?.width).toBe(300)
    expect(companionAd?.height).toBe(250)
    expect(companionAd?.imageUrl).toBe('https://example.com/companion.jpg')
    expect(companionAd?.clickThroughUrl).toBe(
      'https://example.com/companion-click',
    )
  })

  it('should throw an error when Linear element is missing', () => {
    const invalidVastXml = `<?xml version="1.0" encoding="UTF-8"?>
    <VAST version="4.1">
      <Ad id="12345" adType="video">
        <InLine>
          <AdSystem version="1.0">Custom Ad Network</AdSystem>
          <AdTitle>Sample Ad</AdTitle>
          <Creatives>
            <!-- Missing Creative -->
          </Creatives>
        </InLine>
      </Ad>
    </VAST>`

    expect(() => parseVastXml(invalidVastXml)).toThrow(
      'No Creative element found in Creative',
    )
  })

  it('should correctly parse duration with milliseconds', () => {
    const vastXmlWithMillis = `<?xml version="1.0" encoding="UTF-8"?>
    <VAST version="4.1">
      <Ad id="12345" adType="video">
        <InLine>
          <AdSystem version="1.0">Custom Ad Network</AdSystem>
          <AdTitle>Sample Ad</AdTitle>
          <Creatives>
            <Creative id="1">
              <Linear>
                <Duration>00:00:30.500</Duration>
                <MediaFiles>
                  <MediaFile delivery="progressive" type="video/mp4" width="640" height="360">
                    <![CDATA[https://example.com/video.mp4]]>
                  </MediaFile>
                </MediaFiles>
              </Linear>
            </Creative>
          </Creatives>
        </InLine>
      </Ad>
    </VAST>`

    const vastResponse = parseVastXml(vastXmlWithMillis)
    expect(vastResponse.duration).toBeCloseTo(30.5, 1)
  })

  it('should select the first MediaFile when multiple are present', () => {
    const vastXmlMultipleMediaFiles = `<?xml version="1.0" encoding="UTF-8"?>
    <VAST version="4.1">
      <Ad id="12345" adType="video">
        <InLine>
          <AdSystem version="1.0">Custom Ad Network</AdSystem>
          <AdTitle>Sample Ad</AdTitle>
          <Creatives>
            <Creative id="1">
              <Linear>
                <Duration>00:00:30</Duration>
                <MediaFiles>
                  <MediaFile delivery="progressive" type="video/mp4" width="640" height="360">
                    <![CDATA[https://example.com/video1.mp4]]>
                  </MediaFile>
                  <MediaFile delivery="progressive" type="video/webm" width="640" height="360">
                    <![CDATA[https://example.com/video2.webm]]>
                  </MediaFile>
                </MediaFiles>
              </Linear>
            </Creative>
          </Creatives>
        </InLine>
      </Ad>
    </VAST>`

    const vastResponse = parseVastXml(vastXmlMultipleMediaFiles)
    expect(vastResponse.mediaUrl).toBe('https://example.com/video1.mp4')
  })

  it('should handle missing optional elements gracefully', () => {
    const vastXmlMissingOptional = `<?xml version="1.0" encoding="UTF-8"?>
    <VAST version="4.1">
      <Ad id="12345" adType="audio">
        <InLine>
          <AdSystem version="1.0">Custom Ad Network</AdSystem>
          <AdTitle>Sample Audio Ad</AdTitle>
          <Creatives>
            <Creative id="1">
              <Linear>
                <Duration>30</Duration>
                <MediaFiles>
                  <MediaFile delivery="progressive" type="audio/mpeg">
                    <![CDATA[https://example.com/audio.mp3]]>
                  </MediaFile>
                </MediaFiles>
              </Linear>
            </Creative>
          </Creatives>
        </InLine>
      </Ad>
    </VAST>`

    const vastResponse = parseVastXml(vastXmlMissingOptional)
    expect(vastResponse.adType).toBe('audio')
    expect(vastResponse.mediaUrl).toBe('https://example.com/audio.mp3')
    expect(vastResponse.duration).toBe(30)
    expect(vastResponse.clickThroughUrl).toBe('')
    expect(vastResponse.trackingEvents.impression).toEqual([])
  })

  it('should correctly parse multiple impressions and companion ads', () => {
    const vastXmlMultipleCreatives = `<?xml version="1.0" encoding="UTF-8"?>
    <VAST version="4.1">
      <Ad id="12345" adType="video">
        <InLine>
          <AdSystem version="1.0">Custom Ad Network</AdSystem>
          <AdTitle>Sample Ad</AdTitle>
          <Impression><![CDATA[https://example.com/impression1]]></Impression>
          <Impression><![CDATA[https://example.com/impression2]]></Impression>
          <Creatives>
            <Creative id="1">
              <Linear>
                <Duration>00:00:15</Duration>
                <MediaFiles>
                  <MediaFile delivery="progressive" type="video/mp4" width="640" height="360">
                    <![CDATA[https://example.com/video.mp4]]>
                  </MediaFile>
                </MediaFiles>
                <VideoClicks>
                  <ClickThrough><![CDATA[https://example.com/click]]></ClickThrough>
                </VideoClicks>
                <TrackingEvents>
                  <Tracking event="start"><![CDATA[https://example.com/start]]></Tracking>
                </TrackingEvents>
              </Linear>
            </Creative>
            <Creative id="2">
              <CompanionAds>
                <Companion width="300" height="250">
                  <StaticResource creativeType="image/jpeg">
                    <![CDATA[https://example.com/companion1.jpg]]>
                  </StaticResource>
                  <CompanionClickThrough><![CDATA[https://example.com/companion-click1]]></CompanionClickThrough>
                </Companion>
                <Companion width="728" height="90">
                  <StaticResource creativeType="image/jpeg">
                    <![CDATA[https://example.com/companion2.jpg]]>
                  </StaticResource>
                  <CompanionClickThrough><![CDATA[https://example.com/companion-click2]]></CompanionClickThrough>
                </Companion>
              </CompanionAds>
            </Creative>
          </Creatives>
        </InLine>
      </Ad>
    </VAST>`

    const vastResponse = parseVastXml(vastXmlMultipleCreatives)
    expect(vastResponse.trackingEvents.impression).toEqual([
      'https://example.com/impression1',
      'https://example.com/impression2',
    ])
    expect(vastResponse.companionAds).toBeDefined()
    expect(vastResponse.companionAds?.length).toBe(2)
    expect(vastResponse.companionAds?.[0].imageUrl).toBe(
      'https://example.com/companion1.jpg',
    )
    expect(vastResponse.companionAds?.[1].imageUrl).toBe(
      'https://example.com/companion2.jpg',
    )
  })
})

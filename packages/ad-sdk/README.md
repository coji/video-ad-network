# Usage

Usage example

```js
(async () => {
  const config: AdConfig = {
    adSlotId: 123,
    mediaId: 456,
    containerElement: document.getElementById('ad-container')!,
    companionContainer: document.getElementById('companion-container')
  };

  const adState = await initializeAdSDK(config);
  play(adState);

  // Later, you can use other functions like:
  // pause(adState);
  // setVolume(adState, 0.5);
})();
```

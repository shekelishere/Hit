# Israball app

The phone app version of Israball. It is an installable web app (PWA) and the same files are wrapped for iOS and Android with Capacitor in `../mobile`.

What the app adds over the website:
- **My gadgets:** every item you bought, the countdown on its 30-day return window, and its warranty end date.
- **Returns:** pick a reason and book a courier pickup from the item itself.
- **Test log:** the same claimed-vs-measured results as the site, built for one-handed use.

Preview limits: data is stored on the device only (localStorage), checkout is not connected, and the items in My gadgets are examples. Pickup requests are saved locally and not sent anywhere.

## Install on a phone (PWA)
Serve this folder over HTTPS (any static host). Open it on the phone, then:
- iPhone (Safari): Share, then Add to Home Screen.
- Android (Chrome): menu, then Install app.
It opens full screen and works offline after the first visit (`sw.js`).

## Build the store apps (Capacitor)
Needs Node 18+, Android Studio for Android, and a Mac with Xcode for iOS.
```
cd ../mobile
npm install
npm run add:android   # or: npm run add:ios
npm run sync
npm run open:android  # or: npm run open:ios
```
Then build and sign from Android Studio or Xcode. Run `npm run sync` after every change to `../app`.

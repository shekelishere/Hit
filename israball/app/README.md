# Israball app

The phone app version of Israball. It is an installable web app (PWA) and the same files are wrapped for iOS and Android with Capacitor in `../mobile`.

What the app adds over the website:
- **Sizes:** a saved foot measurement for each child, the EU size, and a reminder to re-measure after 90 days.
- **Shop:** pick a child and the boots list shows only models that come in that child's size.
- **Orders:** request a size swap on an order (14-day window, first swap free).

Preview limits: data is stored on the device only (localStorage), checkout is not connected, and the order shown is an example. Swap requests are saved locally and not sent anywhere.

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

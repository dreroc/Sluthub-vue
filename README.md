<h1 align="center"> Vue frontend for "sluthub", a media server I host<br>Forked from <a href="https://github.com/jellyfin/jellyfin-vue">Jellyfin</a>, detached for better repo control</h1>

<br>

![2023-05-17-072304](https://github.com/ClaraCrazy/Sluthub-vue/assets/55334727/72687826-5daa-4f78-bc0f-7ffdabcc3fac)

<br>

## Privacy disclaimer 🕵🏻

Jellyfin Vue is just a GUI _frontend_ for a Jellyfin server. It only establishes connection to the Jellyfin server that you point it to, **nothing else**.

- **Local instances** _Examples: Our Windows/Mac/Linux application, a local web server, etc_: All the necessary assets for the frontend to work
  are available locally (in your device) or bundled into the underlying environment (Tauri, Electron, etc) where it is running.
  No assets need to be fetched remotely.
- **Remote instances** _Examples: Our hosted instance, an admin hosting Jellyfin Vue and sharing the URL
  (which is in a different domain from the Jellyfin Server), etc_: This probably comprises most cases.
  Here, all the frontend assets are not locally available, but somewhere else. When you access the remotely hosted frontend
  (normally using a web browser like Firefox or Microsoft Edge),
  all the frontend assets are loaded/cached into your device. Once the load has finished,
  **the connection will exclusively be between your device and the Jellyfin server(s)** ¹². Whoever is serving the frontend
  is never in the middle. ³

¹ _Assuming that the hosted version has not been altered (by adding trackers, beacons...) in any way from the sources provided in this repository
and you trust the person/people behind it to not have done so_.

² _Some features that need access to remote resources that are not controlled by you and/or the person hosting Jellyfin Vue might be added in the future
(such as Google Cast support for Chromecasts). These will be always **opt in** and toggleable through [our configuration](https://github.com/jellyfin/jellyfin-vue/wiki/Configuration)_

³ _We assume standard networks here, no special configurations or policies that your ISP/Workplace/University/etc might apply._

For your interest, [Jellyfin Web](https://github.com/jellyfin/jellyfin-web) (our main frontend) works in a similar way:
It connects by default to the Jellyfin server that is running alongside,
but it's also capable to connect to other Jellyfin servers [like can be tested in our demo](https://demo.jellyfin.org/) and,
once loaded, only connections to fetch its own assets are made to the original server. Jellyfin Web can also be hosted standalone like Jellyfin Vue.

- _Relevant links_: [Community standards](https://jellyfin.org/docs/general/community-standards) and [Social Contract](https://github.com/jellyfin/jellyfin-meta/blob/master/policies-and-procedures/jellyfin-social-contract.md)

# For developers 🛠

## Dependencies

- [Node.js LTS](https://nodejs.org/en/download) `>=18.12.0 <19.0.0`
- npm `>=8.19.2` (included in Node.js)
- Jellyfin Server `>=10.7.0`

## Getting Started

1. Clone or download this repository:

   ```bash
   git clone https://github.com/jellyfin/jellyfin-vue.git
   cd jellyfin-vue
   ```

2. Install the build dependencies in the project directory:

   ```bash
   npm install
   ```

3. Run development build:

   ```bash
   npm start
   ```

   The client will be available at <http://127.0.0.1:3000> by default.

### Build for production 🏗️

When you're ready to deploy the client, you must build it for production specifically:

```bash
npm run build
```

Build output will be available under the `src/dist` folder.

## Other build features 🗜️

### Running a production build

After building the client, you can serve it directly:

```bash
npm run serve
```

There's also a shortcut for building the production version of the client and serving it afterwards:

```bash
npm run prod
```

⚠️ _Although the build of the client is production-ready, the internal HTTP server should never be exposed directly to the internet and a proper webserver like Nginx should always be used instead._

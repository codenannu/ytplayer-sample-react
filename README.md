# YouTube Player — React sample

Public playground for the YouTube Player SDK. Vite + React + full control chrome (`yt-player-*`).

| | |
|--|--|
| Port | **5173** |
| Sample version | **1.0.0** |
| Repo | [ytplayer-sample-react](https://github.com/codenannu/ytplayer-sample-react) |
| SDK | `@codenkay/video-ytplayer-ui` · `react` · `core` (**^1.0.0**) |

## Runtime stack

| Layer | Version |
|-------|---------|
| Node.js | **>=20.9.0** |
| React / react-dom | **19.3.1** |
| Vite | ^6.4.6 |
| SDK | `@codenkay/video-ytplayer-*@^1.0.0` |

> This sample is **standalone**. It does **not** require cloning a private SDK monorepo. Prefer installing packages from **npm**. Local `file:` links are only for pre-publish monorepo development.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md).

## SDK packages

| Package | Role | Used here |
|---------|------|-----------|
| [`@codenkay/video-ytplayer-core`](https://www.npmjs.com/package/@codenkay/video-ytplayer-core) | YouTube IFrame API engine | Yes (peer) |
| [`@codenkay/video-ytplayer-react`](https://www.npmjs.com/package/@codenkay/video-ytplayer-react) | Headless React player | Yes (peer) |
| [`@codenkay/video-ytplayer-ui`](https://www.npmjs.com/package/@codenkay/video-ytplayer-ui) | Control chrome (`yt-player-*`) | **Primary** |
| [`@codenkay/video-ytplayer-angular`](https://www.npmjs.com/package/@codenkay/video-ytplayer-angular) | Angular headless | No — see [Angular sample](https://github.com/codenannu/ytplayer-sample-angular) |

## Related samples

| Sample | Repository | Port | Purpose |
|--------|------------|------|---------|
| **This repo** | [ytplayer-sample-react](https://github.com/codenannu/ytplayer-sample-react) | **5173** | Full React chrome |
| Next.js | [ytplayer-sample-nextjs](https://github.com/codenannu/ytplayer-sample-nextjs) | **3001** | CSP / Referrer-Policy playground |
| Angular | [ytplayer-sample-angular](https://github.com/codenannu/ytplayer-sample-angular) | **4200** | Headless Angular |

## Quick start

```bash
git clone https://github.com/codenannu/ytplayer-sample-react.git
cd ytplayer-sample-react
cp .env.example .env.local   # optional: PORT / HOSTNAME
npm install
npm run dev
```

Requires Node.js **>=20.9.0**. Open http://localhost:5173

Listen bind: `NODE_ENV`, `PORT` (default **5173**), `HOSTNAME` from `.env*`.

## Install peers (into your own app)

```bash
npm install @codenkay/video-ytplayer-ui@^1.0.0 @codenkay/video-ytplayer-react@^1.0.0 @codenkay/video-ytplayer-core@^1.0.0 react@19.3.1 react-dom@19.3.1
```

```tsx
import { YouTubePlayerWithControls } from "@codenkay/video-ytplayer-ui";
import "@codenkay/video-ytplayer-ui/styles.css";

<YouTubePlayerWithControls
  videoId="dQw4w9WgXcQ"
  audioAvailable={false}
  onWatchTime={(s) => save(s)}
/>
```

Host pages must send `Referrer-Policy: strict-origin-when-cross-origin` (never `no-referrer` — YouTube Error **153**).

## Features demonstrated

- `YouTubePlayerWithControls` (nsg/videocrypt UI parity)
- Paste YouTube URL or 11-char ID
- Muted autoplay + tap-to-unmute
- Observe-only quality (picker hidden)
- Transparent interaction shield (title / related / end screen)
- `onWatchTime`, watermark, `audioAvailable={false}`

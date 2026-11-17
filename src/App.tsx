import { useState } from "react";
import { YouTubePlayerWithControls } from "@codenkay/video-ytplayer-ui";
import "@codenkay/video-ytplayer-ui/styles.css";

export default function App() {
  const [input, setInput] = useState("dQw4w9WgXcQ");
  const [active, setActive] = useState<string | null>(null);
  const [watchTime, setWatchTime] = useState(0);
  const [watermark, setWatermark] = useState("");

  return (
    <div style={{ maxWidth: 960, margin: "2rem auto", fontFamily: "system-ui", padding: 16 }}>
      <h1>YouTube React sample</h1>
      <p style={{ color: "#64748b" }}>
        Sibling of <code>yt-player</code>. Same chrome as nsg/videocrypt. Paste a YouTube URL or video ID.
      </p>
      <label style={{ display: "block", marginBottom: 8 }}>
        Video{" "}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "100%", maxWidth: 560 }}
        />
      </label>
      <label style={{ display: "block", marginBottom: 8 }}>
        Watermark{" "}
        <input value={watermark} onChange={(e) => setWatermark(e.target.value)} />
      </label>
      <button type="button" onClick={() => setActive(input.trim() || null)}>
        Load
      </button>
      <p style={{ color: "#64748b" }}>Watch time: {watchTime.toFixed(1)}s</p>
      {active ? (
        <div style={{ aspectRatio: "16 / 9", background: "#000", marginTop: 16 }}>
          <YouTubePlayerWithControls
            key={active}
            videoId={active}
            watermarkText={watermark || null}
            audioAvailable={false}
            onWatchTime={setWatchTime}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      ) : null}
    </div>
  );
}

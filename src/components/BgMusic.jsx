import { useEffect, useRef, useState } from "react";
import { MUSIC } from "../data/content";
import { sfx } from "../lib/sfx";
import "./BgMusic.css";

// Background music via the official YouTube IFrame API — no audio file is
// downloaded or redistributed, this just controls YouTube's own player.
// Browsers block unmuted autoplay, so the first click/keypress anywhere
// unmutes it (same gesture the visitor makes to start using the menu).

function loadYouTubeApi() {
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  return new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve(window.YT);
    };
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }
  });
}

export default function BgMusic() {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadYouTubeApi().then((YT) => {
      if (cancelled || !containerRef.current) return;
      playerRef.current = new YT.Player(containerRef.current, {
        videoId: MUSIC.videoId,
        playerVars: {
          autoplay: 1, mute: 1, loop: 1, playlist: MUSIC.videoId,
          controls: 0, disablekb: 1, fs: 0, modestbranding: 1,
        },
        events: {
          onReady: (e) => { e.target.playVideo(); setReady(true); },
        },
      });
    });
    return () => {
      cancelled = true;
      playerRef.current?.destroy?.();
    };
  }, []);

  // First click/keypress anywhere unmutes.
  useEffect(() => {
    let done = false;
    const unmute = () => {
      if (done) return;
      done = true;
      const p = playerRef.current;
      if (p) { p.unMute(); p.setVolume(40); p.playVideo(); }
      setMuted(false);
      window.removeEventListener("click", unmute);
      window.removeEventListener("keydown", unmute);
    };
    window.addEventListener("click", unmute);
    window.addEventListener("keydown", unmute);
    return () => {
      window.removeEventListener("click", unmute);
      window.removeEventListener("keydown", unmute);
    };
  }, []);

  const toggleMute = (e) => {
    e.stopPropagation();
    const p = playerRef.current;
    if (!p) return;
    sfx.select();
    if (muted) { p.unMute(); p.setVolume(40); } else { p.mute(); }
    setMuted(!muted);
  };

  return (
    <>
      {/* Hidden off-screen — audio only, no visible video */}
      <div style={{ position: "fixed", width: 1, height: 1, overflow: "hidden", left: -9999 }}>
        <div ref={containerRef} />
      </div>

      {/* SVG displacement filter for the liquid-glass refraction */}
      <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg">
        <filter id="bgm-glass-blur" x="0" y="0" width="100%" height="100%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.004 0.008" numOctaves="1" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="120" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <button
        className={`bgm-btn${muted ? " is-muted" : ""}`}
        onClick={toggleMute}
        disabled={!ready}
        aria-pressed={!muted}
        aria-label={muted ? "Unmute background music" : "Mute background music"}
        title={muted ? "Click to play background music" : "Click to mute background music"}
      >
        <span className="bgm-bend" />
        <span className="bgm-face" />
        <span className="bgm-edge" />
        <span className="bgm-content">
          <span className="bgm-eq">
            <span /><span /><span /><span />
          </span>
          <span className="bgm-copy">
            <span className="bgm-label">{muted ? "MUSIC OFF" : "MUSIC ON"}</span>
            <span className="bgm-action">{muted ? "CLICK TO PLAY" : "CLICK TO MUTE"}</span>
          </span>
        </span>
      </button>
    </>
  );
}

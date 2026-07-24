import { useState, useEffect } from "react";
import PageShell from "../components/PageShell";
import { TIMELINE } from "../data/content";
import { sfx } from "../lib/sfx";
import "./Education.css";

export default function Education() {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowUp" && active > 0) {
        sfx.move();
        setActive(active - 1);
      }
      if (e.key === "ArrowDown" && active < TIMELINE.length - 1) {
        sfx.move();
        setActive(active + 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  useEffect(() => {
    if (isPaused) return undefined;
    const interval = setInterval(() => {
      setActive((i) => (i + 1) % TIMELINE.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <PageShell index="02" title="Education" eyebrow="การศึกษา และ ประสบการณ์" hint={[{ keys: "↑↓", label: "SELECT" }]}>
      <div className="ed-list">
        {TIMELINE.map((t, i) => (
          <a
            href={t.link}
            target="_blank"
            rel="noreferrer"
            key={`${t.tag}-${t.title}`}
            className={`ed-row${mounted ? " in" : ""}${active === i ? " active" : ""}`}
            onMouseEnter={() => {
              if (active !== i) sfx.move();
              setActive(i);
              setIsPaused(true);
            }}
            onMouseLeave={() => setIsPaused(false)}
            onClick={() => {
              sfx.select();
              setActive(i);
            }}
          >
            <div className="ed-year">
              <span className="ed-year-num">{t.year}</span>
              <span className="ed-year-span">{t.span}</span>
            </div>
            <div className="ed-body">
              <div className="ed-title">{t.title}</div>
              <div className="ed-place">{t.place}</div>
            </div>
            <span className="ed-open" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>

      <div
        className="ed-visual"
        aria-live="polite"
      >
        <figure className="ed-photo-card">
          <div className="ed-photo-frame">
            <img
              className="ed-slide"
              key={active}
              src={TIMELINE[active].image}
              alt={TIMELINE[active].imageAlt}
              style={{ objectFit: TIMELINE[active].imageFit || "cover" }}
            />
            <span className="ed-photo-scan" />
            <div className="ed-slide-count">0{active + 1} / 0{TIMELINE.length}</div>
          </div>
          <figcaption key={`caption-${active}`}>
            <span>{TIMELINE[active].tag}</span>
            {TIMELINE[active].place}
          </figcaption>
          <div className="ed-dots" aria-hidden="true">
            {TIMELINE.map((item, i) => (
              <i className={active === i ? "active" : ""} key={`${item.tag}-${i}`} />
            ))}
          </div>
        </figure>
      </div>
    </PageShell>
  );
}

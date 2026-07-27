import { useState, useEffect, useRef } from "react";
import PageShell from "../components/PageShell";
import { PROJECTS } from "../data/content";
import { sfx } from "../lib/sfx";
import "./Projects.css";

export default function Projects() {
  const [active, setActive] = useState(0);
  const [detailOpen, setDetailOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const lastWheelAt = useRef(0);
  const touchStart = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && detailOpen) {
        setDetailOpen(false);
        return;
      }
      if (detailOpen) return;
      if (e.key === "ArrowUp" && active > 0) {
        sfx.move();
        setActive(active - 1);
      }
      if (e.key === "ArrowDown" && active < PROJECTS.length - 1) {
        sfx.move();
        setActive(active + 1);
      }
      if (e.key === "Enter") setDetailOpen(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, detailOpen]);

  useEffect(() => {
    document.body.style.overflow = detailOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [detailOpen]);

  const p = PROJECTS[active];
  const progress = PROJECTS.length > 1 ? active / (PROJECTS.length - 1) : 0;

  const moveProject = (direction) => {
    const next = Math.max(0, Math.min(PROJECTS.length - 1, active + direction));
    if (next !== active) {
      sfx.move();
      setActive(next);
    }
  };

  return (
    <PageShell index="03" title="Project & Event" eyebrow="ผลงานและกิจกรรม" hint={[{ keys: "↑↓", label: "BROWSE" }, { keys: "↵", label: "OPEN" }]}>
      <div
        className="pj-wrap"
        onTouchStart={(e) => {
          const touch = e.touches[0];
          touchStart.current = { x: touch.clientX, y: touch.clientY };
        }}
        onTouchEnd={(e) => {
          if (!touchStart.current) return;
          const touch = e.changedTouches[0];
          const dx = touch.clientX - touchStart.current.x;
          const dy = touch.clientY - touchStart.current.y;
          touchStart.current = null;
          if (Math.max(Math.abs(dx), Math.abs(dy)) < 42) return;
          const delta = Math.abs(dx) > Math.abs(dy) ? dx : -dy;
          moveProject(delta < 0 ? 1 : -1);
        }}
      >
        <div className="pj-rail" aria-label="Project navigation">
          <button
            className="pj-rail-arrow"
            type="button"
            disabled={active === 0}
            aria-label="Previous project"
            onClick={() => moveProject(-1)}
          >↑</button>
          <div className="pj-rail-track" aria-hidden="true">
            <span
              className="pj-rail-thumb"
              style={{ top: `calc(${progress * 100}% - ${progress * 26}px)`, "--pj-progress": progress }}
            />
          </div>
          <span className="pj-rail-count">
            {String(active + 1).padStart(2, "0")}<i>/</i>{String(PROJECTS.length).padStart(2, "0")}
          </span>
          <button
            className="pj-rail-arrow"
            type="button"
            disabled={active === PROJECTS.length - 1}
            aria-label="Next project"
            onClick={() => moveProject(1)}
          >↓</button>
          <span className="pj-rail-label">SCROLL</span>
        </div>
        <div
          className="pj-list"
          style={{ "--pj-active": active }}
          onWheel={(e) => {
            const now = Date.now();
            if (now - lastWheelAt.current < 180 || Math.abs(e.deltaY) < 8) return;

            const direction = e.deltaY > 0 ? 1 : -1;
            const next = Math.max(0, Math.min(PROJECTS.length - 1, active + direction));
            lastWheelAt.current = now;

            if (next !== active) {
              sfx.move();
              setActive(next);
            }
          }}
        >
          {PROJECTS.map((proj, i) => {
            const distance = Math.abs(active - i);
            const opacity = distance === 0 ? 1 : distance === 1 ? 0.72 : distance === 2 ? 0.26 : 0;

            return (
              <div
                key={proj.title}
                className={`pj-row${mounted ? " in" : ""}${active === i ? " active" : ""}`}
                style={{ opacity, pointerEvents: distance > 2 ? "none" : "auto" }}
                aria-hidden={distance > 2}
                onClick={() => {
                  sfx.select();
                  setActive(i);
                }}
              >
              <div className="pj-idx">
                <span className="pj-idx-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="pj-idx-label">{proj.type}</span>
              </div>
              <div className="pj-body">
                <div className="pj-rtitle">{proj.title}</div>
                <div className="pj-rplace">{proj.tags.join(" · ")}</div>
              </div>
              </div>
            );
          })}
        </div>

        <div className="pj-visual" aria-live="polite">
          <figure className="pj-photo-card">
            <div className="pj-photo-frame" style={{ background: p.background || "transparent" }}>
              <img
                className="pj-slide"
                key={active}
                src={p.img}
                alt={p.title}
                style={{ objectPosition: p.focus, objectFit: p.fit || "cover" }}
              />
              <span className="pj-photo-scan" />
              <div className="pj-slide-count">0{active + 1} / 0{PROJECTS.length}</div>
            </div>
            <figcaption key={`caption-${active}`}>
              <span className="pj-cap-tag">{p.tags.join(" · ")}</span>
              <span className="pj-cap-title">{p.title}</span>
              <span className="pj-cap-desc">{p.desc}</span>
              {p.link && (
                <a className="pj-cap-link" href={p.link} target="_blank" rel="noreferrer" onClick={() => sfx.select()}>
                  อ่านรายละเอียดเพิ่มเติม ↗
                </a>
              )}
              <button className="pj-detail-trigger" type="button" onClick={() => { sfx.select(); setDetailOpen(true); }}>
                ดูรายละเอียดผลงาน
              </button>
            </figcaption>
            <div className="pj-dots" aria-hidden="true">
              {PROJECTS.map((item, i) => (
                <i className={active === i ? "active" : ""} key={`${item.title}-${i}`} />
              ))}
            </div>
          </figure>
        </div>
      </div>
      {detailOpen && (
        <div className="pj-modal" role="dialog" aria-modal="true" aria-labelledby="pj-detail-title" onMouseDown={(e) => {
          if (e.target === e.currentTarget) setDetailOpen(false);
        }}>
          <article className="pj-modal-card">
            <button className="pj-modal-close" type="button" aria-label="ปิดรายละเอียด" onClick={() => setDetailOpen(false)}>×</button>
            <header className="pj-detail-head">
              <span className="pj-detail-index">{String(active + 1).padStart(2, "0")}</span>
              <div>
                <div className="pj-modal-kicker"><span>{p.type}</span>{p.duration || p.year}</div>
                <h2 id="pj-detail-title">{p.title}</h2>
              </div>
            </header>
            <p className="pj-modal-lead">{p.overview || p.desc}</p>
            <div className="pj-detail-content">
              <aside className="pj-detail-meta">
                {p.role && <section><h3>บทบาท</h3><p>{p.role}</p></section>}
                {p.team && <section><h3>ทีม</h3><p>{p.team}</p></section>}
                {p.detailTags?.length > 0 && <section><h3>แท็ก</h3><div className="pj-tool-list">{p.detailTags.map((tag) => <span key={tag}>{tag}</span>)}</div></section>}
              </aside>
              {p.highlights?.length > 0 && (
                <section className="pj-detail-work">
                  <h3>สิ่งที่พัฒนาและรับผิดชอบ</h3>
                  <ol>{p.highlights.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
                </section>
              )}
            </div>
            <div className="pj-modal-actions">
              {p.link && <a href={p.link} target="_blank" rel="noreferrer">เปิดเอกสาร / เว็บไซต์ ↗</a>}
              {p.secondaryLink && <a href={p.secondaryLink} target="_blank" rel="noreferrer">ดูแหล่งอ้างอิง ↗</a>}
            </div>
          </article>
        </div>
      )}
    </PageShell>
  );
}

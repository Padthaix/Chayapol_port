import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sfx } from "../lib/sfx";
import { MENU } from "../data/navigation";
import "../styles/page.css";

// Shared Persona-styled frame for every portfolio page: layered background
// (grid + speed lines), a title lockup (index + Thai eyebrow + big word),
// a liquid-glass back button, keyboard hints, and ESC/Backspace to return.
export default function PageShell({ index, title, eyebrow, hint, children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname.replace(/^\//, "");
  const currentIndex = MENU.findIndex((item) => item.page === currentPage);
  const nextItem = MENU[(currentIndex + 1 + MENU.length) % MENU.length];
  const previousItem = MENU[(currentIndex - 1 + MENU.length) % MENU.length];

  const goBack = () => {
    sfx.back();
    navigate("/");
  };

  const goNext = () => {
    sfx.select();
    navigate(`/${nextItem.page}`);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" || e.key === "Backspace") goBack();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <div className="pf-page">
      {/* SVG displacement filter for the liquid-glass back button */}
      <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg">
        <filter id="pf-glass-blur" x="0" y="0" width="100%" height="100%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.006 0.01" numOctaves="1" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="26" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <div className="pf-grid" />
      <div className="pf-streaks">
        {[9, 22, 34, 63, 79, 91].map((left, i) => (
          <div
            key={i}
            className="pf-streak"
            style={{ left: `${left}%`, opacity: 0.12 + (i % 3) * 0.12 }}
          />
        ))}
      </div>

      <div className="pf-head">
        <div className="pf-head-bar" />
        <div className="pf-head-text">
          {eyebrow && <div className="pf-eyebrow">{eyebrow}</div>}
          <div className="pf-title">
            {index && <span className="no">{index}</span>}
            {title}
          </div>
        </div>
      </div>

      {children}

      <Link
        className={`pf-back pf-prev-page${previousItem.page === "projects" ? " pf-prev-projects" : ""}`}
        to={`/${previousItem.page}`}
        onClick={() => sfx.back()}
        aria-label={`Go to ${previousItem.label}`}
      >
        <span className="pf-back-bend" />
        <span className="pf-back-face" />
        <span className="pf-back-edge" />
        <span className="pf-back-content">
          <span>{previousItem.label}</span>
        </span>
      </Link>

      <button className={`pf-next${nextItem.page === "projects" ? " pf-next-projects" : ""}`} onClick={goNext} aria-label={`Go to ${nextItem.label}`}>
        <span className="pf-next-glow" />
        <span className="pf-next-shadow" />
        <span className="pf-next-highlight" />
        <span className="pf-next-label">{nextItem.label}</span>
      </button>

      <button className="pf-back" onClick={goBack}>
        <span className="pf-back-bend" />
        <span className="pf-back-face" />
        <span className="pf-back-edge" />
        <span className="pf-back-content">
          <span className="pf-back-arrow">←</span>
          <span>back</span>
        </span>
      </button>

      {hint && (
        <div className="pf-hint">
          {hint.map((h) => (
            <span key={h.label}>
              <b>{h.keys}</b>
              {h.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

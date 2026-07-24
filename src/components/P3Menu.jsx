import { useState, useEffect } from "react";
import { sfx } from "../lib/sfx";
import { MENU } from "../data/navigation";
import "./P3Menu.css";

// Slanted, angled arrowhead behind each label (Persona-style).
const clip = (w, h) => `polygon(0px 0px, ${w}px ${h * 0.5}px, 0px ${h}px)`;

const BRAND = "CHAYAPOL";

export default function P3Menu({ onNavigate }) {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const [typed, setTyped] = useState("");

  // Typewriter for the brand name: type → pause → delete → retype, looping.
  useEffect(() => {
    let i = 0, deleting = false, timer;
    const tick = () => {
      if (!deleting) {
        i++;
        setTyped(BRAND.slice(0, i));
        if (i >= BRAND.length) { deleting = true; timer = setTimeout(tick, 1800); return; }
        timer = setTimeout(tick, 210 + Math.random() * 110);
      } else {
        i--;
        setTyped(BRAND.slice(0, i));
        if (i <= 0) { deleting = false; timer = setTimeout(tick, 500); return; }
        timer = setTimeout(tick, 110);
      }
    };
    timer = setTimeout(tick, 700);
    return () => clearTimeout(timer);
  }, []);

  const activate = (idx, silent = false) => {
    if (!silent && idx !== active) sfx.move();
    setActive(idx);
    setAnimKey((k) => k + 1);
  };

  const select = (page) => {
    sfx.select();
    onNavigate?.(page);
  };

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowUp") activate(Math.max(0, active - 1));
      if (e.key === "ArrowDown") activate(Math.min(MENU.length - 1, active + 1));
      if (e.key === "Enter") select(MENU[active].page);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div className="p3-overlay">
      <div className="p3-brand">
        <div className="p3-brand-bar" />
        <div className="p3-brand-text">
          <div className="p3-brand-name">{typed}<span className="p3-caret" /></div>
          <div className="p3-brand-sub">PORTFOLIO</div>
        </div>
      </div>

      <nav className="p3-menu">
        {MENU.map((item, i) => {
          const isActive = active === i;
          const dist = Math.abs(i - active);
          const opacity = isActive ? 1 : Math.max(0.5, 1 - dist * 0.2);
          const w = item.label.length * item.fontSize * 0.6 + 80;
          const h = item.fontSize * 0.94;

          return (
            <a
              key={item.id}
              href="#"
              className={`p3-row ${isActive ? "active" : ""} ${mounted ? "mounted" : ""}`}
              style={{
                marginRight: item.offsetX,
                marginTop: item.offsetY,
                transitionDelay: mounted ? `${i * 80}ms` : "0ms",
              }}
              onClick={(e) => { e.preventDefault(); select(item.page); }}
              onMouseEnter={() => activate(i)}
              aria-current={isActive ? "page" : undefined}
            >
              <div className="p3-glow" />
              <div className="p3-skew-wrap" style={{ transform: `skewX(${item.skew}deg) skewY(${item.skewY}deg)` }}>
                <div
                  key={isActive ? `pop-${i}-${animKey}` : `idle-${i}`}
                  className={`p3-shadow-tri${isActive ? " pop" : ""}`}
                  style={{ width: w, height: h, clipPath: clip(w, h) }}
                />
                <div
                  className="p3-highlight"
                  style={{ width: w, height: h, clipPath: clip(w, h), transform: `translateY(-50%) scaleX(${isActive ? 1 : 0})` }}
                />
                <div className="p3-label-wrap" style={{ opacity }}>
                  <span className="p3-label-base p3-label-dark" style={{ fontSize: item.fontSize }}>{item.label}</span>
                  <span className="p3-label-base p3-label-bright" style={{ fontSize: item.fontSize, clipPath: clip(w, h) }}>{item.label}</span>
                </div>
              </div>
            </a>
          );
        })}
      </nav>

      <div className={`p3-hint ${mounted ? "mounted" : ""}`}>
        <div className="p3-hint-row"><span className="p3-hint-key">↑↓</span><span>NAVIGATE</span></div>
        <div className="p3-hint-row"><span className="p3-hint-key">↵</span><span>CONFIRM</span></div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import PageShell from "../components/PageShell";
import { SKILL_GROUPS } from "../data/content";
import { sfx } from "../lib/sfx";
import "./Hobbies.css";

export default function Skills() {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft" && active > 0) {
        sfx.move();
        setActive(active - 1);
      }
      if (e.key === "ArrowRight" && active < SKILL_GROUPS.length - 1) {
        sfx.move();
        setActive(active + 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <PageShell index="04" title="Skills" eyebrow="ทักษะและเทคโนโลยี" hint={[{ keys: "← →", label: "SWITCH" }]}>
      <div className="hb-wrap">
        {SKILL_GROUPS.map((c, i) => (
          <div
            key={c.key}
            className={`hb-col${mounted ? " in" : ""}${active === i ? " active" : ""}`}
            tabIndex={0}
            role="button"
            aria-expanded={active === i}
            onClick={() => {
              if (active !== i) {
                sfx.select();
                setActive(i);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                if (active !== i) {
                  sfx.select();
                  setActive(i);
                }
              }
            }}
          >
            <span className="hb-index">0{i + 1}</span>
            <div className="hb-head">
              <span className="hb-key">{c.key}</span>
              <span className="hb-th">{c.th}</span>
            </div>
            <div className="hb-items">
              <span className="hb-glass-effect" aria-hidden="true" />
              <span className="hb-glass-tint" aria-hidden="true" />
              <span className="hb-glass-shine" aria-hidden="true" />
              {c.items.map((item, j) => (
                <span className="hb-item" key={item.name} style={{ animationDelay: `${0.12 + j * 0.035}s` }}>
                  <span className="hb-icon-tile" style={{ backgroundColor: item.color || "rgba(255,255,255,0.92)" }}>
                    <img
                      className={`hb-item-icon${item.mono ? " is-mono" : ""}`}
                      src={item.icon}
                      alt=""
                      loading="eager"
                      decoding="async"
                      onError={(e) => e.currentTarget.classList.add("is-missing")}
                    />
                    <span className="hb-item-fallback" aria-hidden="true">{item.name.slice(0, 2).toUpperCase()}</span>
                  </span>
                  <span className="hb-item-name">{item.name}</span>
                </span>
              ))}
            </div>
            <div className="hb-count">{c.items.length} SKILLS</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

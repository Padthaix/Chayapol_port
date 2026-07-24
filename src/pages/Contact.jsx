import { useState, useEffect } from "react";
import PageShell from "../components/PageShell";
import { CONTACTS } from "../data/content";
import { sfx } from "../lib/sfx";
import "./Contact.css";

export default function Social() {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "ArrowUp" && active > 0) { sfx.move(); setActive(active - 1); }
      if (event.key === "ArrowDown" && active < CONTACTS.length - 1) { sfx.move(); setActive(active + 1); }
      if (event.key === "Enter") window.open(CONTACTS[active].href, "_blank");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <PageShell index="05" title="Social" eyebrow="ช่องทางออนไลน์" hint={[{ keys: "↑↓", label: "SELECT" }, { keys: "↵", label: "OPEN" }]}>
      <div className="ct-layout">
        <div className="ct-wrap">
          <p className="ct-lead">ติดตามผลงานและพูดคุยกับผมได้บนช่องทางเหล่านี้</p>
          {CONTACTS.map((item, index) => (
            <a key={item.key} href={item.href} target="_blank" rel="noreferrer"
              className={`ct-row${mounted ? " in" : ""}${active === index ? " active" : ""}`}
              onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => sfx.select()}>
              <span className="ct-accent" style={{ background: item.color }} />
              <span className="ct-key">
                <span className="ct-icon" style={{ background: item.color }}><img src={item.preview} alt="" /></span>
                {item.key}
              </span>
              <span className="ct-handle">{item.handle}</span>
              <span className="ct-go">►</span>
            </a>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

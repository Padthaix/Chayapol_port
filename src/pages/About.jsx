import { useState } from "react";
import PageShell from "../components/PageShell";
import { useSway } from "../lib/useSway";
import { PROFILE, ABOUT_FACTS } from "../data/content";
import "./About.css";

export default function About() {
  const portraitRef = useSway();
  const [showCvNotice, setShowCvNotice] = useState(false);

  return (
    <PageShell index="01" title="About ME" eyebrow="แนะนำตัว">
      <div className="ab-wrap">
        <div className="ab-text">
          <h1 className="ab-name">{PROFILE.nameTh} <em>{PROFILE.nameThRest}</em></h1>
          <div className="ab-sub">{PROFILE.nameEn}</div>
          <p className="ab-intro">{PROFILE.intro}</p>

          <dl className="ab-facts">
            {ABOUT_FACTS.map((f, i) => (
              <div className="ab-fact" key={f.k} style={{ animationDelay: `${0.3 + i * 0.09}s` }}>
                <dt>{f.k}</dt>
                <dd>
                  {f.v.map((line) => (
                    <span className="ab-line" key={line}>{line}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="ab-portrait-column">
          <div className="ab-portrait">
            <div className="ab-portrait-tilt" ref={portraitRef}>
              <div className="ab-portrait-frame">
                <img src={PROFILE.photo} alt={`${PROFILE.nameTh} ${PROFILE.nameThRest}`} />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="pf-next ab-cv-button"
            onClick={() => setShowCvNotice(true)}
            aria-label="View CV"
          >
            <span className="pf-next-glow" />
            <span className="pf-next-shadow" />
            <span className="pf-next-highlight" />
            <span className="pf-next-label">VIEW CV</span>
          </button>
        </div>
      </div>

      {showCvNotice && (
        <div className="ab-game-alert" role="presentation" onClick={() => setShowCvNotice(false)}>
          <div className="ab-game-alert-box" role="alertdialog" aria-modal="true" aria-labelledby="cv-alert-title" onClick={(e) => e.stopPropagation()}>
            <div className="ab-game-alert-stripe" />
            <div className="ab-game-alert-code">SYSTEM ERROR</div>
            <h2 id="cv-alert-title">ยังไม่อัพโหลดนะจ้ะ</h2>
            <button type="button" autoFocus onClick={() => setShowCvNotice(false)}>ตกลง</button>
          </div>
        </div>
      )}
    </PageShell>
  );
}

import PageShell from "../components/PageShell";
import { useSway } from "../lib/useSway";
import { PROFILE, ABOUT_FACTS } from "../data/content";
import "./About.css";

export default function About() {
  const portraitRef = useSway();
  const cvFile = `${import.meta.env.BASE_URL}Chayapol-Chuaibamrung-CV-v3.pdf`;

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

          <a
            className="pf-next ab-cv-button"
            href={cvFile}
            download="Chayapol-Chuaibamrung-CV.pdf"
            aria-label="Download CV as PDF"
          >
            <span className="pf-next-glow" />
            <span className="pf-next-shadow" />
            <span className="pf-next-highlight" />
            <span className="pf-next-label">DOWNLOAD CV</span>
          </a>
        </div>
      </div>

    </PageShell>
  );
}

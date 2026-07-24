// Synthetic UI sound effects via Web Audio API — no audio files, no
// copyright, tiny footprint. Persona-style menu blips: a soft "move" tick
// on navigation and a brighter "select" on confirm.

let ctx = null;

function ac() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

// One short enveloped tone. `slideTo` bends the pitch over the duration.
function blip({ freq = 600, type = "triangle", dur = 0.05, gain = 0.05, slideTo }) {
  const c = ac();
  if (!c) return;
  const t = c.currentTime;
  const osc = c.createOscillator();
  const g = c.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t + dur);

  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(gain, t + 0.006); // quick attack
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur); // decay

  osc.connect(g).connect(c.destination);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

export const sfx = {
  // cursor move / hover — crisp tick
  move() {
    blip({ freq: 520, type: "triangle", dur: 0.05, gain: 0.13 });
  },
  // confirm / open — brighter two-part blip that slides up
  select() {
    blip({ freq: 660, type: "square", dur: 0.055, gain: 0.15, slideTo: 990 });
    blip({ freq: 1320, type: "triangle", dur: 0.12, gain: 0.1 });
  },
  // back / cancel — soft downward blip
  back() {
    blip({ freq: 440, type: "square", dur: 0.1, gain: 0.13, slideTo: 240 });
  },
};

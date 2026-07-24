import { useEffect, useRef } from "react";

// Gentle continuous "wind" sway on an element via a single rAF loop.
// Transform-only (cheap, smooth). Attach the returned ref to the element.
//
//   const ref = useSway();
//   <div ref={ref} />
export function useSway({ amp = 1, speed = 1 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const start = performance.now();
    const loop = (now) => {
      const t = ((now - start) / 1000) * speed;
      const rx = Math.sin(t * 0.8) * 4 * amp;
      const ry = Math.sin(t * 0.6) * 11 * amp;
      const rz = Math.sin(t * 0.5) * 4 * amp;
      const ty = Math.sin(t * 1.1) * 9 * amp;
      el.style.transform =
        `perspective(800px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)` +
        ` rotateZ(${rz.toFixed(2)}deg) translateY(${ty.toFixed(2)}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [amp, speed]);

  return ref;
}

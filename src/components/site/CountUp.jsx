import { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

// Counts from 0 to `to` once it is on screen.
export default function CountUp({ to, decimals = 0, delay = 0, duration = 1.4 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView || !ref.current) return undefined;
    if (reduce) {
      ref.current.textContent = to.toFixed(decimals);
      return undefined;
    }
    const controls = animate(0, to, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = v.toFixed(decimals);
      },
    });
    return () => controls.stop();
  }, [inView, reduce, to, decimals, delay, duration]);

  return <span ref={ref}>{(0).toFixed(decimals)}</span>;
}

import { useEffect } from 'react';
import Lenis from 'lenis';

// Inertia scrolling for the whole page. Skipped for people who ask for reduced motion.
// `anchors` makes in-page links (#workflow, #demo…) glide instead of jumping.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      anchors: { offset: -72 },
    });
    return () => lenis.destroy();
  }, []);
  return null;
}

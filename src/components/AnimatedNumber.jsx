import { useEffect, useRef, useState } from "react";

export default function AnimatedNumber({ value, decimals = 0, suffix = "", pad = 0, duration = 1400 }) {
  const [display, setDisplay] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;
    let animationFrame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const animate = now => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(value * eased);
        if (progress < 1) animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
      observer.disconnect();
    }, { threshold: 0.35 });
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [duration, value]);

  return <span ref={elementRef}>{display.toFixed(decimals).padStart(pad, "0")}{suffix}</span>;
}

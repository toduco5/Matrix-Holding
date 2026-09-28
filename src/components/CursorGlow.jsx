import { useEffect, useState, useRef, useCallback } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const rafRef = useRef(null);

  const handleMove = useCallback((e) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setPos({ x: e.clientX, y: e.clientY });
      setActive(true);
    });
  }, []);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    document.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseleave", () => setActive(false));
    return () => {
      document.removeEventListener("mousemove", handleMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMove]);

  return (
    <div
      className={`cursor-glow${active ? " active" : ""}`}
      style={{ left: pos.x, top: pos.y }}
      aria-hidden="true"
    />
  );
}

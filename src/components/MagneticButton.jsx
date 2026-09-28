import { useEffect, useRef, useState } from "react";

export default function MagneticButton({ 
  children, 
  className = "", 
  strength = 30,
  onClick,
  ...props 
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setPos({ x: x / strength, y: y / strength });
      });
    };

    const handleLeave = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setPos({ x: 0, y: 0 });
      });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [strength]);

  return (
    <button
      ref={ref}
      className={`btn-magnetic${className ? ` ${className}` : ""}`}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      onClick={onClick}
      {...props}
    >
      <span className="btn-magnetic__text">{children}</span>
    </button>
  );
}
import { useEffect, useRef, useState } from "react";

export default function TextStagger({ 
  children, 
  className = "", 
  split = "words", 
  tag = "p",
  delay = 50,
  threshold = 0.15,
  ...props 
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [words, setWords] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (!visible) return;
    const text = typeof children === "string" ? children : "";
    if (split === "words") {
      const w = text.split(/(\s+)/).filter(w => w.length > 0);
      setWords(w);
    } else if (split === "chars") {
      const c = text.split("");
      setWords(c);
    }
  }, [visible, children, split]);

  if (!visible || words.length === 0) {
    return <tag ref={ref} className={`text-stagger${className ? ` ${className}` : ""}`} {...props}>{children}</tag>;
  }

  return (
    <tag ref={ref} className={`text-stagger${split === "chars" ? " chars" : ""}${className ? ` ${className}` : ""}`} {...props}>
      {words.map((word, i) => (
        <span key={i} className="word" style={{ transitionDelay: `${i * delay}ms` }}>
          {word}
        </span>
      ))}
    </tag>
  );
}
import ParticleBackground from "./ParticleBackground.jsx";

export default function PageBanner({
  eyebrow = "MATRIX HOLDING",
  titlePrefix = "",
  titleHighlight = "",
  titleSuffix = "",
  subtitle = "",
  bgImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
  children = null
}) {
  return (
    <section
      className="page-banner-hero"
      style={{
        minHeight: 280,
        padding: "100px 24px 80px",
        backgroundImage: `linear-gradient(180deg, rgba(5,7,15,0.75) 0%, rgba(5,7,15,0.96) 100%), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <ParticleBackground />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {eyebrow && (
          <span style={{
            display: "inline-block",
            color: "#38bdf8",
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: 12
          }}>
            {eyebrow}
          </span>
        )}

        <h1 style={{
          color: "#ffffff",
          fontSize: "clamp(34px, 5vw, 54px)",
          fontWeight: 800,
          margin: "0 0 14px",
          letterSpacing: "-0.02em",
          fontFamily: "'Be Vietnam Pro', sans-serif"
        }}>
          {titlePrefix}{" "}
          {titleHighlight && <span style={{ color: "#38bdf8" }}>{titleHighlight}</span>}{" "}
          {titleSuffix}
        </h1>

        {subtitle && (
          <p style={{
            color: "rgba(255, 255, 255, 0.78)",
            fontSize: "clamp(14px, 1.6vw, 17px)",
            maxWidth: 720,
            margin: "0 auto",
            fontWeight: 400,
            lineHeight: 1.6
          }}>
            {subtitle}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}

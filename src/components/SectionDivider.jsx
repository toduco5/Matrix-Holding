import "../styles/section-divider.css";

export default function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <span className="section-divider-line" />
      <span className="section-divider-ornament"><span /></span>
      <span className="section-divider-line" />
    </div>
  );
}

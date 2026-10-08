export default function Commitments() {
  return (
    <section className="section" style={{ padding: "85px 0", background: "#05070f", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto 54px" }}>
          <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.3)", padding: "6px 16px", borderRadius: 30, marginBottom: 12 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#38bdf8", boxShadow: "0 0 8px #38bdf8" }} />
            ĐIỀU KHOẢN CAM KẾT
          </span>
          <h2 style={{ color: "#ffffff", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 900, margin: "0 0 12px" }}>
            Tận tâm trong mọi mối quan hệ hợp tác
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", margin: "0 auto", lineHeight: 1.65 }}>
            Matrix Holding cam kết đồng hành bằng năng lực thực thi, trách nhiệm cao nhất và sự minh bạch tuyệt đối.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.08fr 1fr", gap: 24, alignItems: "center", maxWidth: 1080, margin: "0 auto" }}>
          {/* Pillar 1 */}
          <div style={{ background: "rgba(15, 23, 42, 0.85)", borderRadius: 24, padding: "34px 26px", borderLeft: "4px solid #38bdf8", borderTop: "1px solid rgba(255,255,255,0.08)", borderRight: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 15px 40px rgba(0,0,0,0.5)" }} className="member-company-card">
            <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(56, 189, 248, 0.14)", border: "1px solid rgba(56, 189, 248, 0.3)", color: "#38bdf8", display: "grid", placeItems: "center", fontSize: 20, marginBottom: 20 }}>
              <i className="fa-solid fa-user-shield" />
            </div>
            <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>CAM KẾT 01</span>
            <h3 style={{ color: "#ffffff", fontSize: "19px", fontWeight: 800, margin: "0 0 12px" }}>Đội ngũ chất lượng</h3>
            <p style={{ color: "rgba(255, 255, 255, 0.72)", fontSize: "13px", lineHeight: 1.7, margin: 0, textAlign: "justify" }}>
              Tất cả nhân sự thực hiện dự án đều là những chuyên gia giàu kinh nghiệm thực chiến, có chuyên môn sâu cùng thái độ làm việc chuyên nghiệp.
            </p>
          </div>

          {/* Pillar 2 - FEATURED CENTER HERO PILLAR */}
          <div style={{ background: "linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 58, 138, 0.4) 100%)", borderRadius: 26, padding: "40px 30px", border: "2px solid #38bdf8", boxShadow: "0 20px 60px rgba(56, 189, 248, 0.25), 0 0 40px rgba(0, 0, 0, 0.8)", position: "relative", zIndex: 3 }} className="member-company-card">
            <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(90deg, #38bdf8, #1d4ed8)", color: "#ffffff", fontSize: "10.5px", fontWeight: 900, padding: "4px 18px", borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.15em", boxShadow: "0 0 15px rgba(56, 189, 248, 0.6)" }}>
              TRỤ CỘT CỐT LÕI
            </div>
            <div style={{ width: 60, height: 60, borderRadius: "50%", background: "linear-gradient(135deg, #38bdf8, #1d4ed8)", color: "#ffffff", display: "grid", placeItems: "center", fontSize: 24, marginBottom: 22, boxShadow: "0 0 20px rgba(56, 189, 248, 0.5)" }}>
              <i className="fa-solid fa-handshake-simple" />
            </div>
            <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>CAM KẾT 02</span>
            <h3 style={{ color: "#ffffff", fontSize: "21px", fontWeight: 900, margin: "0 0 12px" }}>Đồng hành dài hạn</h3>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "13.5px", lineHeight: 1.75, margin: 0, textAlign: "justify" }}>
              Matrix Holding không chỉ cung cấp giải pháp gián tiếp mà trực tiếp xắn tay áo đồng hành cùng doanh nghiệp xuyên suốt hành trình phát triển để tạo ra kết quả thực tế.
            </p>
          </div>

          {/* Pillar 3 */}
          <div style={{ background: "rgba(15, 23, 42, 0.85)", borderRadius: 24, padding: "34px 26px", borderRight: "4px solid #38bdf8", borderTop: "1px solid rgba(255,255,255,0.08)", borderLeft: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 15px 40px rgba(0,0,0,0.5)" }} className="member-company-card">
            <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(56, 189, 248, 0.14)", border: "1px solid rgba(56, 189, 248, 0.3)", color: "#38bdf8", display: "grid", placeItems: "center", fontSize: 20, marginBottom: 20 }}>
              <i className="fa-solid fa-lock" />
            </div>
            <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>CAM KẾT 03</span>
            <h3 style={{ color: "#ffffff", fontSize: "19px", fontWeight: 800, margin: "0 0 12px" }}>Bảo mật thông tin</h3>
            <p style={{ color: "rgba(255, 255, 255, 0.72)", fontSize: "13px", lineHeight: 1.7, margin: 0, textAlign: "justify" }}>
              Cam kết bảo mật tuyệt đối toàn bộ dữ liệu kinh doanh, bí mật công nghệ và chiến lược của đối tác trong suốt quá trình hợp tác và sau đó.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

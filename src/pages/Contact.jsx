import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";
import PageBanner from "../components/PageBanner.jsx";

const ROLES_OPTIONS = [
  "Nhà đầu tư",
  "Chủ dự án",
  "Đối tác chuyên môn",
  "Doanh nghiệp liên kết",
  "Ứng viên tuyển dụng",
  "Khác"
];

const SECTORS_OPTIONS = [
  "Bất động sản & Hạ tầng",
  "Công nghệ & Truyền thông",
  "Đào tạo & Học viện",
  "Đầu tư & Quản lý tài sản",
  "Khác"
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialRole = searchParams.get("type") || "";

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Nhu cầu kết nối từ website Matrix Holding");
    const body = encodeURIComponent(
      `Họ tên người đại diện: ${data.get("name")}\nDoanh nghiệp: ${data.get("company") || "Chưa cung cấp"}\nTrụ sở chính: ${data.get("address") || "Chưa cung cấp"}\nMã số thuế: ${data.get("tax") || "Chưa cung cấp"}\nEmail: ${data.get("email")}\nSố điện thoại: ${data.get("phone") || "Không cung cấp"}\nVai trò: ${data.get("role") || "Chưa chọn"}\nLĩnh vực quan tâm: ${data.get("sector") || "Chưa xác định"}\nQuy mô/Giai đoạn dự án: ${data.get("scale") || "Chưa cung cấp"}\n\nThông tin trao đổi:\n${data.get("comments")}`
    );

    setTimeout(() => {
      setMessage("Ứng dụng email đã được kích hoạt thành công. Vui lòng kiểm tra và gửi thư để ban đại diện Matrix Holding hỗ trợ trực tiếp.");
      setIsSubmitting(false);
      window.location.href = `mailto:matrixholding.support@gmail.com?subject=${subject}&body=${body}`;
    }, 400);
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(8, 12, 22, 0.75)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    borderRadius: "12px",
    color: "#ffffff",
    padding: "13px 16px",
    fontSize: "13.5px",
    fontFamily: "inherit",
    outline: "none",
    transition: "all 0.25s ease"
  };

  const labelStyle = {
    display: "block",
    color: "rgba(255, 255, 255, 0.85)",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: 8
  };

  return (
    <>
      <PageMeta
        title="Gặp gỡ & Kết nối | Matrix Holding"
        description="Bắt đầu cuộc trao đổi kết nối đối tác, đầu tư và tuyển dụng với Matrix Holding. Trụ sở KĐT Bắc Linh Đàm, Phường Hoàng Liệt, Quận Hoàng Mai, Hà Nội."
      />
      <Header />

      <main style={{ background: "#05070f", color: "#ffffff", minHeight: "100vh", fontFamily: "'Be Vietnam Pro', sans-serif" }}>
        {/* HERO BANNER */}
        <PageBanner
          eyebrow="MATRIX HOLDING"
          titlePrefix="Gặp gỡ & Kết nối cùng"
          titleHighlight="Matrix Holding"
          subtitle="Chia sẻ nhu cầu hợp tác, dự án hoặc tuyển dụng để khởi đầu giải pháp tối ưu nhất."
        />

        {/* MAIN SECTION: 2-COLUMN LAYOUT */}
        <section style={{ padding: "70px 0 100px", background: "#05070f", position: "relative" }}>
          {/* Ambient Background Glow */}
          <div style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "500px",
            background: "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.07) 0%, transparent 70%)",
            pointerEvents: "none"
          }} />

          <div className="container" style={{ position: "relative", zIndex: 2, maxWidth: 1080, margin: "0 auto" }}>
            {/* TOP ROW: 2 EQUAL CARDS (TRỤ SỞ ĐIỀU HÀNH bên trái, HỒ SƠ PHÁP NHÂN bên phải) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 28,
                marginBottom: 36,
                alignItems: "stretch"
              }}
              className="about-intro-grid"
            >
              {/* CARD 1 (BÊN TRÁI): TRỤ SỞ ĐIỀU HÀNH & GOOGLE MAPS EMBED */}
              <div
                style={{
                  background: "rgba(18, 24, 38, 0.85)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  borderRadius: 24,
                  padding: "30px 26px",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.65)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%"
                }}
                className="member-company-card"
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(56, 189, 248, 0.15)", color: "#38bdf8", display: "grid", placeItems: "center", fontSize: 15 }}>
                        <i className="fa-solid fa-building-flag" />
                      </div>
                      <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                        TRỤ SỞ ĐIỀU HÀNH
                      </span>
                    </div>
                    <span style={{
                      background: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.18)",
                      color: "rgba(255, 255, 255, 0.85)",
                      fontSize: "10px",
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: "14px"
                    }}>
                      Hà Nội HQ
                    </span>
                  </div>

                  <h3 style={{ color: "#ffffff", fontSize: "19px", fontWeight: 800, margin: "0 0 6px" }}>
                    Văn phòng Matrix Holding
                  </h3>
                  <p style={{ color: "rgba(255, 255, 255, 0.72)", fontSize: "13px", margin: "0 0 18px", lineHeight: 1.55 }}>
                    KĐT Bắc Linh Đàm, Phường Hoàng Liệt, Quận Hoàng Mai, Hà Nội
                  </p>

                  {/* Embedded Google Maps Container */}
                  <div style={{ width: "100%", height: 210, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.14)", position: "relative" }}>
                    <iframe
                      title="Google Maps Matrix Holding Headquarters"
                      src="https://maps.google.com/maps?q=KĐT+Bắc+Linh+Đàm,+Phường+Hoàng+Liệt,+Quận+Hoàng+Mai,+Hà+Nội&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                {/* Direct Directions Button */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=KĐT+Bắc+Linh+Đàm,+Phường+Hoàng+Liệt,+Quận+Hoàng+Mai,+Hà+Nội"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 18,
                    background: "rgba(56, 189, 248, 0.08)",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    color: "#38bdf8",
                    padding: "12px 18px",
                    borderRadius: "14px",
                    fontSize: "12.5px",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "all 0.25s ease"
                  }}
                  className="overview-pill-link"
                >
                  <span>Chỉ đường trực tiếp tới văn phòng</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }} />
                </a>
              </div>

              {/* CARD 2 (BÊN PHẢI): HỒ SƠ PHÁP NHÂN & THÔNG TIN LIÊN HỆ */}
              <div
                style={{
                  background: "rgba(18, 24, 38, 0.85)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  borderRadius: 24,
                  padding: "30px 26px",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.65)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%"
                }}
                className="member-company-card"
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(56, 189, 248, 0.15)", color: "#38bdf8", display: "grid", placeItems: "center", fontSize: 15 }}>
                        <i className="fa-solid fa-shield-halved" />
                      </div>
                      <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                        HỒ SƠ PHÁP NHÂN
                      </span>
                    </div>
                    <span style={{
                      background: "rgba(16, 185, 129, 0.15)",
                      border: "1px solid rgba(16, 185, 129, 0.35)",
                      color: "#10b981",
                      fontSize: "10px",
                      fontWeight: 800,
                      padding: "4px 12px",
                      borderRadius: "14px"
                    }}>
                      Verified Entity
                    </span>
                  </div>

                  {/* Company Owner Item */}
                  <div style={{ display: "flex", gap: 14, marginBottom: 16 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.12)", color: "#38bdf8", display: "grid", placeItems: "center", fontSize: 15, flexShrink: 0 }}>
                      <i className="fa-solid fa-building" />
                    </div>
                    <div>
                      <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "9.5px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", display: "block" }}>CHỦ QUẢN & ĐẦU TƯ</span>
                      <strong style={{ color: "#ffffff", fontSize: "14px", fontWeight: 800, display: "block", marginTop: 2 }}>CÔNG TY TNHH MATRIX HOLDING</strong>
                    </div>
                  </div>

                  {/* Working Hours Item */}
                  <div style={{ display: "flex", gap: 14, marginBottom: 18 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.12)", color: "#f59e0b", display: "grid", placeItems: "center", fontSize: 15, flexShrink: 0 }}>
                      <i className="fa-solid fa-clock" />
                    </div>
                    <div>
                      <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "9.5px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", display: "block" }}>THỜI GIAN LÀM VIỆC</span>
                      <strong style={{ color: "#ffffff", fontSize: "13.5px", fontWeight: 700, display: "block", marginTop: 2 }}>Thứ Hai - Thứ Sáu</strong>
                    </div>
                  </div>

                  {/* Email & Hotline Grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 18 }}>
                    <div style={{ background: "rgba(15, 23, 42, 0.75)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: 14, padding: "12px 12px", display: "flex", alignItems: "center", gap: 10 }}>
                      <i className="fa-solid fa-envelope" style={{ color: "#38bdf8", fontSize: 15 }} />
                      <div style={{ overflow: "hidden" }}>
                        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "8.5px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", display: "block" }}>HÒM THƯ ĐỐI TÁC</span>
                        <a href="mailto:matrixholding.support@gmail.com" style={{ color: "#ffffff", fontSize: "11px", fontWeight: 700, textDecoration: "none", display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          matrixholding.support...
                        </a>
                      </div>
                    </div>

                    <div style={{ background: "rgba(15, 23, 42, 0.75)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: 14, padding: "12px 12px", display: "flex", alignItems: "center", gap: 10 }}>
                      <i className="fa-solid fa-phone" style={{ color: "#38bdf8", fontSize: 15 }} />
                      <div>
                        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "8.5px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", display: "block" }}>ĐƯỜNG DÂY NÓNG VIP</span>
                        <a href="tel:+84964243026" style={{ color: "#ffffff", fontSize: "11.5px", fontWeight: 800, textDecoration: "none", display: "block" }}>
                          (+84) 964 243 026
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* NDA Security Banner */}
                <div style={{
                  background: "rgba(56, 189, 248, 0.08)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  borderRadius: 14,
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12
                }}>
                  <i className="fa-solid fa-user-shield" style={{ color: "#38bdf8", fontSize: 16, marginTop: 2, flexShrink: 0 }} />
                  <p style={{ color: "rgba(255, 255, 255, 0.78)", fontSize: "11.5px", lineHeight: 1.5, margin: 0 }}>
                    <strong>Cam kết thỏa thuận bảo mật (NDA):</strong> Thông tin được tiếp nhận và xử lý theo quy chuẩn bảo mật tập đoàn cao cấp nhất.
                  </p>
                </div>
              </div>
            </div>

            {/* BOTTOM ROW: FORM BẮT ĐẦU MỘT CUỘC TRAO ĐỔI */}
            <div
              style={{
                background: "linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(8, 12, 22, 0.98) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                borderRadius: 28,
                padding: "44px 40px",
                boxShadow: "0 30px 80px rgba(0, 0, 0, 0.75), 0 0 50px rgba(56, 189, 248, 0.15)"
              }}
              className="member-company-card"
            >
              {/* Form Header */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 32 }}>
                <div>
                  <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                    BẮT ĐẦU MỘT CUỘC TRAO ĐỔI
                  </span>
                    <h2 style={{ color: "#ffffff", fontSize: "28px", fontWeight: 900, margin: "0 0 8px", lineHeight: 1.25 }}>
                      Chia sẻ nhu cầu của bạn
                    </h2>
                    <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "13.5px", margin: 0, lineHeight: 1.6 }}>
                      Cung cấp thông tin đề xuất để ban đại diện Matrix Holding trực tiếp liên hệ và bảo mật trao đổi.
                    </p>
                  </div>

                  {/* Circular Paperplane Badge Icon */}
                  <div style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)",
                    display: "grid",
                    placeItems: "center",
                    color: "#ffffff",
                    fontSize: "20px",
                    boxShadow: "0 0 25px rgba(56, 189, 248, 0.5)",
                    flexShrink: 0
                  }}>
                    <i className="fa-solid fa-paper-plane" />
                  </div>
                </div>

                {/* Form Elements */}
                <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 18px" }}>
                  {/* Field 1: Name */}
                  <div>
                    <label htmlFor="name" style={labelStyle}>
                      HỌ TÊN NGƯỜI ĐẠI DIỆN <span style={{ color: "#38bdf8" }}>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      style={inputStyle}
                    />
                  </div>

                  {/* Field 2: Company */}
                  <div>
                    <label htmlFor="company" style={labelStyle}>
                      TÊN DOANH NGHIỆP <span style={{ color: "#38bdf8" }}>*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      placeholder="Công ty TNHH ABC"
                      style={inputStyle}
                    />
                  </div>

                  {/* Field 3: Address */}
                  <div>
                    <label htmlFor="address" style={labelStyle}>
                      TRỤ SỞ CHÍNH
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Tỉnh/Thành phố, Việt Nam"
                      style={inputStyle}
                    />
                  </div>

                  {/* Field 4: Tax Code */}
                  <div>
                    <label htmlFor="tax" style={labelStyle}>
                      MÃ SỐ THUẾ
                    </label>
                    <input
                      id="tax"
                      name="tax"
                      type="text"
                      placeholder="Mã số thuế doanh nghiệp"
                      style={inputStyle}
                    />
                  </div>

                  {/* Field 5: Email */}
                  <div>
                    <label htmlFor="email" style={labelStyle}>
                      THƯ ĐIỆN TỬ <span style={{ color: "#38bdf8" }}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="email@domain.vn"
                      style={inputStyle}
                    />
                  </div>

                  {/* Field 6: Phone */}
                  <div>
                    <label htmlFor="phone" style={labelStyle}>
                      SỐ ĐIỆN THOẠI LIÊN HỆ <span style={{ color: "#38bdf8" }}>*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Số điện thoại liên hệ"
                      style={inputStyle}
                    />
                  </div>

                  {/* Field 7: Role Dropdown */}
                  <div>
                    <label htmlFor="role" style={labelStyle}>
                      VAI TRÒ CỦA BẠN
                    </label>
                    <select
                      id="role"
                      name="role"
                      defaultValue={initialRole || ""}
                      style={{ ...inputStyle, color: "#ffffff", appearance: "none" }}
                    >
                      <option value="" disabled style={{ background: "#0f172a", color: "rgba(255,255,255,0.5)" }}>
                        Chọn vai trò
                      </option>
                      {ROLES_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} style={{ background: "#0f172a", color: "#ffffff" }}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Field 8: Sector Dropdown */}
                  <div>
                    <label htmlFor="sector" style={labelStyle}>
                      LĨNH VỰC HOẠT ĐỘNG <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>(không bắt buộc)</span>
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      defaultValue=""
                      style={{ ...inputStyle, color: "#ffffff", appearance: "none" }}
                    >
                      <option value="" style={{ background: "#0f172a", color: "rgba(255,255,255,0.5)" }}>
                        Chọn lĩnh vực hoạt động
                      </option>
                      {SECTORS_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} style={{ background: "#0f172a", color: "#ffffff" }}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Field 9: Project Scale (Full Width) */}
                

                  {/* Field 10: Comments / Message Textarea (Full Width) */}
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label htmlFor="comments" style={labelStyle}>
                      THÔNG TIN TRAO ĐỔI <span style={{ color: "#38bdf8" }}>*</span>
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      required
                      rows={4}
                      placeholder="Mô tả ngắn mục tiêu hợp tác, nguồn lực và thông tin bạn muốn trao đổi..."
                      style={{ ...inputStyle, minHeight: 110, resize: "vertical" }}
                    />
                  </div>

                  {/* Status Notification Message */}
                  {message && (
                    <div style={{
                      gridColumn: "1 / -1",
                      background: "rgba(56, 189, 248, 0.12)",
                      border: "1px solid rgba(56, 189, 248, 0.4)",
                      borderRadius: 14,
                      padding: "14px 18px",
                      color: "#38bdf8",
                      fontSize: "13px",
                      lineHeight: 1.6
                    }}>
                      <i className="fa-solid fa-circle-check" style={{ marginRight: 8 }} />
                      {message}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      gridColumn: "1 / -1",
                      marginTop: 8,
                      background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "14px",
                      padding: "16px 32px",
                      fontSize: "13.5px",
                      fontWeight: 800,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      cursor: isSubmitting ? "wait" : "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 12,
                      boxShadow: "0 10px 30px rgba(37, 99, 235, 0.45)",
                      transition: "all 0.3s ease",
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  >
                    <span>{isSubmitting ? "Đang khởi tạo email..." : "GỬI THÔNG TIN HỢP TÁC"}</span>
                    <i className="fa-solid fa-arrow-right" style={{ fontSize: 13 }} />
                  </button>

                  {/* Disclaimer Footer Note */}
                  <p style={{
                    gridColumn: "1 / -1",
                    margin: "12px 0 0",
                    color: "rgba(255, 255, 255, 0.45)",
                    fontSize: "11.5px",
                    lineHeight: 1.6
                  }}>
                    * Website không lưu trữ trái phép dữ liệu biểu mẫu. Nội dung sẽ được chuyển tiếp mã hóa đến hòm thư điều hành Matrix Holding.
                  </p>
                </form>
              </div>
            </div>
        </section>
      </main>

      <Footer />
    </>
  );
}


import { useState } from "react";
import { Link } from "react-router-dom";

const FAQ_ITEMS = [
  {
    number: "01",
    question: "MATRIX HOLDING LÀ DOANH NGHIỆP GÌ?",
    answer: "Matrix Holding là tập đoàn kiến tạo và phát triển hệ sinh thái kinh doanh đa ngành tại Việt Nam. Chúng tôi tập trung vào 04 trụ cột cốt lõi: Kết nối nguồn lực, Tư vấn quản trị, Đầu tư tăng trưởng và Đào tạo tinh hoa, giúp các doanh nghiệp Việt tối ưu hóa mô hình và bứt phá bền vững."
  },
  {
    number: "02",
    question: "MATRIX HOLDING HOẠT ĐỘNG TRONG NHỮNG LĨNH VỰC NÀO?",
    answer: "Matrix Holding vận hành hệ sinh thái đa ngành bao gồm: Matrix Network (Hệ sinh thái dịch vụ toàn diện & tư vấn thương hiệu), Matrix Connect (Kết nối giao thương & mạng lưới doanh nhân), Matrix Ventures (Quỹ đầu tư & ươm tạo dự án khởi nghiệp), và Matrix Academy (Đào tạo lãnh đạo & quản trị tinh hoa)."
  },
  {
    number: "03",
    question: "MATRIX HOLDING CUNG CẤP SẢN PHẨM, DỊCH VỤ GÌ?",
    answer: "Chúng tôi cung cấp bộ giải pháp toàn diện bao gồm: Tư vấn tái cấu trúc doanh nghiệp, Xây dựng & phát triển thương hiệu mạng xã hội, Kết nối nguồn vốn đầu tư chiến lược, Cung ứng giải pháp quản trị vận hành và Đào tạo nâng cao năng lực nhân sự thực chiến."
  },
  {
    number: "04",
    question: "MATRIX HOLDING ĐƯỢC THÀNH LẬP KHI NÀO?",
    answer: "Matrix Holding khởi nguồn sáng tạo từ năm 2016 với các dự án nội dung truyền thông và nghệ thuật. Qua các mốc 2020 và 2023, doanh nghiệp chính thức tái cấu trúc toàn diện vào năm 2026 để trở thành Tập đoàn Đầu tư & Phát triển Hệ sinh thái kinh doanh đa ngành hàng đầu."
  },
  {
    number: "05",
    question: "CHỦ TỊCH CỦA MATRIX HOLDING LÀ AI?",
    answer: "Chủ tịch Công ty TNHH Matrix Holding là Ông Hồ Anh Tuấn - nhà sáng lập giàu kinh nghiệm thực chiến trong định hướng chiến lược, kết nối nguồn lực đầu tư và dẫn dắt phát triển hệ sinh thái doanh nghiệp."
  }
];

const CTA_AUDIENCES = [
  {
    id: "customer",
    label: "Khách hàng",
    icon: "fa-user-check",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1100&q=85",
    title: "Giải pháp phù hợp với nhu cầu của bạn",
    summary: "Khám phá dịch vụ, sản phẩm và nguồn lực phù hợp để giải quyết nhu cầu và tạo thêm giá trị.",
    benefits: ["Được tư vấn theo mục tiêu cụ thể", "Kết nối đúng dịch vụ và chuyên gia", "Đồng hành trong quá trình triển khai"]
  },
  {
    id: "business",
    label: "Doanh nghiệp",
    icon: "fa-building",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1100&q=85",
    title: "Mở rộng nguồn lực và thị trường",
    summary: "Dành cho doanh nghiệp tìm kiếm đối tác, khách hàng và hướng phát triển bền vững.",
    benefits: ["Kết nối đối tác và cơ hội xúc tiến thương mại", "Tiếp cận nguồn lực tư vấn, vận hành và phát triển", "Khám phá mô hình hợp tác trong hệ sinh thái đa ngành"]
  },
  {
    id: "employee",
    label: "Nhân viên",
    icon: "fa-people-group",
    image: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?auto=format&fit=crop&w=1100&q=85",
    title: "Phát triển sự nghiệp cùng Matrix",
    summary: "Môi trường làm việc kết nối nhiều lĩnh vực, khuyến khích chủ động, học hỏi và tạo tác động thực tế.",
    benefits: ["Cơ hội phát triển chuyên môn và kỹ năng", "Tham gia các dự án đa ngành", "Làm việc cùng đội ngũ giàu kinh nghiệm"]
  },
  {
    id: "investor",
    label: "Nhà đầu tư",
    icon: "fa-chart-line",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=85",
    title: "Kết nối với cơ hội đầu tư tiềm năng",
    summary: "Dành cho nhà đầu tư quan tâm đến các dự án và mô hình kinh doanh có tiềm năng.",
    benefits: ["Tiếp cận cơ hội theo định hướng phù hợp", "Trao đổi về nguồn vốn và phương án hợp tác", "Kết nối với doanh nghiệp trong hệ sinh thái"]
  }
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [selectedAudience, setSelectedAudience] = useState(null);
  const activeAudience = CTA_AUDIENCES.find(item => item.id === selectedAudience);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="section home-faq-section" style={{ padding: "90px 0", background: "#05070f", position: "relative", overflow: "hidden" }}>
        {/* Background Ambient Glow */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "350px",
          background: "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.1) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          {/* Framed Card Box Container */}
          <div style={{
            maxWidth: 1040,
            margin: "0 auto",
            background: "linear-gradient(145deg, rgba(15, 23, 42, 0.92) 0%, rgba(8, 12, 22, 0.96) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: 24,
            border: "1px solid rgba(56, 189, 248, 0.3)",
            boxShadow: "0 25px 65px rgba(0, 0, 0, 0.65), 0 0 40px rgba(56, 189, 248, 0.15)",
            padding: "48px 44px"
          }} className="member-company-card home-faq-panel">
            
            {/* Header section - Centered with Title, Eyebrow & Description */}
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 12 }}>
                <span style={{ width: 24, height: 2, background: "#38bdf8", borderRadius: 2 }} />
                <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  CÂU HỎI THƯỜNG GẶP
                </span>
                <span style={{ width: 24, height: 2, background: "#38bdf8", borderRadius: 2 }} />
              </div>
              <h2 style={{
                color: "#ffffff",
                fontSize: "clamp(24px, 3.2vw, 36px)",
                fontWeight: 900,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
                margin: "0 0 12px",
                lineHeight: 1.3
              }}>
                GIẢI ĐÁP VỀ MATRIX HOLDING
              </h2>
              <p style={{
                color: "rgba(255, 255, 255, 0.72)",
                fontSize: "14px",
                lineHeight: 1.65,
                margin: "0 auto",
                maxWidth: 580
              }}>
                Thông tin nền tảng giúp các bên chủ động chuẩn bị cho một cuộc trao đổi hiệu quả.
              </p>
              {/* Divider Line beneath Header */}
              <div style={{ height: 1, width: "100%", background: "rgba(255, 255, 255, 0.12)", marginTop: 28 }} />
            </div>

            {/* Accordion Items List */}
            <div>
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={item.number}
                    className="home-faq-item"
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        padding: "22px 8px",
                        cursor: "pointer",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        textAlign: "left",
                        gap: 16
                      }}
                    >
                      {/* Bullet marker */}
                      <span style={{
                        width: 44,
                        flexShrink: 0,
                        color: "#1769aa",
                        fontSize: "18px",
                        fontWeight: 900,
                        transition: "color 0.2s ease"
                      }}>
                        —
                      </span>

                      {/* Question Title in Uppercase */}
                      <span style={{
                        flex: 1,
                        color: isOpen ? "#38bdf8" : "#ffffff",
                        fontSize: "clamp(13.5px, 1.6vw, 15.5px)",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                        transition: "color 0.2s ease",
                        lineHeight: 1.5
                      }}>
                        {item.question}
                      </span>

                      {/* Right Plus/Minus Icon */}
                      <div style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: isOpen ? "rgba(56, 189, 248, 0.18)" : "rgba(255, 255, 255, 0.06)",
                        border: isOpen ? "1px solid rgba(56, 189, 248, 0.4)" : "1px solid rgba(255, 255, 255, 0.1)",
                        color: isOpen ? "#38bdf8" : "rgba(255, 255, 255, 0.7)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: "14px",
                        flexShrink: 0,
                        transition: "all 0.3s ease"
                      }}>
                        <i className={`fa-solid ${isOpen ? "fa-minus" : "fa-plus"}`} />
                      </div>
                    </button>

                    {/* Answer content (collapsible) */}
                    {isOpen && (
                      <div style={{
                        padding: "0 12px 22px 60px",
                        animation: "fadeIn 0.3s ease-in-out"
                      }}>
                        <p style={{
                          color: "rgba(255, 255, 255, 0.8)",
                          fontSize: "14px",
                          lineHeight: 1.8,
                          margin: 0,
                          textAlign: "justify"
                        }}>
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      <section className="section partner-cta-section">
        <div className="container">
          <div className="partner-cta-panel">
            <div className="partner-cta-heading">
              <span className="partner-cta-eyebrow">ĐỒNG HÀNH CÙNG MATRIX HOLDING</span>
              <h2>Trở thành một phần của hệ sinh thái kiến tạo giá trị.</h2>
              <p>Chọn vai trò phù hợp để khám phá giá trị Matrix Holding có thể cùng bạn tạo dựng.</p> <br />
            </div>
            <div className="partner-cta-layout">
              <div className="partner-cta-main">
                <div className="partner-audience-selector" role="group" aria-label="Chọn vai trò">
                  {CTA_AUDIENCES.map(audience => (
                    <button
                      key={audience.id}
                      type="button"
                      className={`partner-audience-button${selectedAudience === audience.id ? " is-active" : ""}`}
                      onClick={() => setSelectedAudience(current => current === audience.id ? null : audience.id)}
                      aria-pressed={selectedAudience === audience.id}
                    >
                      <span className="partner-audience-logo" aria-hidden="true"><i className={`fa-solid ${audience.icon}`} /></span>
                      <span>{audience.label}</span>
                    </button>
                  ))}
                </div>

                {activeAudience && <div className="partner-audience-details" aria-live="polite" key={activeAudience.id}>
                  <div className="partner-audience-details__copy">
                    <h3>{activeAudience.title}</h3>
                    <p>{activeAudience.summary}</p>
                    <ul>{activeAudience.benefits.map(benefit => <li key={benefit}>{benefit}</li>)}</ul>
                  </div>
                </div>}
              </div>

                <div className="partner-cta-visual" aria-label="Đội ngũ Matrix Holding">
                <img src={activeAudience?.image || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1100&q=85"} alt="Đội ngũ Matrix Holding cùng hợp tác và phát triển" key={activeAudience?.id || "default"} />
                <div className="partner-cta-visual__caption"><span className="matrix-mark" aria-hidden="true">M</span><span><strong>Matrix Holding</strong><small>Cùng kiến tạo giá trị</small></span></div>
              </div>
            </div>

            <div className="partner-cta-actions">
              <Link to={selectedAudience ? `/contact?type=${selectedAudience}` : "/contact"} className="partner-cta-button partner-cta-button--primary">
                Liên hệ chúng tôi <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
              <Link to={selectedAudience ? `/contact?type=${selectedAudience}&interest=opportunity` : "/contact?interest=opportunity"} className="partner-cta-button partner-cta-button--secondary">
                Xem cơ hội hợp tác <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

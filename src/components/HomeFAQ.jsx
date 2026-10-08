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

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="section" style={{ padding: "90px 0", background: "#05070f", position: "relative", overflow: "hidden" }}>
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
          }} className="member-company-card">
            
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
                      {/* Left Number (01, 02, etc.) */}
                      <span style={{
                        width: 44,
                        flexShrink: 0,
                        color: isOpen ? "#38bdf8" : "rgba(255, 255, 255, 0.45)",
                        fontSize: "14px",
                        fontWeight: 800,
                        transition: "color 0.2s ease"
                      }}>
                        {item.number}
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

      {/* Partner CTA Section - Framed Card Layout matching Image 2 */}
      <section className="section" style={{ padding: "60px 0 90px", background: "#05070f", position: "relative" }}>
        <div className="container">
          {/* Framed Container Box */}
          <div
            style={{
              maxWidth: 1040,
              margin: "0 auto",
              background: "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(10, 16, 30, 0.98) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: 24,
              border: "1px solid rgba(56, 189, 248, 0.3)",
              boxShadow: "0 25px 65px rgba(0, 0, 0, 0.65), 0 0 40px rgba(56, 189, 248, 0.12)",
              padding: "46px 48px",
              position: "relative",
              overflow: "hidden"
            }}
            className="member-company-card"
          >
            {/* Ambient Lighting Accent inside Frame */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "-50px",
                transform: "translateY(-50%)",
                width: "350px",
                height: "260px",
                background: "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)",
                pointerEvents: "none"
              }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 40,
                alignItems: "center",
                position: "relative",
                zIndex: 2
              }}
              className="about-intro-grid"
            >
              {/* Left Details */}
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ width: 24, height: 2, background: "#38bdf8", borderRadius: 2 }} />
                  <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                    ĐỒNG HÀNH CÙNG MATRIX HOLDING
                  </span>
                </div>
                <h2
                  style={{
                    color: "#ffffff",
                    fontSize: "clamp(22px, 2.6vw, 32px)",
                    fontWeight: 900,
                    lineHeight: 1.3,
                    margin: "0 0 12px",
                    letterSpacing: "-0.01em"
                  }}
                >
                  Trở thành một phần của hệ sinh thái kiến tạo giá trị.
                </h2>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.72)",
                    fontSize: "14px",
                    lineHeight: 1.65,
                    margin: 0,
                    maxWidth: 620,
                    textAlign: "justify"
                  }}
                >
                  Chúng tôi chào đón các đối tác cùng chia sẻ định hướng phát triển dài hạn và cách làm việc minh bạch.
                </p>
              </div>

              {/* Right CTA Actions */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 14,
                  minWidth: 200
                }}
              >
                <Link
                  to="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    background: "#ffffff",
                    color: "#0a0e1a",
                    fontSize: "13.5px",
                    fontWeight: 800,
                    padding: "13px 28px",
                    borderRadius: 30,
                    textDecoration: "none",
                    letterSpacing: "0.03em",
                    boxShadow: "0 8px 25px rgba(255, 255, 255, 0.15)",
                    transition: "all 0.25s ease",
                    whiteSpace: "nowrap"
                  }}
                >
                  <span>LIÊN HỆ CHÚNG TÔI</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px" }} />
                </Link>
                <Link
                  to="/contact"
                  style={{
                    color: "#38bdf8",
                    fontSize: "13px",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "opacity 0.2s ease"
                  }}
                >
                  Xem cơ hội hợp tác
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

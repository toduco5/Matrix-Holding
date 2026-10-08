import React, { useState } from "react";

export default function WorkflowProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      tag: "BƯỚC · 01",
      shortLabel: "Tiếp nhận nhu cầu",
      title: "Tiếp nhận nhu cầu",
      desc: "Matrix Holding chủ động lắng nghe, thu thập thông tin và đánh giá toàn diện nhu cầu thực tế của đối tác để xây dựng phương án phân tích chuyên sâu nhất.",
      bullets: [
        "Khảo sát mục tiêu kinh doanh và thu thập dữ liệu sơ bộ từ đối tác.",
        "Đội ngũ chuyên gia tiến hành thẩm định và đánh giá năng lực thực tế.",
        "Thống nhất lộ trình hợp tác, xác lập chỉ số KPI và ký kết bảo mật NDA."
      ],
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=85"
    },
    {
      step: "02",
      tag: "BƯỚC · 02",
      shortLabel: "Chuyển giao dự án",
      title: "Chuyển giao dự án",
      desc: "Phân tích nguồn lực sẵn có, sau đó chuyển giao hồ sơ đến đơn vị thành viên phụ trách trực tiếp nhằm kích hoạt quá trình thực thi nhanh chóng và hiệu quả.",
      bullets: [
        "Khớp nối chính xác với các trụ cột: Network, Connect, Ventures hoặc Academy.",
        "Bàn giao hồ sơ kỹ thuật và thành lập ban dự án chuyên trách điều hành.",
        "Kích hoạt kế hoạch triển khai trên thị trường và kiểm soát tiến độ định kỳ."
      ],
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
    },
    {
      step: "03",
      tag: "BƯỚC · 03",
      shortLabel: "Đánh giá & Kết nối thêm",
      title: "Đánh giá & Kết nối thêm",
      desc: "Đo lường hiệu quả sau quá trình triển khai, nghiệm thu kết quả thực tế và chủ động kết nối thêm các nguồn lực chiến lược để mở rộng quy mô phát triển.",
      bullets: [
        "Nghiệm thu kết quả từng giai đoạn và đối chiếu chặt chẽ theo cam kết KPI.",
        "Chuẩn hóa quy trình vận hành và chuyển giao năng lực tự chủ cho đối tác.",
        "Chủ động kết nối với mạng lưới quỹ đầu tư quốc tế và liên minh đối tác."
      ],
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85"
    }
  ];

  const current = steps[activeStep];

  return (
    <section
      className="section workflow-process-section"
      style={{
        padding: "85px 0 95px",
        background: "linear-gradient(180deg, #05070f 0%, #070d1a 50%, #05070f 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <style>{`
        @media (max-width: 900px) {
          .workflow-outer-frame {
            padding: 28px 18px !important;
          }
          .workflow-stepper-card {
            grid-template-columns: 1fr !important;
          }
          .workflow-stepper-card img {
            height: 240px !important;
          }
          .workflow-top-track {
            max-width: 100% !important;
          }
          .workflow-step-btn {
            width: auto !important;
          }
        }
      `}</style>

      {/* Background Ambient Glow */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "380px",
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(60px)"
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* KHUNG FRAME BAO TRỌN QUY TRÌNH (ĐÓNG KHUNG FRAME LẠI) */}
        <div
          className="workflow-outer-frame"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            background: "rgba(11, 19, 36, 0.85)",
            border: "1px solid rgba(245, 158, 11, 0.35)",
            borderRadius: 26,
            padding: "46px 40px",
            boxShadow: "0 25px 65px rgba(0, 0, 0, 0.65), 0 0 35px rgba(245, 158, 11, 0.12)",
            backdropFilter: "blur(18px)",
            position: "relative"
          }}
        >
          {/* Section Header (Centered) */}
          <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto 44px" }}>
            <span
              style={{
                color: "#38bdf8",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(245, 158, 11, 0.12)",
                border: "1px solid rgba(245, 158, 11, 0.35)",
                padding: "6px 18px",
                borderRadius: 30,
                marginBottom: 14
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#38bdf8", boxShadow: "0 0 10px #38bdf8" }} />
              QUY TRÌNH LÀM VIỆC
            </span>

            <h2
              style={{
                color: "#ffffff",
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 900,
                margin: "0 0 14px",
                letterSpacing: "-0.02em",
                lineHeight: 1.3
              }}
            >
              Đồng hành theo một quy trình rõ ràng
            </h2>

            <p
              style={{
                color: "rgba(255, 255, 255, 0.75)",
                fontSize: "14.5px",
                margin: "0 auto",
                lineHeight: 1.75,
                maxWidth: 580,
                textAlign: "justify",
                textJustify: "inter-word"
              }}
            >
              Các bước triển khai chặt chẽ, tối ưu hiệu quả và đảm bảo tiến độ cho từng dự án.
            </p>
          </div>

          {/* 1. TOP HORIZONTAL STEPPER TRACK */}
          <div
            className="workflow-top-track"
            style={{
              position: "relative",
              maxWidth: 780,
              margin: "0 auto 42px"
            }}
          >
            {/* Horizontal Connecting Line */}
            <div
              style={{
                position: "absolute",
                top: 22,
                left: "14%",
                right: "14%",
                height: 2,
                background: "rgba(255, 255, 255, 0.2)",
                zIndex: 1
              }}
            />

            {/* Stepper Nodes */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
                zIndex: 2
              }}
            >
              {steps.map((st, i) => {
                const isActive = activeStep === i;
                return (
                  <button
                    key={st.step}
                    type="button"
                    onClick={() => setActiveStep(i)}
                    className="workflow-step-btn"
                    style={{
                      background: "transparent",
                      border: "none",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      cursor: "pointer",
                      width: 190,
                      padding: 0,
                      userSelect: "none"
                    }}
                  >
                    {/* Circle Node */}
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: "50%",
                        background: isActive ? "#f59e0b" : "#0a1426",
                        border: isActive ? "3px solid #f59e0b" : "2px solid rgba(255, 255, 255, 0.45)",
                        color: isActive ? "#05070f" : "#ffffff",
                        fontWeight: 800,
                        fontSize: "15px",
                        display: "grid",
                        placeItems: "center",
                        boxShadow: isActive ? "0 0 22px rgba(245, 158, 11, 0.65)" : "none",
                        transform: isActive ? "scale(1.12)" : "scale(1)",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        marginBottom: 14
                      }}
                    >
                      {st.step}
                    </div>

                    {/* Label Below Circle */}
                    <span
                      style={{
                        color: isActive ? "#f59e0b" : "rgba(255, 255, 255, 0.72)",
                        fontSize: "14px",
                        fontWeight: isActive ? 800 : 500,
                        textAlign: "center",
                        lineHeight: 1.4,
                        transition: "color 0.25s ease"
                      }}
                    >
                      {st.shortLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. INNER SPLIT CARD (Left Image, Right Content - Căn Justify & Trọn Ý) */}
          <div
            className="workflow-stepper-card"
            style={{
              width: "100%",
              background: "rgba(15, 25, 48, 0.95)",
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.55)",
              display: "grid",
              gridTemplateColumns: "380px 1fr",
              minHeight: 420
            }}
          >
            {/* Left Column: Image */}
            <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 320 }}>
              <img
                key={current.step}
                src={current.img}
                alt={current.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "opacity 0.4s ease, transform 0.4s ease"
                }}
              />
            </div>

            {/* Right Column: Step Details with Căn Justify & Trọn Vẹn Ý */}
            <div
              style={{
                padding: "44px 40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              {/* Step Tag */}
              <span
                style={{
                  color: "#f59e0b",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                  display: "inline-block"
                }}
              >
                {current.tag}
              </span>

              {/* Big Bold Title */}
              <h3
                style={{
                  color: "#ffffff",
                  fontSize: "clamp(24px, 2.6vw, 32px)",
                  fontWeight: 800,
                  margin: "0 0 16px",
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em"
                }}
              >
                {current.title}
              </h3>

              {/* Description (Căn Justify chuẩn ngữ nghĩa) */}
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.82)",
                  fontSize: "14.5px",
                  lineHeight: 1.75,
                  margin: "0 0 22px",
                  textAlign: "justify",
                  textJustify: "inter-word"
                }}
              >
                {current.desc}
              </p>

              {/* Key Bullets (Căn Justify & Trọn Ý) */}
              {current.bullets && (
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 26px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12
                  }}
                >
                  {current.bullets.map((b, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 12,
                        fontSize: "13.5px",
                        lineHeight: 1.65,
                        color: "rgba(255, 255, 255, 0.78)",
                        textAlign: "justify",
                        textJustify: "inter-word"
                      }}
                    >
                      <span style={{ color: "#f59e0b", fontWeight: 900, fontSize: "14px", flexShrink: 0, lineHeight: 1 }}>•</span>
                      <span style={{ textAlign: "justify", textJustify: "inter-word", flex: 1 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Brand Signature */}
              <span
                style={{
                  color: "rgba(255, 255, 255, 0.4)",
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase"
                }}
              >
                MATRIX HOLDING
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

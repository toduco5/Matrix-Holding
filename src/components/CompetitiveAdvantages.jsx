import React, { useState } from "react";

export default function CompetitiveAdvantages() {
  // Mặc định ban đầu chưa chọn số nào -> cây ở giữa độc lập
  const [activeId, setActiveId] = useState(null);

  const advantages = [
    {
      num: "01",
      treePart: "GỐC RỄ NỀN TẢNG",
      pinPos: { top: "86%", left: "50%" },
      icon: "fa-solid fa-shield-halved",
      title: "Chuẩn hóa pháp lý & bảo toàn vốn",
      desc: "Hạ tầng pháp lý chuẩn mực và cơ chế thẩm định rủi ro nghiêm ngặt bảo vệ tối đa nguồn lực, tạo nền tảng an toàn vững chắc cho dòng vốn và các đối tác đồng hành.",
    },
    {
      num: "02",
      treePart: "THÂN TRỤ KIÊN CỐ",
      pinPos: { top: "66%", left: "52%" },
      icon: "fa-solid fa-network-wired",
      title: "Hệ sinh thái bổ trợ khép kín",
      desc: "Liên kết đồng bộ 4 đơn vị chuyên sâu (Network, Connect, Ventures, Academy), tối ưu hóa nguồn lực vận hành và cung cấp giải pháp toàn diện tại một điểm chạm duy nhất.",
    },
    {
      num: "03",
      treePart: "CÀNH VƯƠN KẾT NỐI",
      pinPos: { top: "45%", left: "38%" },
      icon: "fa-solid fa-chart-line",
      title: "Mạng lưới kết nối chiến lược",
      desc: "Tiếp cận trực tiếp hơn 100 định chế tài chính, quỹ hạt giống và cộng đồng doanh nhân uy tín trên toàn quốc nhằm thúc đẩy hợp tác giao thương và mở rộng thị phần.",
    },
    {
      num: "04",
      treePart: "HOA TRÁI THỊNH VƯỢNG",
      pinPos: { top: "18%", left: "62%" },
      icon: "fa-solid fa-handshake-simple",
      title: "Cơ chế đồng hành linh hoạt",
      desc: "Tùy biến mô hình hợp tác từ tư vấn, ươm mầm đến gọi vốn và mở rộng thị trường theo từng nấc thang phát triển, cùng chia sẻ và gặt hái thành quả dài hạn.",
    }
  ];

  const currentAdvantage = advantages.find((a) => a.num === activeId);

  return (
    <section
      id="loi-the-canh-tranh"
      className="section"
      style={{
        padding: "50px 0 60px",
        background: "linear-gradient(180deg, #060913 0%, #03060c 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 480,
          height: 480,
          background: "radial-gradient(circle, rgba(234, 179, 8, 0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none"
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Compact Header */}
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 30px" }}>
          <span
            style={{
              color: "#38bdf8",
              fontSize: "10.5px",
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(234, 179, 8, 0.1)",
              border: "1px solid rgba(234, 179, 8, 0.28)",
              padding: "5px 14px",
              borderRadius: 30,
              marginBottom: 10
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#38bdf8",
                boxShadow: "0 0 6px #38bdf8"
              }}
            />
            LỢI THẾ CẠNH TRANH
          </span>

          <h2
            style={{
              color: "#ffffff",
              fontSize: "clamp(24px, 2.5vw, 30px)",
              fontWeight: 900,
              margin: "0 0 8px",
              fontFamily: "'Be Vietnam Pro', sans-serif"
            }}
          >
            Cây Hệ Sinh Thái Matrix Holding
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.68)",
              fontSize: "13.5px",
              margin: "0 auto",
              lineHeight: 1.5,
              maxWidth: 520
            }}
          >
            Bấm vào các số <span style={{ color: "#38bdf8", fontWeight: 700 }}>01, 02, 03, 04</span> trên cây để xem chi tiết từng lợi thế.
          </p>
        </div>

        {/* Center Container: Tree in center, detail appears beside ONLY when clicked */}
        <div className="tree-center-wrapper">
          {/* THE 3D TREE (Compact & Centered) */}
          <div className="tree-compact-stage">
            {/* Ambient golden core behind the tree */}
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 200,
                height: 240,
                background: "radial-gradient(ellipse at center, rgba(234, 179, 8, 0.22) 0%, transparent 70%)",
                filter: "blur(20px)",
                pointerEvents: "none"
              }}
            />

            {/* Tree Image */}
            <div className="tree-image-wrapper">
              <img
                src="/assets/golden-tree-3d.jpg"
                alt="3D Golden Prosperity Tree"
                className="tree-image-element"
              />
            </div>

            {/* Overlay cyber shadow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(6, 9, 19, 0.3) 0%, transparent 20%, transparent 80%, rgba(6, 9, 19, 0.8) 100%)",
                pointerEvents: "none"
              }}
            />

            {/* 4 Numbered Pins directly on the Tree */}
            {advantages.map((item) => {
              const isActive = activeId === item.num;
              return (
                <div
                  key={item.num}
                  className={`tree-hotspot-pin ${isActive ? "active" : ""}`}
                  style={{
                    top: item.pinPos.top,
                    left: item.pinPos.left
                  }}
                  onClick={() => setActiveId(isActive ? null : item.num)}
                  role="button"
                  tabIndex={0}
                  title={`Bấm vào số ${item.num} để xem: ${item.title}`}
                >
                  {/* Radar Pulse */}
                  <div className="tree-hotspot-radar" />

                  {/* Number Circle Badge */}
                  <div className="tree-hotspot-core">
                    <span>{item.num}</span>
                  </div>
                </div>
              );
            })}

            {/* Bottom status badge */}
            <div
              style={{
                position: "relative",
                zIndex: 25,
                margin: "0 10px 10px",
                padding: "6px 10px",
                background: "rgba(10, 14, 25, 0.88)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(234, 179, 8, 0.22)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "10.5px", fontWeight: 600 }}>
                {activeId ? `Đang xem số ${activeId}` : "Bấm vào các số trên cây"}
              </span>
              <span style={{ color: "#fbbf24", fontSize: "10.5px", fontWeight: 800 }}>
                {activeId ? `${activeId} / 04` : "0 / 04"}
              </span>
            </div>
          </div>

          {/* DETAIL CARD: ONLY APPEARS BESIDE WHEN A NUMBER IS CLICKED */}
          {currentAdvantage && (
            <div className="tree-beside-card">
              {/* Header: Badge, Metric & Close (✕) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 12
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 8,
                      background: "rgba(234, 179, 8, 0.15)",
                      border: "1px solid rgba(234, 179, 8, 0.35)",
                      color: "#fbbf24",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 12
                    }}
                  >
                    <i className={currentAdvantage.icon} />
                  </span>
                  <span
                    style={{
                      color: "#fbbf24",
                      fontSize: "10.5px",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase"
                    }}
                  >
                    {currentAdvantage.treePart}
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span
                    style={{
                      background: "rgba(56, 189, 248, 0.1)",
                      border: "1px solid rgba(56, 189, 248, 0.25)",
                      color: "#38bdf8",
                      fontSize: "10.5px",
                      fontWeight: 700,
                      padding: "2px 8px",
                      borderRadius: 12
                    }}
                  >
                    {currentAdvantage.metric}
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveId(null)}
                    title="Đóng chi tiết"
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "rgba(255,255,255,0.6)",
                      cursor: "pointer",
                      display: "grid",
                      placeItems: "center",
                      fontSize: "10px",
                      padding: 0
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Title */}
              <h3
                style={{
                  color: "#ffffff",
                  fontSize: "16.5px",
                  fontWeight: 800,
                  margin: "0 0 10px",
                  lineHeight: 1.35,
                  fontFamily: "'Be Vietnam Pro', sans-serif"
                }}
              >
                {currentAdvantage.num}. {currentAdvantage.title}
              </h3>

              {/* Concise Justified Description */}
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "13px",
                  lineHeight: 1.65,
                  margin: "0 0 14px",
                  textAlign: "justify",
                  textJustify: "inter-word"
                }}
              >
                {currentAdvantage.desc}
              </p>

              {/* Key Highlight Tag */}
              <div
                style={{
                  padding: "7px 10px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.07)",
                  borderRadius: 8,
                  color: "rgba(255, 255, 255, 0.72)",
                  fontSize: "11.5px",
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  marginBottom: 14
                }}
              >
                <i className="fa-solid fa-check" style={{ color: "#38bdf8", fontSize: "10px" }} />
                <span>{currentAdvantage.highlight}</span>
              </div>

              {/* Number Switcher Buttons (01, 02, 03, 04) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: 10,
                  borderTop: "1px solid rgba(255, 255, 255, 0.07)"
                }}
              >
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>
                  Chuyển điểm:
                </span>
                <div style={{ display: "flex", gap: 5 }}>
                  {advantages.map((adv) => (
                    <button
                      key={adv.num}
                      type="button"
                      onClick={() => setActiveId(adv.num)}
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: activeId === adv.num ? "#fbbf24" : "rgba(255,255,255,0.06)",
                        color: activeId === adv.num ? "#000000" : "rgba(255,255,255,0.6)",
                        border: "none",
                        fontSize: "10.5px",
                        fontWeight: 800,
                        cursor: "pointer",
                        padding: 0,
                        transition: "all 0.2s ease"
                      }}
                    >
                      {adv.num}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

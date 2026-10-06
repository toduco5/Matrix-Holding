import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { TEAM_MEMBERS } from "../data/team.js";
import ParticleBackground from "../components/ParticleBackground.jsx";

const TIMELINE_DATA = [
  {
    year: "2016",
    tag: "Khởi nguồn sáng tạo",
    desc: "Matrix Holding được thành lập, hoạt động theo định hướng phát triển nghệ thuật với các dự án phim ngắn, phim dài tập và phim điện ảnh.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85"
  },
  {
    year: "2020",
    tag: "Bước vào hoạt động kinh doanh",
    desc: "Matrix Holding bắt đầu các hoạt động kinh doanh, trở thành đơn vị cung cấp dịch vụ truyền thông mạng xã hội và phát triển giải pháp thương hiệu.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=85"
  },
  {
    year: "2023",
    tag: "Chuẩn hóa nền tảng pháp lý",
    desc: "Matrix Holding chuẩn hóa pháp lý, trở thành doanh nghiệp cung cấp giải pháp toàn diện cho doanh nghiệp, nâng cao uy tín trên thị trường.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=85"
  },
  {
    year: "2026",
    tag: "Tái cấu trúc nguồn lực",
    desc: "Matrix Holding tái cấu trúc doanh nghiệp, tập trung vào việc xây dựng, kết nối và phát triển nguồn lực để tạo bệ phóng vững chắc.",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85"
  },
  {
    year: "2026+",
    tag: "Mở rộng hệ sinh thái",
    desc: "Matrix Holding mở rộng quy mô hoạt động, trở thành doanh nghiệp đầu tư và phát triển hệ sinh thái kinh doanh đa ngành hàng đầu tại Việt Nam.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=85"
  }
];

const STRATEGIC_PARTNERS = [
  { name: "Techcombank", category: "Tài chính - Ngân hàng", logo: "🏛️" },
  { name: "Heros Group", category: "Bảo mật & Công nghệ", logo: "🛡️" },
  { name: "Samie Studio", category: "Truyền thông & Sáng tạo", logo: "✨" },
  { name: "Infinity Capital", category: "Quỹ đầu tư", logo: "♾️" },
  { name: "Trống Đồng Palace", category: "Trung tâm Sự kiện", logo: "👑" },
  { name: "Matrix Capital", category: "Quản lý tài sản", logo: "💎" },
  { name: "Vua Nệm", category: "Chuỗi bán lẻ", logo: "🛏️" },
  { name: "Dream Pool Fitness", category: "Sức khỏe & Lifestyle", logo: "🏊" }
];

function PartnerMarquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animId;
    let scrollPos = 0;
    let isPaused = false;

    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    const step = () => {
      if (!isPaused) {
        scrollPos += 0.8;
        const halfWidth = track.scrollWidth / 3;
        if (scrollPos >= halfWidth) {
          scrollPos = 0;
        }
        track.style.transform = `translate3d(-${scrollPos}px, 0, 0)`;
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animId);
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const tripleList = [...STRATEGIC_PARTNERS, ...STRATEGIC_PARTNERS, ...STRATEGIC_PARTNERS];

  return (
    <div style={{
      overflow: "hidden",
      position: "relative",
      width: "100%",
      padding: "10px 0",
      WebkitMaskImage: "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
      maskImage: "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)"
    }}>
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: 20,
          width: "max-content",
          willChange: "transform"
        }}
      >
        {tripleList.map((p, index) => (
          <div
            key={`${p.name}-${index}`}
            style={{
              minWidth: 210,
              maxWidth: 230,
              flexShrink: 0,
              background: "rgba(18, 24, 38, 0.85)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderRadius: 18,
              padding: "24px 18px",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            className="partner-logo-card member-company-card"
          >
            <div style={{ fontSize: "32px", marginBottom: 8 }}>{p.logo}</div>
            <strong style={{ color: "#ffffff", fontSize: "14px", display: "block", marginBottom: 4 }}>{p.name}</strong>
            <span style={{ color: "#38bdf8", fontSize: "11px" }}>{p.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState("2016");
  const selectedMilestone = TIMELINE_DATA.find(item => item.year === activeTimeline) || TIMELINE_DATA[0];

  return (
    <>
      <PageMeta
        title="Giới thiệu Tập Đoàn | Matrix Holding"
        description="Giới thiệu chính thức về Matrix Holding: Lời chủ tịch, định vị, sứ mệnh, mô hình 3 hệ sinh thái, quy trình làm việc, lợi thế và cam kết đối tác."
      />
      <Header />

      <main style={{ background: "#05070f", color: "#ffffff", fontFamily: "'Be Vietnam Pro', sans-serif", overflow: "hidden" }}>
        {/* HERO TITLE BAND */}
        <section
          style={{
            minHeight: 280,
            padding: "100px 24px 80px",
            backgroundImage: "linear-gradient(180deg, rgba(5,7,15,0.7) 0%, rgba(5,7,15,0.96) 100%), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            position: "relative"
          }}
        >
          <ParticleBackground />

          <div style={{ position: "relative", zIndex: 2 }}>
            <span style={{
              display: "inline-block",
              color: "#38bdf8",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: 12
            }}>
              MATRIX HOLDING
            </span>
            <h1 style={{
              color: "#ffffff",
              fontSize: "clamp(34px, 5vw, 54px)",
              fontWeight: 800,
              margin: "0 0 14px",
              letterSpacing: "-0.02em"
            }}>
              Giới thiệu <span className="text-gradient">Matrix Holding</span>
            </h1>
            <p style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: "clamp(14px, 1.6vw, 17px)",
              maxWidth: 720,
              margin: "0 auto",
              fontWeight: 400,
              lineHeight: 1.6
            }}>
              Hành trình kiến tạo hệ sinh thái, kết nối nguồn lực và phát triển giá trị bền vững.
            </p>
          </div>
        </section>

        {/* 1. LỜI CHỦ TỊCH */}
        <section className="section" style={{ padding: "85px 0", background: "#05070f", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
          <div className="container">
            <div style={{
              display: "grid",
              gridTemplateColumns: "0.95fr 1.05fr",
              gap: 56,
              alignItems: "center"
            }} className="about-intro-grid">
              
              {/* Left Column: AI Executive Portrait Box */}
              <div style={{ position: "relative", width: "100%", maxWidth: 420, margin: "0 auto" }}>
                <div style={{
                  position: "absolute",
                  inset: "16px -16px -16px 16px",
                  background: "linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)",
                  borderRadius: 24,
                  zIndex: 1,
                  boxShadow: "0 0 35px rgba(41, 151, 255, 0.3)"
                }} />

                <div style={{
                  position: "relative",
                  zIndex: 2,
                  background: "rgba(18, 24, 38, 0.95)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  borderRadius: 24,
                  padding: 14,
                  boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
                  border: "1px solid rgba(41, 151, 255, 0.4)"
                }}>
                  <div style={{ borderRadius: 18, overflow: "hidden", height: 420, position: "relative" }}>
                    <img
                      src="/assets/chairman.jpg"
                      alt="Chủ tịch Hội đồng Quản trị Matrix Holding"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block"
                      }}
                    />
                    <span style={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      background: "rgba(5, 7, 15, 0.85)",
                      backdropFilter: "blur(8px)",
                      color: "#38bdf8",
                      fontSize: "11px",
                      fontWeight: 600,
                      padding: "4px 14px",
                      borderRadius: 20,
                      border: "1px solid rgba(56, 189, 248, 0.3)"
                    }}>
                      Minh họa AI
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Quote & Author */}
              <div style={{ paddingLeft: 10 }}>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#38bdf8",
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: 16
                }}>
                  <span style={{ height: 2, width: 24, background: "#38bdf8" }} />
                  LỜI CHỦ TỊCH
                </div>

                <span style={{
                  display: "block",
                  color: "#38bdf8",
                  fontSize: "64px",
                  lineHeight: "0.8",
                  fontWeight: 900,
                  fontFamily: "Georgia, serif",
                  marginBottom: 12
                }}>
                  “
                </span>

                <blockquote style={{
                  fontSize: "clamp(20px, 2.3vw, 27px)",
                  fontWeight: 800,
                  lineHeight: 1.48,
                  color: "#ffffff",
                  margin: "0 0 32px",
                  letterSpacing: "-0.02em"
                }}>
                  “Khởi nghiệp không chỉ cần một ý tưởng tốt, mà còn cần một người dẫn đường có tâm, một môi trường đủ điều kiện để phát triển và những cơ hội đủ lớn để trưởng thành.”
                </blockquote>

                <div style={{
                  borderLeft: "3px solid #38bdf8",
                  paddingLeft: 16,
                  marginTop: 20
                }}>
                  <strong style={{ display: "block", color: "#ffffff", fontSize: "15px", fontWeight: 800, lineHeight: 1.3 }}>
                    Chủ tịch Hội đồng Quản trị
                  </strong>
                  <span style={{ color: "#38bdf8", fontSize: "13px", fontWeight: 700 }}>
                    Matrix Holding
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. ĐỊNH VỊ THƯƠNG HIỆU */}
        <section className="section" style={{ padding: "75px 0", background: "#080c16", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "left" }}>
              <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 14 }}>
                ĐỊNH VỊ THƯƠNG HIỆU
              </span>

              <h2 style={{
                color: "#ffffff",
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 800,
                lineHeight: 1.35,
                margin: "0 0 20px",
                letterSpacing: "-0.02em"
              }}>
                “Là thương hiệu tiên phong trong lĩnh vực tư vấn, đầu tư và phát triển hệ sinh thái kinh doanh đa ngành.”
              </h2>

              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "15px", lineHeight: 1.8, margin: 0 }}>
                Matrix Holding định vị bản thân là đơn vị kiến tạo và phát triển hệ sinh thái kinh doanh trong nhiều lĩnh vực khác nhau thông qua các dự án, mô hình kinh doanh hiệu quả và tối ưu. Chúng tôi không chỉ tư vấn gián tiếp mà đồng hành trực tiếp tạo nên giá trị dài hạn.
              </p>
            </div>
          </div>
        </section>

        {/* 3. NỀN TẢNG PHÁT TRIỂN (SỨ MỆNH - TẦM NHÌN - GIÁ TRỊ CỐT LÕI) */}
        <section className="section" style={{ padding: "85px 0", background: "#05070f", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div style={{ textAlign: "left", maxWidth: 740, marginBottom: 44 }}>
              <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                NỀN TẢNG PHÁT TRIỂN
              </span>
              <h2 style={{ color: "#ffffff", fontSize: "36px", fontWeight: 800, margin: "0 0 12px", letterSpacing: "-0.02em" }}>
                Sứ mệnh, tầm nhìn và giá trị cốt lõi.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", margin: 0, lineHeight: 1.65 }}>
                Những định hướng nhất quán để Matrix Holding kiến tạo giá trị lâu dài cho doanh nghiệp và cộng đồng.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {/* Sứ mệnh */}
              <div style={{
                background: "rgba(18, 24, 38, 0.85)",
                backdropFilter: "blur(12px)",
                borderRadius: 22,
                padding: "36px 28px",
                border: "1px solid rgba(41, 151, 255, 0.25)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
              }} className="member-company-card">
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(41, 151, 255, 0.15)", color: "#2997ff", display: "grid", placeItems: "center", fontSize: 16 }}>
                    <i className="fa-solid fa-hand-holding-heart" />
                  </div>
                  <span style={{ color: "#38bdf8", fontSize: "12px", fontWeight: 800, letterSpacing: "0.08em" }}>
                    01 · SỨ MỆNH DOANH NGHIỆP
                  </span>
                </div>
                <h3 style={{ color: "#ffffff", fontSize: "17px", fontWeight: 800, margin: "0 0 14px", lineHeight: 1.4 }}>
                  Kiến tạo nền tảng để doanh nghiệp tiếp cận, mở ra cơ hội hợp tác và phát triển vượt trội.
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                  Matrix Holding mang trong mình sứ mệnh dẫn dắt, định hướng và đồng hành cùng thế hệ trẻ trên hành trình khởi nghiệp, giúp họ mở ra cơ hội để trở thành những kỳ lân trong tương lai.
                </p>
              </div>

              {/* Tầm nhìn */}
              <div style={{
                background: "rgba(18, 24, 38, 0.85)",
                backdropFilter: "blur(12px)",
                borderRadius: 22,
                padding: "36px 28px",
                border: "1px solid rgba(41, 151, 255, 0.25)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
              }} className="member-company-card">
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(245, 158, 11, 0.15)", color: "#f59e0b", display: "grid", placeItems: "center", fontSize: 16 }}>
                    <i className="fa-solid fa-compass" />
                  </div>
                  <span style={{ color: "#f59e0b", fontSize: "12px", fontWeight: 800, letterSpacing: "0.08em" }}>
                    02 · TẦM NHÌN CHIẾN LƯỢC
                  </span>
                </div>
                <h3 style={{ color: "#ffffff", fontSize: "17px", fontWeight: 800, margin: "0 0 14px", lineHeight: 1.4 }}>
                  Trở thành doanh nghiệp kiến tạo hệ sinh thái kinh doanh hàng đầu tại Việt Nam.
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                  Matrix Holding hướng đến việc xây dựng hệ sinh thái kinh doanh đa ngành có khả năng tạo ra giá trị thiết thực, nơi các ý tưởng kinh doanh được ươm mầm, nuôi dưỡng và phát triển.
                </p>
              </div>

              {/* Giá trị cốt lõi */}
              <div style={{
                background: "rgba(18, 24, 38, 0.85)",
                backdropFilter: "blur(12px)",
                borderRadius: 22,
                padding: "36px 28px",
                border: "1px solid rgba(41, 151, 255, 0.25)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
              }} className="member-company-card">
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(41, 151, 255, 0.15)", color: "#2997ff", display: "grid", placeItems: "center", fontSize: 16 }}>
                    <i className="fa-solid fa-lightbulb" />
                  </div>
                  <span style={{ color: "#38bdf8", fontSize: "12px", fontWeight: 800, letterSpacing: "0.08em" }}>
                    03 · GIÁ TRỊ CỐT LÕI
                  </span>
                </div>
                <h3 style={{ color: "#ffffff", fontSize: "17px", fontWeight: 800, margin: "0 0 14px", lineHeight: 1.4 }}>
                  Ươm mầm và hiện thực hóa ý tưởng kinh doanh tiềm năng cùng thế hệ doanh nhân trẻ khởi nghiệp.
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                  Matrix Holding tạo điều kiện để các ý tưởng kinh doanh được định hình, thử nghiệm và phát triển thành những mô hình thực tế thông qua hệ sinh thái kinh doanh đa ngành.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. MÔ HÌNH HOẠT ĐỘNG (3 Hệ Sinh Thái) */}
        <section className="section" style={{ padding: "85px 0", background: "#080c16", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div style={{ textAlign: "left", maxWidth: 740, marginBottom: 44 }}>
              <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                MÔ HÌNH HOẠT ĐỘNG
              </span>
              <h2 style={{ color: "#ffffff", fontSize: "36px", fontWeight: 800, margin: "0 0 12px", letterSpacing: "-0.02em" }}>
                Ba hệ sinh thái, một mạng lưới nguồn lực.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", margin: 0, lineHeight: 1.65 }}>
                Mỗi hệ sinh thái đảm nhận một vai trò chuyên biệt, nhưng cùng chung mục tiêu tạo ra giá trị lâu dài cho doanh nghiệp.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "stretch" }}>
              {/* Card 1: Matrix Network */}
              <div style={{
                background: "rgba(18, 24, 38, 0.85)",
                backdropFilter: "blur(12px)",
                borderRadius: 22,
                padding: "36px 30px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }} className="member-company-card">
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(41, 151, 255, 0.15)", color: "#2997ff", display: "grid", placeItems: "center", fontSize: 18 }}>
                      <i className="fa-solid fa-network-wired" />
                    </div>
                    <span style={{ color: "#2997ff", fontSize: "13px", fontWeight: 800 }}>01</span>
                  </div>

                  <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                    MATRIX NETWORK
                  </span>
                  <h3 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 800, margin: "0 0 14px", lineHeight: 1.35 }}>
                    Hệ sinh thái cung cấp giải pháp toàn diện
                  </h3>
                  <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                    Matrix Holding xây dựng Matrix Network theo mô hình hệ sinh thái khép kín, nơi các doanh nghiệp thành viên vừa là đối tác, vừa là khách hàng của nhau, cùng nhau chia sẻ nguồn lực, khai thác thế mạnh và phát triển.
                  </p>
                </div>
              </div>

              {/* Card 2: Matrix Connect (HIGHLIGHTED DARK NAVY GRADIENT) */}
              <div style={{
                background: "linear-gradient(145deg, #0f172a 0%, #1e3a8a 100%)",
                borderRadius: 22,
                padding: "36px 30px",
                color: "#ffffff",
                border: "1px solid #2997ff",
                boxShadow: "0 20px 50px rgba(41, 151, 255, 0.28)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transform: "translateY(-4px)"
              }} className="member-company-card">
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: "#38bdf8", color: "#000000", display: "grid", placeItems: "center", fontSize: 18, fontWeight: 900 }}>
                      <i className="fa-solid fa-users-gear" />
                    </div>
                    <span style={{ color: "#38bdf8", fontSize: "13px", fontWeight: 800 }}>02</span>
                  </div>

                  <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                    MATRIX CONNECT
                  </span>
                  <h3 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 800, margin: "0 0 14px", lineHeight: 1.35 }}>
                    Hệ sinh thái cộng đồng kết nối kinh doanh
                  </h3>
                  <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                    Matrix Holding xây dựng Matrix Connect theo mô hình cộng đồng kết nối kinh doanh, nơi doanh nghiệp có cơ hội mở rộng quan hệ hợp tác và tăng trưởng doanh thu bền vững.
                  </p>
                </div>
              </div>

              {/* Card 3: Matrix Ventures */}
              <div style={{
                background: "rgba(18, 24, 38, 0.85)",
                backdropFilter: "blur(12px)",
                borderRadius: 22,
                padding: "36px 30px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }} className="member-company-card">
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(41, 151, 255, 0.15)", color: "#2997ff", display: "grid", placeItems: "center", fontSize: 18 }}>
                      <i className="fa-solid fa-building-columns" />
                    </div>
                    <span style={{ color: "#2997ff", fontSize: "13px", fontWeight: 800 }}>03</span>
                  </div>

                  <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                    MATRIX VENTURES
                  </span>
                  <h3 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 800, margin: "0 0 14px", lineHeight: 1.35 }}>
                    Hệ sinh thái cộng đồng kết nối đầu tư
                  </h3>
                  <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                    Matrix Holding xây dựng Matrix Ventures theo mô hình cộng đồng kết nối đầu tư, nơi doanh nghiệp có cơ hội tiếp cận nguồn vốn đầu tư và nâng cao giá trị của doanh nghiệp.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. LỊCH SỬ HÌNH THÀNH (Timeline) */}
        <section className="section" style={{ padding: "85px 0", background: "#07162c", color: "#ffffff", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div style={{ textAlign: "left", maxWidth: 740, marginBottom: 44 }}>
              <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                LỊCH SỬ HÌNH THÀNH
              </span>
              <h2 style={{ color: "#ffffff", fontSize: "36px", fontWeight: 800, margin: "0 0 10px", letterSpacing: "-0.02em" }}>
                Hành trình của Matrix Holding
              </h2>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", margin: 0 }}>
                Chọn từng cột mốc để xem những dấu ấn quan trọng trong hành trình phát triển.
              </p>
            </div>

            {/* Horizontal Timeline Track */}
            <div style={{
              position: "relative",
              marginBottom: 50,
              padding: "0 20px"
            }}>
              <div style={{
                position: "absolute",
                top: 24,
                left: 60,
                right: 60,
                height: 2,
                background: "rgba(255,255,255,0.15)",
                zIndex: 1
              }} />

              <div style={{
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
                zIndex: 2
              }}>
                {TIMELINE_DATA.map((item) => {
                  const isActive = item.year === activeTimeline;
                  return (
                    <button
                      key={item.year}
                      type="button"
                      onClick={() => setActiveTimeline(item.year)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 10,
                        padding: 0
                      }}
                    >
                      <div style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: isActive ? "#38bdf8" : "#07162c",
                        border: isActive ? "3px solid #ffffff" : "2px solid rgba(255,255,255,0.3)",
                        color: isActive ? "#000000" : "#ffffff",
                        fontWeight: 800,
                        fontSize: "14px",
                        display: "grid",
                        placeItems: "center",
                        boxShadow: isActive ? "0 0 25px rgba(56,189,248,0.7)" : "none",
                        transition: "all 0.3s ease"
                      }}>
                        {item.year}
                      </div>

                      <span style={{
                        color: isActive ? "#38bdf8" : "rgba(255,255,255,0.6)",
                        fontSize: "12px",
                        fontWeight: isActive ? 700 : 500,
                        maxWidth: 110,
                        textAlign: "center",
                        lineHeight: 1.3
                      }}>
                        {item.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Milestone Card Box */}
            <div style={{
              maxWidth: 960,
              margin: "0 auto",
              background: "rgba(12,33,61,0.85)",
              border: "1px solid rgba(56,189,248,0.25)",
              borderRadius: 24,
              padding: "36px 40px",
              boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr",
              gap: 36,
              alignItems: "center"
            }} className="about-intro-grid">
              <div style={{ borderRadius: 18, overflow: "hidden", height: 260 }}>
                <img
                  src={selectedMilestone.img}
                  alt={selectedMilestone.tag}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>

              <div>
                <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                  CỘT MỐC - {selectedMilestone.year}
                </span>

                <h3 style={{ color: "#ffffff", fontSize: "28px", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.25 }}>
                  {selectedMilestone.tag}
                </h3>

                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", lineHeight: 1.75, margin: "0 0 24px" }}>
                  {selectedMilestone.desc}
                </p>

                <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  MATRIX HOLDING
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* 6. QUY TRÌNH LÀM VIỆC (3 Steps with Ghost Watermark Numbers) */}
        <section className="section" style={{ padding: "85px 0", background: "#05070f", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div style={{ textAlign: "left", maxWidth: 740, marginBottom: 44 }}>
              <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                QUY TRÌNH LÀM VIỆC
              </span>
              <h2 style={{ color: "#ffffff", fontSize: "36px", fontWeight: 800, margin: "0 0 12px", letterSpacing: "-0.02em" }}>
                Đồng hành theo một quy trình rõ ràng
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {/* Step 1 */}
              <div style={{
                background: "rgba(18, 24, 38, 0.85)",
                backdropFilter: "blur(12px)",
                borderRadius: 22,
                padding: "36px 28px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                position: "relative",
                overflow: "hidden"
              }} className="member-company-card">
                <span style={{
                  position: "absolute",
                  top: 10,
                  right: 18,
                  fontSize: "72px",
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.04)",
                  pointerEvents: "none",
                  userSelect: "none"
                }}>
                  01
                </span>
                <span style={{
                  display: "inline-block",
                  background: "rgba(41, 151, 255, 0.15)",
                  color: "#2997ff",
                  padding: "4px 12px",
                  borderRadius: 10,
                  fontSize: "12px",
                  fontWeight: 800,
                  marginBottom: 18
                }}>
                  01
                </span>
                <h3 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 800, margin: "0 0 12px" }}>Tiếp nhận nhu cầu</h3>
                <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                  Tiếp nhận thông tin dựa trên nhu cầu và nguồn lực thực tế của đối tác, khách hàng.
                </p>
              </div>

              {/* Step 2 */}
              <div style={{
                background: "rgba(18, 24, 38, 0.85)",
                backdropFilter: "blur(12px)",
                borderRadius: 22,
                padding: "36px 28px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                position: "relative",
                overflow: "hidden"
              }} className="member-company-card">
                <span style={{
                  position: "absolute",
                  top: 10,
                  right: 18,
                  fontSize: "72px",
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.04)",
                  pointerEvents: "none",
                  userSelect: "none"
                }}>
                  02
                </span>
                <span style={{
                  display: "inline-block",
                  background: "rgba(245, 158, 11, 0.15)",
                  color: "#f59e0b",
                  padding: "4px 12px",
                  borderRadius: 10,
                  fontSize: "12px",
                  fontWeight: 800,
                  marginBottom: 18
                }}>
                  02
                </span>
                <h3 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 800, margin: "0 0 12px" }}>Chuyển giao dự án</h3>
                <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                  Phân tích nhu cầu và nguồn lực, sau đó chuyển giao thông tin đến doanh nghiệp phụ trách trực tiếp.
                </p>
              </div>

              {/* Step 3 */}
              <div style={{
                background: "rgba(18, 24, 38, 0.85)",
                backdropFilter: "blur(12px)",
                borderRadius: 22,
                padding: "36px 28px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                position: "relative",
                overflow: "hidden"
              }} className="member-company-card">
                <span style={{
                  position: "absolute",
                  top: 10,
                  right: 18,
                  fontSize: "72px",
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.04)",
                  pointerEvents: "none",
                  userSelect: "none"
                }}>
                  03
                </span>
                <span style={{
                  display: "inline-block",
                  background: "rgba(41, 151, 255, 0.15)",
                  color: "#2997ff",
                  padding: "4px 12px",
                  borderRadius: 10,
                  fontSize: "12px",
                  fontWeight: 800,
                  marginBottom: 18
                }}>
                  03
                </span>
                <h3 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 800, margin: "0 0 12px" }}>Đánh giá kết quả</h3>
                <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                  Theo dõi, đánh giá hiệu quả sau quá trình thực thi và kết nối thêm nguồn lực cần thiết.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. ĐIỀU KHOẢN CAM KẾT (Tận tâm trong mọi mối quan hệ hợp tác) */}
        <section className="section" style={{ padding: "85px 0", background: "#07162c", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 44, gap: 24, flexWrap: "wrap" }}>
              <div>
                <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                  ĐIỀU KHOẢN CAM KẾT
                </span>
                <h2 style={{ color: "#ffffff", fontSize: "36px", fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>
                  Tận tâm trong mọi mối quan hệ hợp tác
                </h2>
              </div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", maxWidth: 460, margin: 0, lineHeight: 1.65 }}>
                Những nguyên tắc chúng tôi duy trì trong từng dự án. Matrix Holding cam kết đồng hành bằng năng lực thực thi, trách nhiệm và sự minh bạch.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {/* Card 1 */}
              <div style={{
                background: "rgba(15, 23, 42, 0.8)",
                borderRadius: 22,
                padding: "32px 26px",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
              }} className="member-company-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <span style={{ width: 34, height: 34, borderRadius: "50%", background: "#ffffff", color: "#0f172a", fontWeight: 800, fontSize: "13px", display: "grid", placeItems: "center" }}>
                    01
                  </span>
                  <i className="fa-solid fa-shield-halved" style={{ color: "#38bdf8", fontSize: 18 }} />
                </div>
                <h3 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 800, margin: "0 0 12px" }}>Đội ngũ chất lượng</h3>
                <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                  Matrix Holding cam kết các đội ngũ thực hiện dự án đều là những nhân viên giàu kinh nghiệm thực chiến, có chuyên môn cao cùng thái độ và tác phong làm việc chuyên nghiệp.
                </p>
              </div>

              {/* Card 2 */}
              <div style={{
                background: "rgba(15, 23, 42, 0.8)",
                borderRadius: 22,
                padding: "32px 26px",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
              }} className="member-company-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <span style={{ width: 34, height: 34, borderRadius: "50%", background: "#ffffff", color: "#0f172a", fontWeight: 800, fontSize: "13px", display: "grid", placeItems: "center" }}>
                    02
                  </span>
                  <i className="fa-solid fa-shield-halved" style={{ color: "#38bdf8", fontSize: 18 }} />
                </div>
                <h3 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 800, margin: "0 0 12px" }}>Đồng hành dài hạn</h3>
                <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                  Matrix Holding cam kết đồng hành cùng doanh nghiệp xuyên suốt quá trình thực thi dự án, không chỉ dừng lại ở việc cung cấp dịch vụ gián tiếp mà còn trực tiếp tạo ra kết quả cuối cùng.
                </p>
              </div>

              {/* Card 3 */}
              <div style={{
                background: "rgba(15, 23, 42, 0.8)",
                borderRadius: 22,
                padding: "32px 26px",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
              }} className="member-company-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <span style={{ width: 34, height: 34, borderRadius: "50%", background: "#ffffff", color: "#0f172a", fontWeight: 800, fontSize: "13px", display: "grid", placeItems: "center" }}>
                    03
                  </span>
                  <i className="fa-solid fa-shield-halved" style={{ color: "#38bdf8", fontSize: 18 }} />
                </div>
                <h3 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 800, margin: "0 0 12px" }}>Bảo mật thông tin</h3>
                <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                  Matrix Holding cam kết bảo mật toàn bộ các thông tin và dữ liệu kinh doanh của đối tác, khách hàng trong phạm vi hợp tác, chỉ sử dụng cho mục đích đã được thống nhất.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. LỢI THẾ MATRIX HOLDING (4 Cards Grid) */}
        <section className="section" style={{ padding: "85px 0", background: "#05070f", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 44, gap: 24, flexWrap: "wrap" }}>
              <div>
                <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                  LỢI THẾ MATRIX HOLDING
                </span>
                <h2 style={{ color: "#ffffff", fontSize: "36px", fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>
                  Những khác biệt tạo giá trị lâu dài
                </h2>
              </div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", maxWidth: 440, margin: 0, lineHeight: 1.65, borderLeft: "3px solid #f59e0b", paddingLeft: 14 }}>
                Hệ sinh thái được xây dựng để doanh nghiệp có thể đi nhanh hơn, vững hơn và tìm được đúng nguồn lực ở từng giai đoạn.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
              {/* Advantage 1 */}
              <div style={{
                background: "rgba(18, 24, 38, 0.85)",
                backdropFilter: "blur(12px)",
                borderRadius: 22,
                padding: "30px 22px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                position: "relative",
                overflow: "hidden"
              }} className="member-company-card">
                <span style={{ position: "absolute", top: 8, right: 14, fontSize: "64px", fontWeight: 900, color: "rgba(255,255,255,0.03)", pointerEvents: "none" }}>
                  01
                </span>
                <span style={{ color: "#2997ff", fontSize: "12px", fontWeight: 800, display: "block", marginBottom: 14 }}>01</span>
                <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 800, margin: "0 0 10px", lineHeight: 1.4 }}>Hệ sinh thái đa ngành</h3>
                <p style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "12px", lineHeight: 1.65, margin: 0 }}>
                  Matrix Holding cung cấp những giải pháp toàn diện được cá nhân hóa theo từng nhu cầu, nguồn lực và giai đoạn tăng trưởng, giúp doanh nghiệp tối ưu hiệu quả kinh doanh.
                </p>
              </div>

              {/* Advantage 2 (HIGHLIGHTED BORDER) */}
              <div style={{
                background: "rgba(18, 24, 38, 0.95)",
                backdropFilter: "blur(12px)",
                borderRadius: 22,
                padding: "30px 22px",
                border: "1px solid #f59e0b",
                boxShadow: "0 10px 30px rgba(245, 158, 11, 0.15)",
                position: "relative",
                overflow: "hidden"
              }} className="member-company-card">
                <span style={{ position: "absolute", top: 8, right: 14, fontSize: "64px", fontWeight: 900, color: "rgba(245, 158, 11, 0.06)", pointerEvents: "none" }}>
                  02
                </span>
                <span style={{ color: "#f59e0b", fontSize: "12px", fontWeight: 800, display: "block", marginBottom: 14 }}>02</span>
                <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 800, margin: "0 0 10px", lineHeight: 1.4 }}>Dịch vụ toàn diện</h3>
                <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "12px", lineHeight: 1.65, margin: 0 }}>
                  Matrix Holding cung cấp cho doanh nghiệp nhiều nguồn lực cần thiết trong cùng một hệ sinh thái, giúp tiết kiệm thời gian, công sức và chi phí vận hành.
                </p>
              </div>

              {/* Advantage 3 */}
              <div style={{
                background: "rgba(18, 24, 38, 0.85)",
                backdropFilter: "blur(12px)",
                borderRadius: 22,
                padding: "30px 22px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                position: "relative",
                overflow: "hidden"
              }} className="member-company-card">
                <span style={{ position: "absolute", top: 8, right: 14, fontSize: "64px", fontWeight: 900, color: "rgba(255,255,255,0.03)", pointerEvents: "none" }}>
                  03
                </span>
                <span style={{ color: "#2997ff", fontSize: "12px", fontWeight: 800, display: "block", marginBottom: 14 }}>03</span>
                <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 800, margin: "0 0 10px", lineHeight: 1.4 }}>Cơ hội hợp tác tiềm năng</h3>
                <p style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "12px", lineHeight: 1.65, margin: 0 }}>
                  Matrix Holding giúp doanh nghiệp kết nối với các đối tác, khách hàng và nhà đầu tư tiềm năng, mở rộng thị trường và nâng cao giá trị doanh nghiệp.
                </p>
              </div>

              {/* Advantage 4 */}
              <div style={{
                background: "rgba(18, 24, 38, 0.85)",
                backdropFilter: "blur(12px)",
                borderRadius: 22,
                padding: "30px 22px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                position: "relative",
                overflow: "hidden"
              }} className="member-company-card">
                <span style={{ position: "absolute", top: 8, right: 14, fontSize: "64px", fontWeight: 900, color: "rgba(255,255,255,0.03)", pointerEvents: "none" }}>
                  04
                </span>
                <span style={{ color: "#2997ff", fontSize: "12px", fontWeight: 800, display: "block", marginBottom: 14 }}>04</span>
                <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 800, margin: "0 0 10px", lineHeight: 1.4 }}>Cơ chế hợp tác linh hoạt</h3>
                <p style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "12px", lineHeight: 1.65, margin: 0 }}>
                  Matrix Holding thiết kế nhiều dự án, mô hình và cơ chế hợp tác linh hoạt, giúp doanh nghiệp lựa chọn phương án phù hợp với mục tiêu nhất.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. BAN LÃNH ĐẠO TẬP ĐOÀN */}
        <section className="section" style={{ padding: "85px 0", background: "#080c16", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 48px" }}>
              <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                ĐỘI NGŨ ĐIỀU HÀNH
              </span>
              <h2 style={{ color: "#ffffff", fontSize: "32px", fontWeight: 800, margin: "8px 0 0" }}>
                Ban Lãnh Đạo Tập Đoàn
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.name}
                  style={{
                    background: "rgba(18, 24, 38, 0.85)",
                    borderRadius: 20,
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                  }}
                  className="member-company-card"
                >
                  <div style={{ height: 270, overflow: "hidden" }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: member.imagePosition || "center"
                      }}
                    />
                  </div>
                  <div style={{ padding: "24px 22px" }}>
                    <h3 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 800, margin: "0 0 4px" }}>{member.name}</h3>
                    <strong style={{ color: "#38bdf8", fontSize: "12px", display: "block", marginBottom: 12 }}>{member.role}</strong>
                    <p style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. ĐỐI TÁC CHIẾN LƯỢC (Continuous Marquee) */}
        <section className="section" style={{ padding: "75px 0", background: "#05070f" }}>
          <div className="container">
            <div style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 20,
              gap: 24,
              flexWrap: "wrap"
            }}>
              <div>
                <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                  ĐỐI TÁC
                </span>
                <h2 style={{ color: "#ffffff", fontSize: "32px", fontWeight: 800, margin: 0 }}>
                  Đồng hành cùng Matrix Holding
                </h2>
              </div>

              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", maxWidth: 440, margin: 0, lineHeight: 1.6 }}>
                Sự tin tưởng của các thương hiệu là động lực để chúng tôi tiếp tục kiến tạo những giá trị kinh doanh bền vững.
              </p>
            </div>

            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 28 }}>
              TỰ ĐỘNG TRƯỢT · RÊ CHUỘT ĐỂ DỪNG VÀ KÉO XEM THÊM
            </div>

            <PartnerMarquee />

            {/* Bottom CTA Card */}
            <div style={{
              marginTop: 64,
              background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
              borderRadius: 24,
              padding: "42px 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
              color: "#ffffff",
              border: "1px solid rgba(41, 151, 255, 0.3)",
              boxShadow: "0 20px 45px rgba(0,0,0,0.6)"
            }}>
              <div>
                <h3 style={{ color: "#ffffff", fontSize: "24px", fontWeight: 800, margin: "0 0 8px" }}>
                  Bạn muốn hợp tác cùng hệ sinh thái Matrix Holding?
                </h3>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", margin: 0 }}>
                  Liên hệ với chúng tôi để mở ra những cơ hội phát triển vượt trội.
                </p>
              </div>

              <Link
                to="/contact"
                style={{
                  background: "#ffffff",
                  color: "#000000",
                  fontWeight: 800,
                  fontSize: "13px",
                  padding: "16px 36px",
                  borderRadius: "50px",
                  textDecoration: "none",
                  boxShadow: "0 0 30px rgba(255,255,255,0.3)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10
                }}
              >
                Liên hệ hợp tác <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

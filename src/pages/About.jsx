import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { TEAM_MEMBERS } from "../data/team.js";
import PageBanner from "../components/PageBanner.jsx";

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
  {
    name: "Techcombank",
    category: "Tài chính - Ngân hàng",
    logo: "🏛️",
    img: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Heros Group",
    category: "Bảo mật & Công nghệ",
    logo: "🛡️",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Samie Studio",
    category: "Truyền thông & Sáng tạo",
    logo: "✨",
    img: "https://images.unsplash.com/photo-1542744094-3a31727202b0?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Infinity Capital",
    category: "Quỹ đầu tư",
    logo: "♾️",
    img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Trống Đồng Palace",
    category: "Trung tâm Sự kiện",
    logo: "👑",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Matrix Capital",
    category: "Quản lý tài sản",
    logo: "💎",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Vua Nệm",
    category: "Chuỗi bán lẻ",
    logo: "🛏️",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Dream Pool Fitness",
    category: "Sức khỏe & Lifestyle",
    logo: "🏊",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&q=80"
  }
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
              padding: "16px 14px",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              overflow: "hidden"
            }}
            className="partner-logo-card member-company-card"
          >
            {p.img && (
              <div style={{ width: "100%", height: 80, borderRadius: 12, overflow: "hidden", marginBottom: 12 }}>
                <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            )}
            <div style={{ fontSize: "22px", marginBottom: 4 }}>{p.logo}</div>
            <strong style={{ color: "#ffffff", fontSize: "14px", display: "block", marginBottom: 2 }}>{p.name}</strong>
            <span style={{ color: "#38bdf8", fontSize: "11px" }}>{p.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BrandPositioning3D() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({ x: glareX, y: glareY, opacity: 0.35 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <section className="section" style={{ padding: "85px 0", background: "#05070f", position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      {/* Ambient 3D Neon Background Glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "650px",
        height: "380px",
        background: "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.18) 0%, rgba(29, 78, 216, 0.08) 50%, transparent 75%)",
        filter: "blur(60px)",
        pointerEvents: "none"
      }} />

      <div className="container" style={{ perspective: "1200px" }}>
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            maxWidth: 1020,
            margin: "0 auto",
            background: "linear-gradient(145deg, rgba(15, 23, 42, 0.92) 0%, rgba(8, 12, 22, 0.96) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: 30,
            padding: "54px 50px",
            border: "1px solid rgba(56, 189, 248, 0.35)",
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.75), 0 0 50px rgba(56, 189, 248, 0.2)",
            textAlign: "center",
            position: "relative",
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            transition: rotate.x === 0 ? "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)" : "none",
            transformStyle: "preserve-3d"
          }}
          className="member-company-card"
        >
          {/* Dynamic 3D Glare Lighting Effect */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 30,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, ${glare.opacity}) 0%, transparent 60%)`,
            pointerEvents: "none",
            transition: "opacity 0.3s ease"
          }} />

          {/* Top Eyebrow Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(56, 189, 248, 0.12)",
            border: "1px solid rgba(56, 189, 248, 0.35)",
            padding: "8px 22px",
            borderRadius: "30px",
            marginBottom: 24,
            boxShadow: "0 0 20px rgba(56, 189, 248, 0.2)",
            transform: "translateZ(30px)"
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#38bdf8", boxShadow: "0 0 10px #38bdf8" }} />
            <span style={{ color: "#38bdf8", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              ĐỊNH VỊ THƯƠNG HIỆU
            </span>
          </div>

          {/* 3D Main Title Quote */}
          <h2 style={{
            color: "#ffffff",
            fontSize: "clamp(24px, 3.2vw, 38px)",
            fontWeight: 900,
            lineHeight: 1.4,
            margin: "0 0 24px",
            letterSpacing: "-0.02em",
            transform: "translateZ(45px)",
            background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 70%, #38bdf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            “Là thương hiệu trong lĩnh vực tư vấn,
             phát triển hệ sinh thái kinh doanh đa ngành.”
          </h2>

          {/* Description Paragraph (Justified & Balanced) */}
          <p style={{
            color: "rgba(255, 255, 255, 0.85)",
            fontSize: "15.5px",
            lineHeight: 1.8,
            margin: "0 auto",
            maxWidth: 880,
            textAlign: "justify",
            transform: "translateZ(25px)"
          }}>
            Matrix Holding định vị bản thân là đơn vị kiến tạo và phát triển hệ sinh thái kinh doanh trong nhiều lĩnh vực khác nhau thông qua các dự án, mô hình kinh doanh hiệu quả và tối ưu. Chúng tôi không chỉ tư vấn gián tiếp mà đồng hành trực tiếp tạo nên giá trị dài hạn.
          </p>

          {/* Bottom 3D Accent Line */}
          <div style={{
            marginTop: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            transform: "translateZ(20px)"
          }}>
            <span style={{ width: 60, height: 1, background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.5))" }} />
            <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em" }}>MATRIX HOLDING</span>
            <span style={{ width: 60, height: 1, background: "linear-gradient(90deg, rgba(56,189,248,0.5), transparent)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState("2016");
  const selectedMilestone = TIMELINE_DATA.find(item => item.year === activeTimeline) || TIMELINE_DATA[0];

  return (
    <>
      <PageMeta
        title="Giới thiệu Tập Đoàn | Matrix Holding"
        description="Giới thiệu chính thức về Matrix Holding: Câu chuyện thương hiệu, đối tác, định vị, sứ mệnh, tầm nhìn, giá trị cốt lõi, ban lãnh đạo, mô hình hoạt động, lịch sử, quy trình, cam kết, lợi thế và tuyên ngôn chủ tịch."
      />
      <Header />

      <main style={{ background: "#05070f", color: "#ffffff", fontFamily: "'Be Vietnam Pro', sans-serif", paddingBottom: 60, overflow: "hidden" }}>
        {/* HERO BANNER */}
        <PageBanner
          eyebrow="MATRIX HOLDING"
          titlePrefix="Giới thiệu"
          titleHighlight="Matrix Holding"
          subtitle="Hành trình kiến tạo hệ sinh thái, kết nối nguồn lực và phát triển giá trị bền vững."
        />

        {/* 1. CÂU CHUYỆN THƯƠNG HIỆU */}
        <section className="section" style={{ padding: "80px 0", background: "#05070f", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div style={{ maxWidth: 960, margin: "0 auto", background: "rgba(18, 24, 38, 0.75)", border: "1px solid rgba(56,189,248,0.25)", borderRadius: 24, padding: "44px 40px", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
              <div style={{ textAlign: "center", marginBottom: 24 }}>
                <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                  ⚡ CÂU CHUYỆN THƯƠNG HIỆU
                </span>
                <h2 style={{ color: "#ffffff", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 900, margin: 0, lineHeight: 1.3 }}>
                  Khát vọng kiến tạo bệ phóng vững chắc cho doanh nghiệp Việt
                </h2>
              </div>
              <p style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "15px", lineHeight: 1.8, margin: "0 0 18px", textAlign: "justify" }}>
                Matrix Holding được thành lập với mục tiêu trở thành cầu nối vững chắc giúp các doanh nghiệp Việt Nam tối ưu hóa nguồn lực, nâng cao năng lực cạnh tranh và mở rộng quy mô kinh doanh. Xuất phát điểm từ những dự án phát triển truyền thông và giải pháp thương hiệu, chúng tôi nhận ra rằng sự phát triển bền vững không thể tách rời một hệ sinh thái khép kín, nơi các đơn vị thành viên bổ trợ lẫn nhau.
              </p>
              <p style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "15px", lineHeight: 1.8, margin: 0, textAlign: "justify" }}>
                Hành trình của Matrix Holding là chặng đường không ngừng chuẩn hóa nền tảng pháp lý, hội tụ chuyên gia và xây dựng các trụ cột cốt lõi: Matrix Network, Matrix Connect, Matrix Ventures và Matrix Academy. Chúng tôi tin rằng mỗi ý tưởng tiềm năng khi được đặt đúng môi trường và kết nối đúng nguồn lực sẽ bứt phá mạnh mẽ để tạo nên những giá trị lâu dài cho xã hội.
              </p>
            </div>
          </div>
        </section>

        {/* 2. ĐỐI TÁC CHIẾN LƯỢC */}
        <section className="section" style={{ padding: "75px 0", background: "#080c16", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto 28px" }}>
              <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                ⚡ ĐỐI TÁC CHIẾN LƯỢC
              </span>
              <h2 style={{ color: "#ffffff", fontSize: "32px", fontWeight: 900, margin: "0 0 10px" }}>
                Đồng hành cùng Matrix Holding
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13.5px", maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
                Sự tin tưởng của các thương hiệu hàng đầu là động lực để chúng tôi tiếp tục kiến tạo những giá trị kinh doanh bền vững.
              </p>
            </div>

            <div style={{ textAlign: "center", color: "rgba(255,255,255,0.45)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>
              TỰ ĐỘNG TRƯỢT · RÊ CHUỘT ĐỂ DỪNG VÀ KÉO XEM THÊM
            </div>

            <PartnerMarquee />
          </div>
        </section>

        {/* 3. ĐỊNH VỊ THƯƠNG HIỆU */}
        <BrandPositioning3D />

        {/* 4, 5, 6. SỨ MỆNH DOANH NGHIỆP - TẦM NHÌN CHIẾN LƯỢC - GIÁ TRỊ CỐT LÕI */}
        <section className="section" style={{ padding: "80px 0", background: "#080c16", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto 48px" }}>
              <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                NỀN TẢNG PHÁT TRIỂN
              </span>
              <h2 style={{ color: "#ffffff", fontSize: "32px", fontWeight: 900, margin: "0 0 12px" }}>
                Sứ mệnh, tầm nhìn và giá trị cốt lõi.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", margin: 0, lineHeight: 1.65 }}>
                Những định hướng nhất quán để Matrix Holding kiến tạo giá trị lâu dài cho doanh nghiệp và cộng đồng.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {/* 4. SỨ MỆNH DOANH NGHIỆP */}
              <div style={{ background: "rgba(18, 24, 38, 0.85)", borderRadius: 20, padding: "30px 24px", border: "1px solid rgba(245, 158, 11, 0.45)" }} className="member-company-card">
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(245, 158, 11, 0.15)", color: "#f59e0b", display: "grid", placeItems: "center", fontSize: 15 }}><i className="fa-solid fa-hand-holding-heart" /></div>
                  <span style={{ color: "#38bdf8", fontSize: "11.5px", fontWeight: 800 }}>⚡ SỨ MỆNH DOANH NGHIỆP</span>
                </div>
                <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 800, margin: "0 0 12px", lineHeight: 1.4 }}>Kiến tạo nền tảng để doanh nghiệp tiếp cận, mở ra cơ hội hợp tác và phát triển vượt trội.</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", lineHeight: 1.7, margin: 0, textAlign: "justify" }}>Matrix Holding mang trong mình sứ mệnh dẫn dắt, định hướng và đồng hành cùng thế hệ trẻ trên hành trình khởi nghiệp, giúp họ mở ra cơ hội để trở thành những kỳ lân trong tương lai.</p>
              </div>

              {/* 5. TẦM NHÌN CHIẾN LƯỢC */}
              <div style={{ background: "rgba(18, 24, 38, 0.85)", borderRadius: 20, padding: "30px 24px", border: "1px solid rgba(245, 158, 11, 0.45)" }} className="member-company-card">
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(245, 158, 11, 0.15)", color: "#f59e0b", display: "grid", placeItems: "center", fontSize: 15 }}><i className="fa-solid fa-compass" /></div>
                  <span style={{ color: "#f59e0b", fontSize: "11.5px", fontWeight: 800 }}>⚡ TẦM NHÌN CHIẾN LƯỢC</span>
                </div>
                <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 800, margin: "0 0 12px", lineHeight: 1.4 }}>Trở thành doanh nghiệp kiến tạo hệ sinh thái kinh doanh hàng đầu tại Việt Nam.</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", lineHeight: 1.7, margin: 0, textAlign: "justify" }}>Matrix Holding hướng đến việc xây dựng hệ sinh thái kinh doanh đa ngành có khả năng tạo ra giá trị thiết thực, nơi các ý tưởng kinh doanh được ươm mầm, nuôi dưỡng và phát triển.</p>
              </div>

              {/* 6. GIÁ TRỊ CỐT LÕI */}
              <div style={{ background: "rgba(18, 24, 38, 0.85)", borderRadius: 20, padding: "30px 24px", border: "1px solid rgba(245, 158, 11, 0.45)" }} className="member-company-card">
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(245, 158, 11, 0.15)", color: "#f59e0b", display: "grid", placeItems: "center", fontSize: 15 }}><i className="fa-solid fa-lightbulb" /></div>
                  <span style={{ color: "#38bdf8", fontSize: "11.5px", fontWeight: 800 }}>⚡ GIÁ TRỊ CỐT LÕI</span>
                </div>
                <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 800, margin: "0 0 12px", lineHeight: 1.4 }}>Ươm mầm và hiện thực hóa ý tưởng kinh doanh tiềm năng cùng thế hệ doanh nhân trẻ.</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", lineHeight: 1.7, margin: 0, textAlign: "justify" }}>Matrix Holding tạo điều kiện để các ý tưởng kinh doanh được định hình, thử nghiệm và phát triển thành những mô hình thực tế thông qua hệ sinh thái kinh doanh đa ngành.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. BAN LÃNH ĐẠO */}
        <section className="section" style={{ padding: "80px 0", background: "#05070f", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto 48px" }}>
              <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                ⚡ BAN LÃNH ĐẠO
              </span>
              <h2 style={{ color: "#ffffff", fontSize: "32px", fontWeight: 900, margin: "0 0 12px" }}>
                Đội Ngũ Điều Hành Tập Đoàn
              </h2>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "14px", margin: "0 auto", lineHeight: 1.65 }}>
                Đội ngũ lãnh đạo chiến lược, giàu kinh nghiệm thực chiến của Matrix Holding.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {TEAM_MEMBERS.map((member) => (
                <div key={member.name} style={{ background: "rgba(18, 24, 38, 0.75)", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.08)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }} className="member-company-card">
                  <div style={{ height: 260, overflow: "hidden" }}>
                    <img src={member.image} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: member.imagePosition || "center" }} />
                  </div>
                  <div style={{ padding: "20px 20px" }}>
                    <h3 style={{ color: "#ffffff", fontSize: "17px", fontWeight: 800, margin: "0 0 4px" }}>{member.name}</h3>
                    <strong style={{ color: "#38bdf8", fontSize: "12px", display: "block", marginBottom: 10 }}>{member.role}</strong>
                    <p style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "12.5px", lineHeight: 1.6, margin: 0, textAlign: "justify" }}>{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. MÔ HÌNH HOẠT ĐỘNG (04 HỆ SINH THÁI THÀNH VIÊN) */}
        <section className="section" style={{ padding: "80px 0", background: "#080c16", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 48px" }}>
              <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                ⚡ MÔ HÌNH HOẠT ĐỘNG
              </span>
              <h2 style={{ color: "#ffffff", fontSize: "32px", fontWeight: 900, margin: "0 0 12px" }}>
                04 Hệ sinh thái, mạng lưới nguồn lực.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "14px", margin: "0 auto 20px", maxWidth: 640, lineHeight: 1.65, textAlign: "justify" }}>
                Mỗi hệ sinh thái đảm nhận một vai trò chuyên biệt, nhưng cùng chung mục tiêu tạo ra giá trị lâu dài cho doanh nghiệp.
              </p>
              <Link
                to="/sectors"
                style={{
                  background: "rgba(56, 189, 248, 0.12)",
                  border: "1px solid rgba(56, 189, 248, 0.35)",
                  color: "#38bdf8",
                  padding: "8px 22px",
                  borderRadius: "50px",
                  fontSize: "12.5px",
                  fontWeight: 800,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8
                }}
                className="overview-pill-link"
              >
                <span>Xem tổng quan</span>
                <i className="fa-solid fa-chevron-right" style={{ fontSize: 11 }} />
              </Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="four-ecosystem-cards-grid">
              <Link to="/ecosystem/network" className="vertical-image-card" style={{ position: "relative", height: 380, borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "22px", textDecoration: "none", border: "1px solid rgba(255, 255, 255, 0.14)" }}>
                <div className="card-bg-img" style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85')", backgroundSize: "cover", backgroundPosition: "center", transition: "transform 0.5s ease" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,7,15,0.15) 0%, rgba(5,7,15,0.65) 45%, rgba(5,7,15,0.96) 100%)" }} />
                <div style={{ position: "relative", zIndex: 2 }}>
                  <span style={{ background: "rgba(5, 7, 15, 0.75)", color: "#38bdf8", fontSize: "11px", fontWeight: 800, padding: "4px 12px", borderRadius: 30, border: "1px solid rgba(56, 189, 248, 0.3)", display: "inline-block" }}>01</span>
                </div>
                <div style={{ position: "relative", zIndex: 2 }}>
                  <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>MATRIX NETWORK</span>
                  <h3 style={{ color: "#ffffff", fontSize: "19px", fontWeight: 900, margin: "0 0 8px" }}>Hệ sinh thái dịch vụ toàn diện</h3>
                  <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "12px", lineHeight: 1.5, margin: "0 0 12px", textAlign: "justify" }}>Mô hình hệ sinh thái khép kín, doanh nghiệp thành viên chia sẻ nguồn lực và khai thác thế mạnh.</p>
                  <div style={{ color: "#38bdf8", fontSize: "12px", fontWeight: 800, display: "inline-flex", alignItems: "center", gap: 6 }}><span>Khám phá ngay</span><i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} /></div>
                </div>
              </Link>

              <Link to="/ecosystem/connect" className="vertical-image-card" style={{ position: "relative", height: 380, borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "22px", textDecoration: "none", border: "1px solid rgba(56, 189, 248, 0.4)" }}>
                <div className="card-bg-img" style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=85')", backgroundSize: "cover", backgroundPosition: "center", transition: "transform 0.5s ease" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,7,15,0.15) 0%, rgba(5,7,15,0.65) 45%, rgba(5,7,15,0.96) 100%)" }} />
                <div style={{ position: "relative", zIndex: 2 }}>
                  <span style={{ background: "rgba(56, 189, 248, 0.85)", color: "#000000", fontSize: "11px", fontWeight: 900, padding: "4px 12px", borderRadius: 30, display: "inline-block" }}>02</span>
                </div>
                <div style={{ position: "relative", zIndex: 2 }}>
                  <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>MATRIX CONNECT</span>
                  <h3 style={{ color: "#ffffff", fontSize: "19px", fontWeight: 900, margin: "0 0 8px" }}>Hệ sinh thái kết nối kinh doanh</h3>
                  <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "12px", lineHeight: 1.5, margin: "0 0 12px", textAlign: "justify" }}>Cộng đồng kết nối kinh doanh, mở rộng quan hệ hợp tác và tăng trưởng doanh thu bền vững.</p>
                  <div style={{ color: "#38bdf8", fontSize: "12px", fontWeight: 800, display: "inline-flex", alignItems: "center", gap: 6 }}><span>Khám phá ngay</span><i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} /></div>
                </div>
              </Link>

              <Link to="/ecosystem/ventures" className="vertical-image-card" style={{ position: "relative", height: 380, borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "22px", textDecoration: "none", border: "1px solid rgba(255, 255, 255, 0.14)" }}>
                <div className="card-bg-img" style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85')", backgroundSize: "cover", backgroundPosition: "center", transition: "transform 0.5s ease" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,7,15,0.15) 0%, rgba(5,7,15,0.65) 45%, rgba(5,7,15,0.96) 100%)" }} />
                <div style={{ position: "relative", zIndex: 2 }}>
                  <span style={{ background: "rgba(5, 7, 15, 0.75)", color: "#38bdf8", fontSize: "11px", fontWeight: 800, padding: "4px 12px", borderRadius: 30, border: "1px solid rgba(56, 189, 248, 0.3)", display: "inline-block" }}>03</span>
                </div>
                <div style={{ position: "relative", zIndex: 2 }}>
                  <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>MATRIX VENTURES</span>
                  <h3 style={{ color: "#ffffff", fontSize: "19px", fontWeight: 900, margin: "0 0 8px" }}>Hệ sinh thái kết nối đầu tư</h3>
                  <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "12px", lineHeight: 1.5, margin: "0 0 12px", textAlign: "justify" }}>Cộng đồng kết nối đầu tư, tiếp cận nguồn vốn đầu tư và nâng cao giá trị doanh nghiệp.</p>
                  <div style={{ color: "#38bdf8", fontSize: "12px", fontWeight: 800, display: "inline-flex", alignItems: "center", gap: 6 }}><span>Khám phá ngay</span><i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} /></div>
                </div>
              </Link>

              <Link to="/ecosystem/academy" className="vertical-image-card" style={{ position: "relative", height: 380, borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "22px", textDecoration: "none", border: "1px solid rgba(255, 255, 255, 0.14)" }}>
                <div className="card-bg-img" style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85')", backgroundSize: "cover", backgroundPosition: "center", transition: "transform 0.5s ease" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,7,15,0.15) 0%, rgba(5,7,15,0.65) 45%, rgba(5,7,15,0.96) 100%)" }} />
                <div style={{ position: "relative", zIndex: 2 }}>
                  <span style={{ background: "rgba(5, 7, 15, 0.75)", color: "#38bdf8", fontSize: "11px", fontWeight: 800, padding: "4px 12px", borderRadius: 30, border: "1px solid rgba(56, 189, 248, 0.3)", display: "inline-block" }}>04</span>
                </div>
                <div style={{ position: "relative", zIndex: 2 }}>
                  <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>MATRIX ACADEMY</span>
                  <h3 style={{ color: "#ffffff", fontSize: "19px", fontWeight: 900, margin: "0 0 8px" }}>Hệ sinh thái đào tạo tinh hoa</h3>
                  <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "12px", lineHeight: 1.5, margin: "0 0 12px", textAlign: "justify" }}>Nền tảng đào tạo nguồn nhân lực chất lượng cao, chia sẻ tri thức quản trị và ươm mầm tài năng.</p>
                  <div style={{ color: "#38bdf8", fontSize: "12px", fontWeight: 800, display: "inline-flex", alignItems: "center", gap: 6 }}><span>Khám phá ngay</span><i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} /></div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 9. LỊCH SỬ HÌNH THÀNH */}
        <section className="section" style={{ padding: "80px 0", background: "#05070f", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto 48px" }}>
              <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                ⚡ LỊCH SỬ HÌNH THÀNH
              </span>
              <h2 style={{ color: "#ffffff", fontSize: "32px", fontWeight: 900, margin: "0 0 10px" }}>
                Hành trình của Matrix Holding
              </h2>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", margin: 0 }}>
                Chọn từng cột mốc để xem những dấu ấn quan trọng trong hành trình phát triển.
              </p>
            </div>

            {/* Horizontal Timeline Track */}
            <div style={{ position: "relative", marginBottom: 44, padding: "0 20px" }}>
              <div style={{ position: "absolute", top: 24, left: 60, right: 60, height: 2, background: "rgba(255,255,255,0.15)", zIndex: 1 }} />
              <div style={{ display: "flex", justifyContent: "space-between", position: "relative", zIndex: 2 }}>
                {TIMELINE_DATA.map((item) => {
                  const isActive = item.year === activeTimeline;
                  return (
                    <button
                      key={item.year}
                      type="button"
                      onClick={() => setActiveTimeline(item.year)}
                      style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: 0 }}
                    >
                      <div style={{ width: 48, height: 48, borderRadius: "50%", background: isActive ? "#38bdf8" : "#07162c", border: isActive ? "3px solid #ffffff" : "2px solid rgba(255,255,255,0.3)", color: isActive ? "#000000" : "#ffffff", fontWeight: 800, fontSize: "14px", display: "grid", placeItems: "center", boxShadow: isActive ? "0 0 25px rgba(56,189,248,0.7)" : "none", transition: "all 0.3s ease" }}>
                        {item.year}
                      </div>
                      <span style={{ color: isActive ? "#38bdf8" : "rgba(255,255,255,0.6)", fontSize: "12px", fontWeight: isActive ? 700 : 500, maxWidth: 110, textAlign: "center", lineHeight: 1.3 }}>
                        {item.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Milestone Card Box */}
            <div style={{ maxWidth: 940, margin: "0 auto", background: "rgba(18, 24, 38, 0.75)", border: "1px solid rgba(56,189,248,0.25)", borderRadius: 20, padding: "30px 34px", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 32, alignItems: "center" }} className="about-intro-grid">
              <div style={{ borderRadius: 16, overflow: "hidden", height: 240 }}>
                <img src={selectedMilestone.img} alt={selectedMilestone.tag} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div>
                <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                  CỘT MỐC - {selectedMilestone.year}
                </span>
                <h3 style={{ color: "#ffffff", fontSize: "25px", fontWeight: 800, margin: "0 0 14px", lineHeight: 1.3 }}>
                  {selectedMilestone.tag}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", lineHeight: 1.7, margin: "0 0 20px", textAlign: "justify" }}>
                  {selectedMilestone.desc}
                </p>
                <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  MATRIX HOLDING
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 10. QUY TRÌNH LÀM VIỆC - HORIZONTAL STEP PIPELINE */}
        <section className="section" style={{ padding: "85px 0", background: "linear-gradient(180deg, #05070f 0%, #080c16 100%)", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
          {/* Ambient Glow */}
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "500px", height: "300px", background: "radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto 54px" }}>
              <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.3)", padding: "6px 16px", borderRadius: 30, marginBottom: 12 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#38bdf8", boxShadow: "0 0 8px #38bdf8" }} />
                QUY TRÌNH LÀM VIỆC
              </span>
              <h2 style={{ color: "#ffffff", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 900, margin: "0 0 12px" }}>
                Đồng hành theo một quy trình rõ ràng
              </h2>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "14px", margin: "0 auto", lineHeight: 1.65 }}>
                Các bước triển khai chặt chẽ, tối ưu hiệu quả và đảm bảo tiến độ cho từng dự án hợp tác.
              </p>
            </div>

            {/* Stepper Pipeline Container */}
            <div style={{ position: "relative", maxWidth: 1040, margin: "0 auto" }}>
              {/* Connecting Line */}
              <div style={{ position: "absolute", top: 38, left: "12%", right: "12%", height: 3, background: "linear-gradient(90deg, #38bdf8 0%, #3b82f6 50%, #8b5cf6 100%)", zIndex: 1, boxShadow: "0 0 12px rgba(56,189,248,0.5)" }} />

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, position: "relative", zIndex: 2 }}>
                {/* Step 1 */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 76, height: 76, borderRadius: "50%", background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", border: "3px solid #38bdf8", color: "#38bdf8", fontSize: "24px", fontWeight: 900, display: "grid", placeItems: "center", boxShadow: "0 0 25px rgba(56,189,248,0.4)", marginBottom: 24, transition: "transform 0.3s ease" }}>
                    <i className="fa-solid fa-clipboard-list" style={{ fontSize: 26 }} />
                  </div>
                  <div style={{ width: "100%", background: "rgba(15, 23, 42, 0.85)", backdropFilter: "blur(12px)", borderRadius: 22, padding: "26px 22px", border: "1px solid rgba(56, 189, 248, 0.25)", boxShadow: "0 12px 35px rgba(0,0,0,0.5)", textAlign: "left" }} className="member-company-card">
                    <span style={{ background: "rgba(56,189,248,0.12)", color: "#38bdf8", fontSize: "11px", fontWeight: 800, padding: "3px 10px", borderRadius: 20, border: "1px solid rgba(56,189,248,0.3)", display: "inline-block", marginBottom: 12 }}>
                      BƯỚC 01
                    </span>
                    <h3 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 800, margin: "0 0 10px" }}>Tiếp nhận nhu cầu</h3>
                    <p style={{ color: "rgba(255, 255, 255, 0.72)", fontSize: "13px", lineHeight: 1.65, margin: 0, textAlign: "justify" }}>
                      Tiếp nhận thông tin dựa trên nhu cầu và nguồn lực thực tế của đối tác, khách hàng để phân tích chuyên sâu.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 76, height: 76, borderRadius: "50%", background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", border: "3px solid #f59e0b", color: "#f59e0b", fontSize: "24px", fontWeight: 900, display: "grid", placeItems: "center", boxShadow: "0 0 25px rgba(245, 158, 11, 0.4)", marginBottom: 24, transition: "transform 0.3s ease" }}>
                    <i className="fa-solid fa-share-nodes" style={{ fontSize: 26 }} />
                  </div>
                  <div style={{ width: "100%", background: "rgba(15, 23, 42, 0.85)", backdropFilter: "blur(12px)", borderRadius: 22, padding: "26px 22px", border: "1px solid rgba(245, 158, 11, 0.35)", boxShadow: "0 12px 35px rgba(0,0,0,0.5)" }} className="member-company-card">
                    <span style={{ background: "rgba(245, 158, 11, 0.12)", color: "#f59e0b", fontSize: "11px", fontWeight: 800, padding: "3px 10px", borderRadius: 20, border: "1px solid rgba(245, 158, 11, 0.3)", display: "inline-block", marginBottom: 12 }}>
                      BƯỚC 02
                    </span>
                    <h3 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 800, margin: "0 0 10px" }}>Chuyển giao dự án</h3>
                    <p style={{ color: "rgba(255, 255, 255, 0.72)", fontSize: "13px", lineHeight: 1.65, margin: 0, textAlign: "justify" }}>
                      Phân tích nhu cầu và nguồn lực, sau đó chuyển giao thông tin đến doanh nghiệp thành viên phụ trách trực tiếp.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 76, height: 76, borderRadius: "50%", background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", border: "3px solid #10b981", color: "#10b981", fontSize: "24px", fontWeight: 900, display: "grid", placeItems: "center", boxShadow: "0 0 25px rgba(16, 185, 129, 0.4)", marginBottom: 24, transition: "transform 0.3s ease" }}>
                    <i className="fa-solid fa-chart-line" style={{ fontSize: 26 }} />
                  </div>
                  <div style={{ width: "100%", background: "rgba(15, 23, 42, 0.85)", backdropFilter: "blur(12px)", borderRadius: 22, padding: "26px 22px", border: "1px solid rgba(16, 185, 129, 0.35)", boxShadow: "0 12px 35px rgba(0,0,0,0.5)" }} className="member-company-card">
                    <span style={{ background: "rgba(16, 185, 129, 0.12)", color: "#10b981", fontSize: "11px", fontWeight: 800, padding: "3px 10px", borderRadius: 20, border: "1px solid rgba(16, 185, 129, 0.3)", display: "inline-block", marginBottom: 12 }}>
                      BƯỚC 03
                    </span>
                    <h3 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 800, margin: "0 0 10px" }}>Đánh giá & Kết nối thêm</h3>
                    <p style={{ color: "rgba(255, 255, 255, 0.72)", fontSize: "13px", lineHeight: 1.65, margin: 0, textAlign: "justify" }}>
                      Theo dõi, đánh giá hiệu quả sau quá trình thực thi và chủ động kết nối thêm các nguồn lực cần thiết.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. ĐIỀU KHOẢN CAM KẾT - 3 VERTICAL TRUST PILLARS (HERO FEATURE CENTER) */}
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

        {/* 12. LỢI THẾ CẠNH TRANH - ASYMMETRICAL BENTO BOX GRID LAYOUT */}
        <section className="section" style={{ padding: "85px 0", background: "linear-gradient(180deg, #080c16 0%, #05070f 100%)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto 54px" }}>
              <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.3)", padding: "6px 16px", borderRadius: 30, marginBottom: 12 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#38bdf8", boxShadow: "0 0 8px #38bdf8" }} />
                LỢI THẾ CẠNH TRANH
              </span>
              <h2 style={{ color: "#ffffff", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 900, margin: "0 0 12px" }}>
                Những khác biệt tạo giá trị lâu dài
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", margin: "0 auto", lineHeight: 1.65 }}>
                Hệ sinh thái được thiết kế để doanh nghiệp đi nhanh hơn, vững hơn và tìm được đúng nguồn lực ở từng giai đoạn.
              </p>
            </div>

            {/* Bento Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 24, maxWidth: 1080, margin: "0 auto" }}>
              {/* Left Bento Box (Large Featured Hero Advantage) */}
              <div style={{ background: "linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(8, 12, 22, 0.95) 100%)", borderRadius: 24, padding: "36px 32px", border: "1px solid rgba(56, 189, 248, 0.3)", boxShadow: "0 20px 50px rgba(0,0,0,0.6)", display: "flex", flexDirection: "column", justifyContent: "space-between" }} className="member-company-card">
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(56, 189, 248, 0.12)", border: "1px solid rgba(56, 189, 248, 0.3)", padding: "6px 16px", borderRadius: 20, marginBottom: 24 }}>
                    <i className="fa-solid fa-network-wired" style={{ color: "#38bdf8", fontSize: 14 }} />
                    <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>LỢI THẾ THIẾT YẾU</span>
                  </div>
                  <h3 style={{ color: "#ffffff", fontSize: "24px", fontWeight: 900, margin: "0 0 14px", lineHeight: 1.35 }}>
                    01. Hệ sinh thái khép kín đa ngành
                  </h3>
                  <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px", lineHeight: 1.75, margin: "0 0 24px", textAlign: "justify" }}>
                    Matrix Holding cung cấp giải pháp toàn diện cá nhân hóa theo nhu cầu và giai đoạn tăng trưởng. Việc kết nối trực tiếp các đơn vị thành viên giúp tối ưu nguồn lực và chi phí vận hành cho đối tác.
                  </p>
                </div>

                {/* Key Stat Badges inside Bento 1 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ background: "rgba(18, 24, 38, 0.8)", borderRadius: 14, padding: "12px 16px", border: "1px solid rgba(56,189,248,0.2)" }}>
                    <strong style={{ color: "#38bdf8", fontSize: "20px", fontWeight: 900, display: "block" }}>04 Trụ cột</strong>
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px" }}>Hệ sinh thái thành viên</span>
                  </div>
                  <div style={{ background: "rgba(18, 24, 38, 0.8)", borderRadius: 14, padding: "12px 16px", border: "1px solid rgba(56,189,248,0.2)" }}>
                    <strong style={{ color: "#38bdf8", fontSize: "20px", fontWeight: 900, display: "block" }}>100%</strong>
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px" }}>Bảo vệ nguồn lực</span>
                  </div>
                </div>
              </div>

              {/* Right Stack (3 Horizontal Rows) */}
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {/* Advantage 2 */}
                <div style={{ background: "rgba(18, 24, 38, 0.8)", borderRadius: 20, padding: "22px 24px", border: "1px solid rgba(245, 158, 11, 0.3)", boxShadow: "0 10px 30px rgba(0,0,0,0.4)", display: "flex", gap: 16, alignItems: "flex-start" }} className="member-company-card">
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(245, 158, 11, 0.15)", color: "#f59e0b", display: "grid", placeItems: "center", fontSize: 18, flexShrink: 0 }}>
                    <i className="fa-solid fa-cubes" />
                  </div>
                  <div>
                    <h4 style={{ color: "#ffffff", fontSize: "16.5px", fontWeight: 800, margin: "0 0 6px" }}>02. Dịch vụ toàn diện</h4>
                    <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "12.5px", lineHeight: 1.6, margin: 0, textAlign: "justify" }}>
                      Cung cấp cho doanh nghiệp nhiều nguồn lực cần thiết trong cùng một hệ thống, giúp tiết kiệm chi phí và rút ngắn thời gian.
                    </p>
                  </div>
                </div>

                {/* Advantage 3 */}
                <div style={{ background: "rgba(18, 24, 38, 0.8)", borderRadius: 20, padding: "22px 24px", border: "1px solid rgba(56, 189, 248, 0.25)", boxShadow: "0 10px 30px rgba(0,0,0,0.4)", display: "flex", gap: 16, alignItems: "flex-start" }} className="member-company-card">
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(56, 189, 248, 0.15)", color: "#38bdf8", display: "grid", placeItems: "center", fontSize: 18, flexShrink: 0 }}>
                    <i className="fa-solid fa-chart-pie" />
                  </div>
                  <div>
                    <h4 style={{ color: "#ffffff", fontSize: "16.5px", fontWeight: 800, margin: "0 0 6px" }}>03. Cơ hội hợp tác tiềm năng</h4>
                    <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "12.5px", lineHeight: 1.6, margin: 0, textAlign: "justify" }}>
                      Mở rộng mạng lưới kết nối doanh nghiệp với các đối tác, khách hàng lớn và nhà đầu tư chiến lược trên toàn quốc.
                    </p>
                  </div>
                </div>

                {/* Advantage 4 */}
                <div style={{ background: "rgba(18, 24, 38, 0.8)", borderRadius: 20, padding: "22px 24px", border: "1px solid rgba(139, 92, 246, 0.3)", boxShadow: "0 10px 30px rgba(0,0,0,0.4)", display: "flex", gap: 16, alignItems: "flex-start" }} className="member-company-card">
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(139, 92, 246, 0.15)", color: "#a78bfa", display: "grid", placeItems: "center", fontSize: 18, flexShrink: 0 }}>
                    <i className="fa-solid fa-sliders" />
                  </div>
                  <div>
                    <h4 style={{ color: "#ffffff", fontSize: "16.5px", fontWeight: 800, margin: "0 0 6px" }}>04. Cơ chế hợp tác linh hoạt</h4>
                    <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "12.5px", lineHeight: 1.6, margin: 0, textAlign: "justify" }}>
                      Thiết kế nhiều mô hình và cơ chế hợp tác linh hoạt, giúp doanh nghiệp dễ dàng lựa chọn phương án tối ưu nhất.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. TUYÊN NGÔN CỦA CHỦ TỊCH */}
        <section className="section" style={{ padding: "80px 0", background: "#05070f" }}>
          <div className="container">
            <div style={{
              display: "grid",
              gridTemplateColumns: "0.95fr 1.05fr",
              gap: 56,
              alignItems: "center"
            }} className="about-intro-grid">
              {/* Portrait Box */}
              <div style={{ position: "relative", width: "100%", maxWidth: 400, margin: "0 auto" }}>
                <div style={{
                  position: "absolute",
                  inset: "14px -14px -14px 14px",
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
                  borderRadius: 24,
                  padding: 12,
                  border: "1px solid rgba(41, 151, 255, 0.4)"
                }}>
                  <div style={{ borderRadius: 18, overflow: "hidden", height: 380, position: "relative" }}>
                    <img
                      src="/assets/chairman.jpg"
                      alt="Chủ tịch Hội đồng Quản trị Matrix Holding"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                </div>
              </div>

              {/* Quote text */}
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
                  <span style={{ height: 2, width: 24, background: "#38bdf8" }} />
                  ⚡ TUYÊN NGÔN CỦA CHỦ TỊCH
                </div>
                <span style={{ display: "block", color: "#38bdf8", fontSize: "56px", lineHeight: "0.8", fontWeight: 900, fontFamily: "Georgia, serif", marginBottom: 12 }}>“</span>
                <blockquote style={{ fontSize: "clamp(18px, 2.1vw, 25px)", fontWeight: 800, lineHeight: 1.5, color: "#ffffff", margin: "0 0 28px", letterSpacing: "-0.02em", textAlign: "justify" }}>
                  “Khởi nghiệp không chỉ cần một ý tưởng tốt, mà còn cần một người dẫn đường có tâm, một môi trường đủ điều kiện để phát triển và những cơ hội đủ lớn để trưởng thành.”
                </blockquote>
                <div style={{ borderLeft: "3px solid #38bdf8", paddingLeft: 16 }}>
                  <strong style={{ display: "block", color: "#ffffff", fontSize: "15px", fontWeight: 800 }}>Chủ tịch Hội đồng Quản trị</strong>
                  <span style={{ color: "#38bdf8", fontSize: "13px", fontWeight: 700 }}>Matrix Holding</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

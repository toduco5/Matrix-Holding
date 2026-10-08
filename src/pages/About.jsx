import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { TEAM_MEMBERS } from "../data/team.js";
import PageBanner from "../components/PageBanner.jsx";
import FourEcosystems from "../components/FourEcosystems.jsx";
import StrategicPartners from "../components/StrategicPartners.jsx";

const TIMELINE_DATA = [
  {
    year: "2016",
    tag: "Khởi nguồn sáng tạo",
    title: "Những thành tựu nổi bật năm 2016",
    desc: "Matrix Holding chính thức đặt nền móng, hoạt động theo định hướng sáng tạo nghệ thuật với các dự án phim ảnh và nội dung truyền thông chất lượng cao.",
    bullets: [
      "Chính thức đặt nền móng thành lập Matrix Holding.",
      "Hoạt động trọng tâm phát triển nghệ thuật, phim ảnh và nội dung sáng tạo.",
      "Triển khai các dự án sản xuất phim ngắn, phim dài tập đạt hiệu ứng tích cực.",
      "Xây dựng đội ngũ nhân sự chuyên môn và định hình tư duy phát triển lâu dài."
    ],
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85"
  },
  {
    year: "2018",
    tag: "Mở rộng sản xuất",
    title: "Những thành tựu nổi bật năm 2018",
    desc: "Mở rộng quy mô sản xuất truyền thông, hợp tác cùng hơn 50 thương hiệu doanh nghiệp trên toàn quốc và nâng cao năng lực triển khai.",
    bullets: [
      "Thiết lập mạng lưới đối tác sản xuất nội dung quy mô lớn.",
      "Triển khai các chiến dịch truyền thông thương hiệu đa kênh.",
      "Đạt mốc tăng trưởng doanh thu 150% so với giai đoạn đầu.",
      "Nâng cấp trang thiết bị hiện đại và hoàn thiện quy trình sản xuất."
    ],
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=85"
  },
  {
    year: "2020",
    tag: "Chuyển mình kinh doanh số",
    title: "Những thành tựu nổi bật năm 2020",
    desc: "Matrix Holding bắt đầu mở rộng hoạt động kinh doanh, trở thành đơn vị cung cấp dịch vụ truyền thông số và giải pháp xây dựng thương hiệu toàn diện.",
    bullets: [
      "Mở rộng sang lĩnh vực dịch vụ truyền thông mạng xã hội chuyên nghiệp.",
      "Cung cấp gói giải pháp xây dựng thương hiệu toàn diện cho doanh nghiệp.",
      "Thiết lập mạng lưới đối tác kinh doanh bước đầu tại Hà Nội và khu vực lân cận.",
      "Tăng trưởng doanh thu và mở rộng quy mô bộ máy vận hành."
    ],
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    year: "2022",
    tag: "Liên minh đối tác",
    title: "Những thành tựu nổi bật năm 2022",
    desc: "Mở rộng mạng lưới đối tác kết nối kinh doanh tại Hà Nội, TP.HCM và các vùng kinh tế trọng điểm, chuẩn bị nền móng cho mô hình tập đoàn.",
    bullets: [
      "Hình thành mạng lưới xúc tiến thương mại và liên minh đối tác.",
      "Ký kết thỏa thuận hợp tác cùng các hiệp hội doanh nghiệp uy tín.",
      "Mở rộng hiện diện thương hiệu tại các thành phố lớn.",
      "Chuẩn bị nguồn lực cho mô hình tập đoàn đa hệ sinh thái."
    ],
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1000&q=85"
  },
  {
    year: "2023",
    tag: "Chuẩn hóa pháp lý",
    title: "Những thành tựu nổi bật năm 2023",
    desc: "Matrix Holding chuẩn hóa toàn bộ nền tảng pháp lý, hoàn thiện cơ cấu quản trị doanh nghiệp và nâng cao uy tín trên thị trường tư vấn quản trị.",
    bullets: [
      "Hoàn thiện toàn bộ hạ tầng pháp lý và cơ cấu quản trị doanh nghiệp.",
      "Nâng cấp bộ giải pháp tư vấn quản trị và kết nối nguồn lực cho đối tác.",
      "Nâng cao vị thế thương hiệu Matrix Holding trên thị trường tư vấn Việt Nam.",
      "Ký kết hợp tác chiến lược với nhiều định chế tài chính và đơn vị uy tín."
    ],
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85"
  },
  {
    year: "2024",
    tag: "04 Trụ cột hệ sinh thái",
    title: "Những thành tựu nổi bật năm 2024",
    desc: "Chính thức vận hành 04 trụ cột hệ sinh thái thành viên: Matrix Network, Matrix Connect, Matrix Ventures và Matrix Academy theo mô hình khép kín.",
    bullets: [
      "Liên kết sức mạnh 4 trụ cột hệ sinh thái bổ trợ lẫn nhau.",
      "Khởi động chương trình ươm mầm doanh nghiệp và kết nối nguồn vốn.",
      "Tổ chức chuỗi diễn đàn kết nối giao thương cấp vùng.",
      "Định hình văn hóa doanh nghiệp đổi mới sáng tạo không ngừng."
    ],
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85"
  },
  {
    year: "2025",
    tag: "Đầu tư & Đào tạo tinh hoa",
    title: "Những thành tựu nổi bật năm 2025",
    desc: "Đẩy mạnh quỹ Matrix Ventures giải ngân vào các dự án khởi nghiệp tiềm năng, đồng thời học viện Matrix Academy đào tạo thế hệ nhân lực tinh hoa.",
    bullets: [
      "Quỹ đầu tư hoàn thành thẩm định và rót vốn vào các dự án hạt giống.",
      "Học viện Matrix Academy đào tạo hơn 1,000 học viên và nhà sáng lập trẻ.",
      "Nâng cao năng lực cạnh tranh cho các đối tác trong hệ sinh thái.",
      "Tạo bệ phóng vững chắc để các dự án tăng tốc bứt phá."
    ],
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85"
  },
  {
    year: "2026",
    tag: "Tái cấu trúc toàn diện",
    title: "Những thành tựu nổi bật năm 2026",
    desc: "Matrix Holding tái cấu trúc toàn diện, tối ưu hóa bộ máy vận hành và mở rộng quy mô trụ sở điều hành trung tâm tại Hà Nội.",
    bullets: [
      "Tối ưu hóa nguồn lực và chuyển giao quy trình chuẩn quốc tế.",
      "Thiết lập quan hệ đối tác chiến lược sâu rộng với các tập đoàn lớn.",
      "Khẳng định vị thế tổ chức kết nối đầu tư và giải pháp doanh nghiệp hàng đầu.",
      "Phát triển cộng đồng hàng chục nghìn doanh nhân và nhà đầu tư."
    ],
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    year: "2027",
    tag: "Tầm nhìn tương lai",
    title: "Tầm nhìn phát triển năm 2027",
    desc: "Vươn tầm khu vực Đông Nam Á, trở thành tập đoàn đầu tư và phát triển hệ sinh thái kinh doanh đa ngành chuẩn mực và bền vững.",
    bullets: [
      "Mở rộng quy mô các mảng kinh doanh cốt lõi ra thị trường khu vực.",
      "Kết nối các quỹ đầu tư quốc tế với các startup triển vọng tại Việt Nam.",
      "Ứng dụng chuyển đổi số toàn diện trong toàn bộ chuỗi giá trị.",
      "Kiến tạo giá trị gia tăng bền vững cho xã hội và cộng đồng."
    ],
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85"
  }
];

export default function About() {
  const defaultIdx = TIMELINE_DATA.findIndex(item => item.year === "2024");
  const [activeIndex, setActiveIndex] = useState(defaultIdx >= 0 ? defaultIdx : 0);
  const selectedMilestone = TIMELINE_DATA[activeIndex] || TIMELINE_DATA[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : TIMELINE_DATA.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < TIMELINE_DATA.length - 1 ? prev + 1 : 0));
  };

  const handleSpinnerWheel = (e) => {
    if (e.deltaY > 0) {
      handleNext();
    } else if (e.deltaY < 0) {
      handlePrev();
    }
  };

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
          titlePrefix="GIỚI THIỆU DOANH NGHIỆP"
          subtitle="Hành trình kiến tạo hệ sinh thái, kết nối nguồn lực và phát triển giá trị bền vững."
        />

        {/* BẢO CHỨNG BỞI (VERBATIM FROM MATRIX VENTURES - NGAY ĐẦU TRANG) */}
        <StrategicPartners />

        {/* 1. CÂU CHUYỆN THƯƠNG HIỆU */}
        <section className="section" style={{ padding: "80px 0", background: "#05070f", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div style={{
              maxWidth: 1200,
              margin: "0 auto",
              background: "linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(10, 15, 30, 0.9) 100%)",
              border: "1px solid rgba(56, 189, 248, 0.22)",
              borderRadius: 24,
              padding: "48px 44px",
              boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 35px rgba(56, 189, 248, 0.08)"
            }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 0.9fr",
                gap: 48,
                alignItems: "stretch"
              }} className="brand-story-grid">
                {/* Cột trái: Văn bản tinh gọn, chuẩn mực */}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <span style={{
                    color: "#38bdf8",
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    display: "inline-block",
                    marginBottom: 14
                  }}>
                    CÂU CHUYỆN THƯƠNG HIỆU
                  </span>

                  <h2 style={{
                    color: "#ffffff",
                    fontSize: "clamp(26px, 2.5vw, 34px)",
                    fontWeight: 800,
                    margin: "0 0 20px",
                    lineHeight: 1.35,
                    fontFamily: "'Be Vietnam Pro', sans-serif"
                  }}>
                    Khát vọng kiến tạo bệ phóng vững chắc cho doanh nghiệp Việt
                  </h2>

                  <p style={{
                    color: "rgba(255, 255, 255, 0.82)",
                    fontSize: "14.5px",
                    lineHeight: 1.8,
                    margin: "0 0 16px",
                    textAlign: "justify",
                    textJustify: "inter-word"
                  }}>
                    Matrix Holding được thành lập với mục tiêu trở thành cầu nối vững chắc giúp các doanh nghiệp Việt Nam tối ưu hóa nguồn lực, nâng cao năng lực cạnh tranh và mở rộng quy mô kinh doanh. Xuất phát điểm từ những dự án phát triển truyền thông và giải pháp thương hiệu, chúng tôi nhận ra rằng sự phát triển bền vững không thể tách rời một hệ sinh thái khép kín, nơi các đơn vị thành viên bổ trợ lẫn nhau.
                  </p>

                  <p style={{
                    color: "rgba(255, 255, 255, 0.82)",
                    fontSize: "14.5px",
                    lineHeight: 1.8,
                    margin: 0,
                    textAlign: "justify",
                    textJustify: "inter-word"
                  }}>
                    Hành trình của Matrix Holding là chặng đường không ngừng chuẩn hóa nền tảng pháp lý, hội tụ chuyên gia và xây dựng các trụ cột cốt lõi: Matrix Network, Matrix Connect, Matrix Ventures và Matrix Academy. Chúng tôi tin rằng mỗi ý tưởng tiềm năng khi được đặt đúng môi trường và kết nối đúng nguồn lực sẽ bứt phá mạnh mẽ để tạo nên những giá trị lâu dài cho xã hội.
                  </p>
                </div>

                {/* Cột phải: Khung ảnh kiến trúc tập đoàn tinh tế, không màu mè */}
                <div className="brand-story-image-card" style={{ minHeight: "100%", height: "100%" }}>
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
                    alt="Matrix Holding Trụ sở và Khát vọng Doanh nghiệp"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


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


        {/* 8. MÔ HÌNH HOẠT ĐỘNG (04 HỆ SINH THÁI THÀNH VIÊN) */}
        <FourEcosystems />

        {/* 9. LỊCH SỬ VÀ CÁC CỘT MỐC QUAN TRỌNG - CHUẨN SPINNER TECHCOMBANK */}
        <section className="section" style={{ padding: "85px 0", background: "#05070f", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
          <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            {/* Header centered */}
            <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px" }}>
              <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ed1c24", boxShadow: "0 0 8px #ed1c24" }} />
                HÀNH TRÌNH MATRIX HOLDING
              </span>
              <h2 style={{ color: "#ffffff", fontSize: "clamp(26px, 3.2vw, 36px)", fontWeight: 800, margin: 0, letterSpacing: "-0.01em" }}>
                Lịch sử và các cột mốc quan trọng
              </h2>
            </div>

            {/* Main Dark Band Container */}
            <div
              style={{
                background: "#181818",
                borderRadius: 22,
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.65)",
                padding: "36px 36px",
                display: "grid",
                gridTemplateColumns: "110px 1fr 340px",
                gap: "36px",
                alignItems: "center",
                position: "relative",
                minHeight: 460
              }}
              className="tech-spinner-container"
            >
              {/* 1. Left Column: iOS / Techcombank Style Year Spinner Wheel with Smooth Slide Animation */}
              <div
                onWheel={handleSpinnerWheel}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  userSelect: "none"
                }}
                title="Cuộn chuột hoặc nhấn mũi tên để đổi năm"
              >
                {/* Arrow Up */}
                <button
                  type="button"
                  onClick={handlePrev}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "rgba(255, 255, 255, 0.65)",
                    fontSize: "20px",
                    cursor: "pointer",
                    padding: "6px 14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "color 0.2s ease",
                    marginBottom: 6
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.65)")}
                  title="Năm trước"
                >
                  <i className="fa-solid fa-chevron-up" style={{ fontSize: 16 }} />
                </button>

                {/* Spinner Wheel Viewport (Height = 220px: 5 visible items x 44px) */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "220px",
                    overflow: "hidden",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                    maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)"
                  }}
                >
                  {/* Stationary Red Pill highlight in center slot */}
                  <div
                    style={{
                      position: "absolute",
                      top: 88,
                      left: 6,
                      right: 6,
                      height: 44,
                      borderRadius: 30,
                      background: "#ed1c24",
                      boxShadow: "0 4px 20px rgba(237, 28, 36, 0.55)",
                      pointerEvents: "none",
                      zIndex: 1
                    }}
                  />

                  {/* Sliding Reel Track of all years */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      transform: `translateY(${(2 - activeIndex) * 44}px)`,
                      transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                  >
                    {TIMELINE_DATA.map((item, idx) => {
                      const isActive = idx === activeIndex;
                      const isNear = Math.abs(idx - activeIndex) === 1;

                      return (
                        <div
                          key={item.year}
                          onClick={() => setActiveIndex(idx)}
                          style={{
                            height: 44,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            fontSize: isActive ? "18px" : isNear ? "16px" : "14px",
                            fontWeight: isActive ? 800 : isNear ? 700 : 500,
                            color: isActive ? "#ffffff" : isNear ? "rgba(255, 255, 255, 0.65)" : "rgba(255, 255, 255, 0.3)",
                            letterSpacing: "0.02em",
                            transition: "color 0.3s ease, font-size 0.3s ease",
                            transform: isActive ? "scale(1.05)" : "scale(1)"
                          }}
                        >
                          {item.year}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Arrow Down */}
                <button
                  type="button"
                  onClick={handleNext}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "rgba(255, 255, 255, 0.65)",
                    fontSize: "20px",
                    cursor: "pointer",
                    padding: "6px 14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "color 0.2s ease",
                    marginTop: 6
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.65)")}
                  title="Năm tiếp theo"
                >
                  <i className="fa-solid fa-chevron-down" style={{ fontSize: 16 }} />
                </button>
              </div>

              {/* 2. Middle Column: Milestone Details (Stable Height, No Layout Shift) */}
              <div
                key={`milestone-content-${selectedMilestone.year}`}
                className="milestone-content-anim"
                style={{
                  minHeight: 280,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "0 10px"
                }}
              >
                <h3
                  style={{
                    color: "#ffffff",
                    fontSize: "clamp(22px, 2.3vw, 28px)",
                    fontWeight: 800,
                    margin: "0 0 16px",
                    lineHeight: 1.35,
                    letterSpacing: "-0.01em"
                  }}
                >
                  {selectedMilestone.title}
                </h3>

                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    margin: "0 0 20px",
                    textAlign: "justify",
                    textJustify: "inter-word"
                  }}
                >
                  {selectedMilestone.desc}
                </p>

                {selectedMilestone.bullets && (
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 10
                    }}
                  >
                    {selectedMilestone.bullets.map((b, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          fontSize: "13.5px",
                          lineHeight: 1.6,
                          color: "rgba(255, 255, 255, 0.72)",
                          textAlign: "justify",
                          textJustify: "inter-word"
                        }}
                      >
                        <span style={{ color: "#ed1c24", fontWeight: 900, fontSize: "14px", marginTop: "1px", flexShrink: 0 }}>•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* 3. Right Column: Historic Photo Card with Rounded Corners */}
              <div
                style={{
                  width: "100%",
                  height: "360px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 18px 45px rgba(0, 0, 0, 0.65)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  position: "relative"
                }}
              >
                <img
                  key={`milestone-img-${selectedMilestone.year}`}
                  src={selectedMilestone.img}
                  alt={selectedMilestone.title}
                  className="milestone-content-anim"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block"
                  }}
                />
              </div>
            </div>
          </div>
        </section>
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
                      alt="Chủ tịch Hội đồng "
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
                <blockquote style={{ fontSize: "clamp(18px, 2.1vw, 25px)", fontWeight: 800, lineHeight: 1.5, color: "#ffffff", margin: "0 0 28px", letterSpacing: "-0.02em", textAlign: "justify" }}>
                  “Khởi nghiệp không chỉ cần một ý tưởng tốt, mà còn cần một người dẫn đường có tâm, một môi trường đủ điều kiện để phát triển và những cơ hội đủ lớn để trưởng thành.”
                </blockquote>
                <div style={{ borderLeft: "3px solid #38bdf8", paddingLeft: 16 }}>
                  <strong style={{ display: "block", color: "#ffffff", fontSize: "15px", fontWeight: 800 }}>CHỦ TỊCH CÔNG TY TNHH MATRIX HOLDING</strong>
                  <span style={{ color: "#38bdf8", fontSize: "13px", fontWeight: 700 }}>ÔNG HỒ ANH TUÁN</span>
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

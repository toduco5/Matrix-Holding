import { useRef } from "react";
import { Link } from "react-router-dom";

const FOUR_UNITS = [
  {
    number: "01",
    name: "MATRIX NETWORK",
    subline: "Hệ sinh thái cộng đồng",
    desc: "Nền tảng xây dựng và phát triển cộng đồng doanh nghiệp thông qua mô hình thành viên, tạo dựng mạng lưới quan hệ, chia sẻ giá trị và cơ hội phát triển.",
    actionText: "KHÁM PHÁ NGAY",
    link: "/ecosystem/network",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    number: "02",
    name: "MATRIX CONNECT",
    subline: "Hệ sinh thái kết nối",
    desc: "Nền tảng kết nối và xúc tiến thương mại, giúp doanh nghiệp tìm kiếm đối tác, khách hàng và cơ hội hợp tác mới nhằm mở rộng thị trường, tăng trưởng doanh thu.",
    actionText: "KHÁM PHÁ NGAY",
    link: "/ecosystem/connect",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=85"
  },
  {
    number: "03",
    name: "MATRIX BUSINESS",
    subline: "Hệ sinh thái kinh doanh",
    desc: "Nền tảng xây dựng, vận hành và phát triển các mô hình kinh doanh đa ngành thông qua hình thức hợp tác sản xuất, phân phối và các dự án thương mại khác.",
    actionText: "KHÁM PHÁ NGAY",
    link: "/ecosystem/ventures",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    number: "04",
    name: "MATRIX CAPITAL",
    subline: "Hệ sinh thái đầu tư",
    desc: "Nền tảng đầu tư, quản lý và phát triển vốn, gia tăng giá trị tài sản thông qua hình thức góp vốn, sở hữu cổ phần, liên doanh và các dự án tiềm năng khác.",
    actionText: "KHÁM PHÁ NGAY",
    link: "/ecosystem/academy",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85"
  }
];

export default function FourEcosystems() {
  const galleryRef = useRef(null);
  const scrollGallery = (direction) => galleryRef.current?.scrollBy({ left: direction * 420, behavior: "smooth" });

  return (
    <section className="section four-ecosystems-section" style={{ padding: "85px 0", background: "#05070f", position: "relative", overflow: "hidden" }}>
      <div className="container ecosystem-gallery-wrap" style={{ position: "relative", zIndex: 2 }}>
        {/* Compact gallery header inspired by the reference layout. */}
        <div className="ecosystem-gallery-intro">
          <span className="ecosystem-gallery-eyebrow">KẾT NỐI • HỢP TÁC • PHÁT TRIỂN</span>
          <h2 style={{
            color: "#ffffff",
            fontSize: "clamp(20px, 2.3vw, 25px)",
            fontWeight: 900,
            letterSpacing: "-0.01em",
            margin: 0,
            lineHeight: 1.2,
            fontFamily: "'Be Vietnam Pro', sans-serif"
          }}>
            HỆ SINH THÁI MATRIX HOLDING
          </h2>
          <p>Khám phá bốn hệ sinh thái kết nối cộng đồng, xúc tiến thương mại, phát triển kinh doanh và đầu tư.</p>
        </div>
        <div className="ecosystem-gallery-header" style={{ maxWidth: 1400, margin: "0 auto 22px" }}>
          <div />
          <div className="ecosystem-gallery-controls" aria-label="Điều hướng hệ sinh thái">
            <button type="button" onClick={() => scrollGallery(-1)} aria-label="Ảnh trước"><i className="fa-solid fa-arrow-left" /></button>
            <button type="button" onClick={() => scrollGallery(1)} aria-label="Ảnh tiếp theo"><i className="fa-solid fa-arrow-right" /></button>
          </div>
        </div>

        {/* Four-image horizontal ecosystem gallery. */}
        <div style={{
          display: "flex",
          gap: 8,
          maxWidth: 1400,
          margin: "0 auto",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none"
        }} className="ecosystem-image-gallery" ref={galleryRef}>
          {FOUR_UNITS.map((unit) => (
            <Link
              key={unit.number}
              to={unit.link}
              className="vertical-image-card ecosystem-gallery-card"
              style={{
                position: "relative",
                height: 190,
                flex: "0 0 calc((100% - 24px) / 4)",
                scrollSnapAlign: "start",
                borderRadius: 0,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
                textAlign: "center",
                textDecoration: "none",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 14px 40px rgba(0, 0, 0, 0.6)",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              {/* Card Background Photo */}
              <div
                className="card-bg-img"
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${unit.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.5s ease"
                }}
              />

              {/* Dark Gradient Overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(5,7,15,0.24) 0%, rgba(5,7,15,0.5) 100%)"
              }} />

              <div className="ecosystem-gallery-title">
                <h3>{unit.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}




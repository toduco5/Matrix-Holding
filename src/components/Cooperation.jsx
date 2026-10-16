import { Link } from "react-router-dom";
import "../styles/cooperation.css";

const opportunities = [
  { title: "Khách hàng", text: "Mỗi nhu cầu là điểm khởi đầu cho một giải pháp phù hợp. Matrix Holding kết nối sản phẩm, dịch vụ và đội ngũ chuyên môn để đồng hành cùng bạn trong công việc và cuộc sống.", role: "Khác", image: "customer", alt: "Nhân vật khách hàng nữ trong trang phục thanh lịch" },
  { title: "Đối tác", text: "Cùng chia sẻ thế mạnh, mở rộng nguồn lực và phát triển thị trường. Chúng tôi hướng tới mối quan hệ hợp tác minh bạch, tin cậy và tạo giá trị lâu dài cho các bên.", role: "Đối tác chuyên môn", image: "partner", alt: "Nhân vật đối tác nam với cử chỉ chào đón" },
  { title: "Nhà đầu tư", text: "Kết nối tầm nhìn với những cơ hội phát triển. Matrix Holding tạo không gian trao đổi thông tin dự án, định hướng nguồn vốn và phương án hợp tác trên cơ sở thẩm định độc lập.", role: "Nhà đầu tư", image: "investor", alt: "Nhân vật nhà đầu tư trong trang phục doanh nhân" },
];

export default function Cooperation() {
  return (
    <section className="section cooperation-section" aria-labelledby="cooperation-title">
      <div className="cooperation-fullwidth">
        <header className="cooperation-heading">
          <p className="eyebrow home-section-label">QUAN HỆ HỢP TÁC</p>
          <h2 id="cooperation-title">KẾT NỐI NGUỒN LỰC<br />CÙNG KIẾN TẠO GIÁ TRỊ</h2>
          <p>Matrix Holding hướng tới mối quan hệ hợp tác bền vững, dựa trên sự tin cậy, năng lực bổ trợ và mục tiêu chung.</p>
        </header>
        <div className="cooperation-rows">
          {opportunities.map((item, index) => (
            <article className={`cooperation-row${index % 2 ? " cooperation-row--reverse" : ""}`} key={item.image}>
              <div className="cooperation-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link to={`/contact?type=${encodeURIComponent(item.role)}`}>
                  Trao đổi hợp tác <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
              </div>
              <div className="cooperation-portrait">
                <img src={`/assets/cooperation-${item.image === "partner" ? "partner-handshake" : `${item.image}-black`}.png`} alt={item.image === "partner" ? "Hai đối tác doanh nghiệp bắt tay hợp tác" : item.alt} loading="lazy" width="1024" height={item.image === "partner" ? 1024 : 1536} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { FAQS } from "../data/ecosystem-units.js";

export default function HomeFAQ() {
  return <><section className="section matrix-faq"><div className="container matrix-faq__grid"><div className="section-heading"><p className="eyebrow">CÂU HỎI THƯỜNG GẶP</p><h2>Làm rõ trước khi <em>bắt đầu kết nối.</em></h2><p>Thông tin nền tảng giúp các bên chủ động chuẩn bị cho một cuộc trao đổi hiệu quả.</p></div><div>{FAQS.map(([question, answer]) => <details key={question}><summary>{question}<i className="fa-solid fa-plus" /></summary><p>{answer}</p></details>)}</div></div></section>
  <section className="matrix-partner-cta"><div className="container"><div><p className="eyebrow">ĐỒNG HÀNH CÙNG MATRIX HOLDING</p><h2>Trở thành một phần của hệ sinh thái kiến tạo giá trị.</h2><p>Chúng tôi chào đón các đối tác cùng chia sẻ định hướng phát triển dài hạn và cách làm việc minh bạch.</p></div><div className="matrix-partner-cta__actions"><Link to="/contact" className="btn">Liên hệ chúng tôi <i className="fa-solid fa-arrow-right" /></Link><Link to="/contact" className="text-link">Xem cơ hội hợp tác</Link></div></div></section></>;
}

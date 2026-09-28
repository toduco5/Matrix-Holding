import { IMG } from "../data/constants.js";
import TopBar from "../components/TopBar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";

const guides=[
  {id:"investor-readiness",tag:"DÀNH CHO CHỦ DỰ ÁN",title:"Một hồ sơ kết nối nhà đầu tư cần có gì?",image:"photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=84",intro:"Nhà đầu tư cần dữ liệu đủ rõ để quyết định có tiếp tục tìm hiểu hay không.",items:["Vấn đề thị trường và giải pháp đang cung cấp","Đội ngũ, mô hình vận hành và kết quả hiện tại","Nhu cầu nguồn lực, mục đích sử dụng và mốc triển khai","Rủi ro chính cùng tài liệu có thể kiểm chứng"]},
  {id:"due-diligence",tag:"DÀNH CHO NHÀ ĐẦU TƯ",title:"Bốn lớp thẩm định trước quyết định",image:"photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=84",intro:"Một phần giới thiệu hấp dẫn không thể thay thế hồ sơ gốc và đánh giá độc lập.",items:["Pháp lý: chủ thể, quyền sở hữu, giấy phép và hợp đồng","Tài chính: dòng tiền, nghĩa vụ, giả định và nhu cầu vốn","Thị trường: khách hàng, cạnh tranh và khả năng mở rộng","Vận hành: đội ngũ, công nghệ, tiến độ và rủi ro thực thi"]},
  {id:"partnership",tag:"DÀNH CHO CÁC BÊN",title:"Thiết lập một quan hệ hợp tác bền vững",image:"photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=84",intro:"Sự phù hợp về kỳ vọng và cách làm việc quan trọng không kém tiềm năng của cơ hội.",items:["Thống nhất mục tiêu, vai trò và quyền ra quyết định","Xác định thông tin được chia sẻ và nghĩa vụ bảo mật","Đặt mốc đánh giá bằng kết quả có thể đo lường","Ghi nhận rõ điều kiện thay đổi hoặc kết thúc hợp tác"]}
];

export default function News(){return <>
  <PageMeta title="Kiến thức đầu tư minh bạch | Matrix Holding" description="Cẩm nang chuẩn bị hồ sơ, thẩm định rủi ro và xây dựng quan hệ hợp tác dành cho cộng đồng kết nối đầu tư."/>
  <TopBar/><Header/><main>
    <section className="detail-hero knowledge-hero" style={{backgroundImage:"linear-gradient(90deg,#06152ef2,#0f276590),url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=86)"}}><div className="container"><p className="eyebrow">KIẾN THỨC ĐẦU TƯ THỰC HÀNH</p><h1>Thông tin rõ ràng giúp quyết định có cơ sở.</h1><p>Các hướng dẫn tập trung vào những câu hỏi cần đặt ra trước khi kết nối, thẩm định hoặc xác lập quan hệ hợp tác.</p></div></section>
    <section className="section"><div className="container"><div className="section-heading"><p className="eyebrow">CẨM NANG CỘNG ĐỒNG</p><h2>Đọc để biết cần <em>kiểm tra điều gì.</em></h2><p>Nội dung mang tính giáo dục, không phải khuyến nghị đầu tư và không thay thế ý kiến của chuyên gia được cấp phép.</p></div><div className="knowledge-grid">{guides.map(guide=><article id={guide.id} className="knowledge-card" key={guide.id}><img src={`${IMG}/${guide.image}`} alt={guide.title}/><div><span className="eyebrow">{guide.tag}</span><h2>{guide.title}</h2><p>{guide.intro}</p><h3>Danh sách cần kiểm tra</h3><ul>{guide.items.map(item=><li key={item}><i className="fa-solid fa-check"/>{item}</li>)}</ul><a className="text-link" href="/contact">Trao đổi nhu cầu cụ thể <i className="fa-solid fa-arrow-right"/></a></div></article>)}</div></div></section>
    <section className="section services-section"><div className="container"><div className="section-heading"><p className="eyebrow">NGUYÊN TẮC XUẤT BẢN</p><h2>Nội dung có giới hạn <em>được nói rõ.</em></h2></div><div className="boundary-grid"><article><i className="fa-solid fa-book-open"/><h3>Mục đích giáo dục</h3><p>Cung cấp câu hỏi và khung tham khảo giúp cộng đồng chuẩn bị tốt hơn trước khi trao đổi.</p></article><article><i className="fa-solid fa-scale-balanced"/><h3>Không phải tư vấn</h3><p>Nội dung không cấu thành tư vấn pháp lý, tài chính, thuế hoặc lời chào mời đầu tư.</p></article><article><i className="fa-solid fa-magnifying-glass"/><h3>Luôn cần kiểm chứng</h3><p>Người đọc cần đối chiếu hồ sơ gốc và làm việc với chuyên gia phù hợp trước quyết định.</p></article></div></div></section>
  </main><Footer/>
</>}


import { useState } from "react";
import { Link } from "react-router-dom";

const ECOSYSTEM_CATEGORIES = [
  "Tất cả",
  "Pháp lý",
  "Tài chính",
  "Vận hành",
  "Nhân sự",
  "Kinh doanh",
  "Truyền thông",
  "Công nghệ"
];

const MEMBER_COMPANIES = [
  {
    id: "network",
    name: "MATRIX NETWORK",
    desc: "Dịch vụ doanh nghiệp",
    subDesc: "Cung cấp hạ tầng vận hành và giải pháp quản trị doanh nghiệp toàn diện.",
    jobsCount: 1,
    categories: ["Vận hành", "Kinh doanh"],
    slug: "network"
  },
  {
    id: "connect",
    name: "MATRIX CONNECT",
    desc: "Kết nối doanh nghiệp",
    subDesc: "Mạng lưới kết nối đối tác, mở rộng cơ hội thương mại & hợp tác chiến lược.",
    jobsCount: 1,
    categories: ["Kinh doanh", "Truyền thông"],
    slug: "connect"
  },
  {
    id: "ventures",
    name: "MATRIX VENTURES",
    desc: "Đầu tư và đổi mới",
    subDesc: "Ươm tạo dự án đổi mới sáng tạo và tối ưu danh mục đầu tư tăng trưởng.",
    jobsCount: 1,
    categories: ["Tài chính", "Công nghệ"],
    slug: "ventures"
  },
  {
    id: "strategy",
    name: "MATRIX STRATEGY",
    desc: "Tư vấn chiến lược",
    subDesc: "Hoạch định chiến lược tái cấu trúc và định hướng phát triển bền vững.",
    jobsCount: 1,
    categories: ["Chiến lược", "Pháp lý"],
    slug: "strategy"
  },
  {
    id: "research",
    name: "MATRIX RESEARCH",
    desc: "Nghiên cứu & phát triển",
    subDesc: "Nghiên cứu thị trường, xu hướng công nghệ và mô hình kinh doanh mới.",
    jobsCount: 1,
    categories: ["Công nghệ", "Chiến lược"],
    slug: "research"
  },
  {
    id: "legal",
    name: "MATRIX LEGAL",
    desc: "Tư vấn pháp lý",
    subDesc: "Đảm bảo tuân thủ pháp lý, quản trị rủi ro và tư vấn giao dịch M&A.",
    jobsCount: 1,
    categories: ["Pháp lý"],
    slug: "legal"
  },
  {
    id: "finance",
    name: "MATRIX FINANCE",
    desc: "Quản lý tài chính",
    subDesc: "Hoạch định cấu trúc vốn, quản trị dòng tiền và tối ưu nguồn lực tài chính.",
    jobsCount: 1,
    categories: ["Tài chính"],
    slug: "finance"
  },
  {
    id: "accounting",
    name: "MATRIX ACCOUNTING",
    desc: "Kế toán & kiểm toán",
    subDesc: "Cung cấp giải pháp báo cáo tài chính minh bạch và kiểm soát rủi ro.",
    jobsCount: 1,
    categories: ["Tài chính", "Vận hành"],
    slug: "accounting"
  }
];

export default function HomeCareers() {
  const [activeTab, setActiveTab] = useState("Tất cả");
  const [isFollowing, setIsFollowing] = useState(false);

  const filteredCompanies = MEMBER_COMPANIES.filter(comp => {
    if (activeTab === "Tất cả") return true;
    return comp.categories.includes(activeTab);
  });

  return (
    <section className="section ecosystem-hiring-section" style={{ padding: "80px 0", background: "var(--navy, #05070f)" }}>
      
    </section>
  );
}

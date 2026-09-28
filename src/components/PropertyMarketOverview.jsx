import AnimatedNumber from "./AnimatedNumber.jsx";

const revenue = [
  { year: "Năm 1", value: 38 },
  { year: "Năm 2", value: 56 },
  { year: "Năm 3", value: 73 },
  { year: "Năm 4", value: 88 },
];

const portfolio = [
  { label: "Nhà ở", value: 72 },
  { label: "Thương mại", value: 58 },
  { label: "Kho vận", value: 46 },
  { label: "Nghỉ dưỡng", value: 34 },
];

export default function PropertyMarketOverview() {
  return <section className="property-dashboard" data-reveal aria-labelledby="property-dashboard-title">
    <div className="container">
      <div className="property-dashboard__heading">
        <div>
          <p className="eyebrow">MÔ HÌNH PHÂN TÍCH KINH DOANH</p>
          <h2 id="property-dashboard-title">Đọc cơ hội qua <em>dòng tiền và hiệu suất.</em></h2>
        </div>
        <p>Các chỉ số dưới đây là dữ liệu mô phỏng để minh họa cách trình bày một dự án. Chúng không đại diện cho dự án đang chào đầu tư.</p>
      </div>

      <div className="property-kpis">
        <article><span>Giá trị phát triển dự kiến</span><strong><AnimatedNumber value={240} /></strong><small>tỷ VNĐ · mô phỏng</small></article>
        <article><span>Tỷ lệ lấp đầy mục tiêu</span><strong><AnimatedNumber value={82} suffix="%" /></strong><small>sau giai đoạn ổn định</small></article>
        <article><span>Thời gian hoàn vốn</span><strong><AnimatedNumber value={7.5} decimals={1} /></strong><small>năm · kịch bản cơ sở</small></article>
        <article><span>Biên vận hành mục tiêu</span><strong><AnimatedNumber value={24} suffix="%" /></strong><small>trước chi phí tài chính</small></article>
      </div>

      <div className="property-charts">
        <article className="chart-card chart-card--revenue">
          <div className="chart-card__title"><div><span>DÒNG TIỀN VẬN HÀNH</span><h3>Kịch bản tăng trưởng 4 năm</h3></div><i className="fa-solid fa-arrow-trend-up" /></div>
          <div className="bar-chart" aria-label="Biểu đồ mô phỏng dòng tiền tăng từ 38 lên 88 đơn vị">
            {revenue.map(item => <div className="bar-chart__item" key={item.year}>
              <strong><AnimatedNumber value={item.value} /></strong><div className="bar-chart__track" style={{ "--bar-value": `${item.value}%` }}><span /></div><small>{item.year}</small>
            </div>)}
          </div>
        </article>

        <article className="chart-card chart-card--occupancy">
          <div className="chart-card__title"><div><span>HIỆU SUẤT TÀI SẢN</span><h3>Lấp đầy mục tiêu</h3></div></div>
          <div className="donut-chart" role="img" aria-label="Tỷ lệ lấp đầy mục tiêu 82 phần trăm"><div><strong><AnimatedNumber value={82} suffix="%" /></strong><span>Mục tiêu</span></div></div>
          <div className="chart-legend"><span><i className="is-active" />Đang khai thác</span><span><i />Dư địa</span></div>
        </article>

        <article className="chart-card chart-card--portfolio">
          <div className="chart-card__title"><div><span>CƠ CẤU CƠ HỘI</span><h3>Mức độ quan tâm theo phân khúc</h3></div></div>
          <div className="portfolio-chart">
            {portfolio.map(item => <div className="portfolio-row" key={item.label}><span>{item.label}</span><div><i style={{ "--portfolio-value": `${item.value}%` }} /></div><strong><AnimatedNumber value={item.value} suffix="%" /></strong></div>)}
          </div>
        </article>
      </div>
      <p className="property-disclaimer"><i className="fa-solid fa-circle-info" /> Khi có dự án thật, các biểu đồ cần được thay bằng số liệu từ hồ sơ pháp lý, nghiên cứu thị trường, ngân sách xây dựng và mô hình tài chính đã kiểm chứng.</p>
    </div>
  </section>;
}
